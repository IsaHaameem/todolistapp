const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 400;

// Load sounds
const jumpSound = new Audio('../static/sounds/jump-sound.mp3');
const collectSound = new Audio('../static/sounds/collect-sound.mp3');
const gameOverSound = new Audio('../static/sounds/game-over-sound.mp3');
const backgroundMusic = new Audio('../static/sounds/background-music.mp3');
const powerupSound = new Audio('../static/sounds/powerup-sound.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.3;

let player = {
    x: 50,
    y: 300,
    width: 30,
    height: 30,
    dx: 0,
    dy: 0,
    gravity: 0.5,
    jumpPower: 10,
    grounded: false,
    canDoubleJump: false,
    lives: 3,
    invincible: false,
};

let level = 1;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
let timer = 60; // Set timer to 60 seconds

let platforms = [];
let collectibles = [];
let powerUps = [];
let enemies = [];
let keys = {
    right: false,
    left: false,
    up: false,
};

// Game state
let isPaused = false;
let showMenu = true;

// Level data
const levels = [
    {
        platforms: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 150, y: 250, width: 100, height: 10 },
            { x: 300, y: 200, width: 100, height: 10 },
            { x: 500, y: 150, width: 100, height: 10 },
        ],
        collectibles: [
            { x: 200, y: 230, width: 15, height: 15, collected: false },
            { x: 350, y: 180, width: 15, height: 15, collected: false },
            { x: 600, y: 130, width: 15, height: 15, collected: false },
        ],
        powerUps: [
            { x: 400, y: 200, width: 15, height: 15, active: true, type: 'double-jump' },
            { x: 500, y: 200, width: 15, height: 15, active: true, type: 'speed-boost' },
        ],
        enemies: [
            { x: 700, y: 270, width: 30, height: 30, dx: -1, isPatrolling: true, patrolRange: 100, isShooting: false },
        ],
    },
    {
        platforms: [
            { x: 0, y: canvas.height - 20, width: canvas.width, height: 20 },
            { x: 150, y: 300, width: 100, height: 10 },
            { x: 400, y: 250, width: 100, height: 10 },
            { x: 650, y: 200, width: 100, height: 10 },
        ],
        collectibles: [
            { x: 220, y: 280, width: 15, height: 15, collected: false },
            { x: 370, y: 230, width: 15, height: 15, collected: false },
        ],
        powerUps: [
            { x: 550, y: 180, width: 15, height: 15, active: true, type: 'invincibility' },
        ],
        enemies: [
            { x: 300, y: 270, width: 30, height: 30, dx: -1, isPatrolling: true, patrolRange: 100, isShooting: false },
        ],
    },
    // Add more levels as needed...
];

// Game loop
function update() {
    if (showMenu) {
        showMainMenu();
        return;
    }

    if (isPaused) return;

    drawBackground(); // Draw background
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply gravity
    if (!player.grounded) {
        player.dy += player.gravity;
    }

    // Move player
    player.x += player.dx;
    player.y += player.dy;

    // Handle player collision with platforms
    platforms.forEach(platform => {
        if (player.x < platform.x + platform.width &&
            player.x + player.width > platform.x &&
            player.y < platform.y + platform.height &&
            player.y + player.height > platform.y) {
            player.y = platform.y - player.height; // Set player on top of the platform
            player.dy = 0;
            player.grounded = true;
        }
    });

    // Check for collectible collision
    collectibles.forEach(collectible => {
        if (!collectible.collected &&
            player.x < collectible.x + collectible.width &&
            player.x + player.width > collectible.x &&
            player.y < collectible.y + collectible.height &&
            player.y + player.height > collectible.y) {
            collectible.collected = true; // Mark collectible as collected
            score += 10; // Update score
            collectSound.play(); // Play collectible sound
        }
    });

    // Check for power-up collision
    powerUps.forEach(powerUp => {
        if (powerUp.active &&
            player.x < powerUp.x + powerUp.width &&
            player.x + player.width > powerUp.x &&
            player.y < powerUp.y + powerUp.height &&
            player.y + player.height > powerUp.y) {
            powerUp.active = false; // Deactivate power-up
            if (powerUp.type === 'double-jump') {
                player.canDoubleJump = true; // Allow double jump
            } else if (powerUp.type === 'speed-boost') {
                player.dx *= 2; // Double speed for a short duration
                setTimeout(() => {
                    player.dx /= 2; // Reset speed
                }, 5000); // Speed boost lasts 5 seconds
            } else if (powerUp.type === 'invincibility') {
                player.invincible = true; // Mark player as invincible
                setTimeout(() => {
                    player.invincible = false; // Remove invincibility after duration
                }, 5000); // 5 seconds of invincibility
            }
            powerupSound.play(); // Play power-up sound
        }
    });

    // Move enemies and check collision
    enemies.forEach(enemy => {
        enemy.x += enemy.dx;
        // Implement enemy patrol logic
        if (enemy.isPatrolling) {
            if (enemy.x < 0 || enemy.x > canvas.width - enemy.width) {
                enemy.dx = -enemy.dx; // Change direction
            }
        }

        // Check for collision with player
        if (player.x < enemy.x + enemy.width &&
            player.x + player.width > enemy.x &&
            player.y < enemy.y + enemy.height &&
            player.y + player.height > enemy.y) {
            if (!player.invincible) {
                player.lives -= 1; // Reduce lives
                if (player.lives <= 0) {
                    gameOver(); // End game if no lives left
                }
            }
        }
    });

    // Draw player as a rectangle
    ctx.fillStyle = 'green'; // Change player color
    ctx.fillRect(player.x, player.y, player.width, player.height);
    
    // Draw platforms, collectibles, power-ups, and enemies
    drawPlatforms();
    drawCollectibles();
    drawPowerUps();
    drawEnemies();

    // Update and display score and lives
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 20);
    ctx.fillText(`Lives: ${player.lives}`, 10, 40);
    ctx.fillText(`Time: ${Math.ceil(timer)}`, canvas.width - 100, 20); // Display timer

    // Check for level completion
    if (score >= level * 30) {
        levelUp(); // Level up when score reaches threshold
    }

    // Update timer
    if (!isPaused) {
        timer -= 1 / 60; // Decrease timer based on frame rate
        if (timer <= 0) {
            gameOver(); // End game if time runs out
        }
    }

    requestAnimationFrame(update);
}

// Draw functions
function drawBackground() {
    ctx.fillStyle = '#87CEEB'; // Sky blue color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Draw sky
}

function drawPlatforms() {
    ctx.fillStyle = 'brown';
    platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    });
}

function drawCollectibles() {
    ctx.fillStyle = 'gold';
    collectibles.forEach(collectible => {
        if (!collectible.collected) {
            ctx.fillRect(collectible.x, collectible.y, collectible.width, collectible.height);
        }
    });
}

function drawPowerUps() {
    ctx.fillStyle = 'blue';
    powerUps.forEach(powerUp => {
        if (powerUp.active) {
            ctx.fillRect(powerUp.x, powerUp.y, powerUp.width, powerUp.height);
        }
    });
}

function drawEnemies() {
    ctx.fillStyle = 'red';
    enemies.forEach(enemy => {
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });
}

// Game over function
function gameOver() {
    gameOverSound.play();
    backgroundMusic.pause();
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore); // Save high score
    }
    document.getElementById('final-score').innerText = `Your score: ${score} | High score: ${highScore}`;
    document.getElementById('game-over-screen').style.display = 'block';
    showMenu = false;
}

// Level up function
function levelUp() {
    level++;
    score = 0; // Reset score for the next level
    timer = 60; // Reset timer for the next level
    if (level > levels.length) {
        level = 1; // Reset to level 1 if all levels completed
    }
    platforms = levels[level - 1].platforms;
    collectibles = levels[level - 1].collectibles;
    powerUps = levels[level - 1].powerUps;
    enemies = levels[level - 1].enemies;
}

// Main menu display function
function showMainMenu() {
    document.getElementById('start-screen').style.display = 'block'; // Show the start screen
    canvas.style.display = 'none'; // Hide the canvas
    document.getElementById('game-over-screen').style.display = 'none'; // Hide game over screen
}

// Start game function
function startGame() {
    score = 0;
    level = 1;
    player.lives = 3;
    player.x = 50;
    player.y = 300;
    timer = 60; // Reset timer
    platforms = levels[level - 1].platforms;
    collectibles = levels[level - 1].collectibles;
    powerUps = levels[level - 1].powerUps;
    enemies = levels[level - 1].enemies;
    showMenu = false;

    // Show the canvas and hide the start menu
    canvas.style.display = 'block'; // Show the game canvas
    document.getElementById('start-screen').style.display = 'none'; // Hide the start screen

    backgroundMusic.play();
    update();
}

// Event listeners
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('restart-button').addEventListener('click', startGame);
document.getElementById('resume-button').addEventListener('click', () => {
    isPaused = false;
    update();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        player.dx = 2; // Move right
        keys.right = true;
    } else if (e.key === 'ArrowLeft') {
        player.dx = -2; // Move left
        keys.left = true;
    } else if (e.key === 'ArrowUp' && (player.grounded || player.canDoubleJump)) {
        player.dy = -player.jumpPower; // Jump
        player.grounded = false;
        if (!player.grounded) {
            player.canDoubleJump = false; // Disable double jump after first jump
        }
        jumpSound.play(); // Play jump sound
    } else if (e.key === 'Escape') {
        isPaused = !isPaused; // Toggle pause
        if (isPaused) {
            document.getElementById('pause-menu').style.display = 'block'; // Show pause menu
        } else {
            document.getElementById('pause-menu').style.display = 'none'; // Hide pause menu
            update(); // Resume game loop
        }
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
        player.dx = 0; // Stop moving right
        keys.right = false;
    } else if (e.key === 'ArrowLeft') {
        player.dx = 0; // Stop moving left
        keys.left = false;
    }
});

// Show the main menu initially
showMainMenu();
