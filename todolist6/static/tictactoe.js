const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('reset');

// Audio elements
const soundPlaceX = new Audio('../static/sounds/place-x.mp3');
const soundPlaceO = new Audio('../static/sounds/place-y.mp3');
const soundWin = new Audio('../static/sounds/win.mp3');
const soundDraw = new Audio('../static/sounds/draw.mp3');

let currentPlayer = 'X'; // Player is 'X'
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive || currentPlayer === 'O') {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // Play sound based on the current player
    if (currentPlayer === 'X') {
        soundPlaceX.play();
    } else {
        soundPlaceO.play();
    }

    checkResult();

    if (gameActive) {
        currentPlayer = 'O'; // Switch to AI
        aiMove();
    }
}

function aiMove() {
    const bestMove = minimax(gameState, currentPlayer);
    gameState[bestMove.index] = currentPlayer;
    cells[bestMove.index].textContent = currentPlayer;

    // Play sound for AI move
    soundPlaceO.play();

    checkResult();
    if (gameActive) {
        currentPlayer = 'X'; // Switch back to player
    }
}

function minimax(state, player) {
    const availableCells = state.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);

    // Check for terminal states (win/loss/draw)
    if (checkWinner(state, 'X')) return { score: -10 };
    if (checkWinner(state, 'O')) return { score: 10 };
    if (availableCells.length === 0) return { score: 0 }; // Draw

    const moves = [];

    for (let i = 0; i < availableCells.length; i++) {
        const index = availableCells[i];
        state[index] = player; // Make the move
        const result = minimax(state, player === 'X' ? 'O' : 'X'); // Switch player
        moves.push({ index, score: result.score });
        state[index] = ''; // Undo the move
    }

    // Find the best move based on the current player
    let bestMove;
    if (player === 'O') { // AI's turn
        let maxScore = -Infinity;
        for (const move of moves) {
            if (move.score > maxScore) {
                maxScore = move.score;
                bestMove = move;
            }
        }
    } else { // Player's turn
        let minScore = Infinity;
        for (const move of moves) {
            if (move.score < minScore) {
                minScore = move.score;
                bestMove = move;
            }
        }
    }

    return bestMove;
}

function checkWinner(state, player) {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return state[index] === player;
        });
    });
}

function checkResult() {
    if (checkWinner(gameState, 'X')) {
        statusDisplay.textContent = 'Player X wins!';
        soundWin.play(); // Play win sound
        gameActive = false;
        return;
    }
    if (checkWinner(gameState, 'O')) {
        statusDisplay.textContent = 'Player O wins!';
        soundWin.play(); // Play win sound
        gameActive = false;
        return;
    }
    if (!gameState.includes('')) {
        statusDisplay.textContent = 'Game ended in a draw!';
        soundDraw.play(); // Play draw sound
        gameActive = false;
        return;
    }

    statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
}

function resetGame() {
    gameActive = true;
    currentPlayer = 'X'; // Reset to player 'X'
    gameState = ['', '', '', '', '', '', '', '', ''];
    statusDisplay.textContent = `It's ${currentPlayer}'s turn`;

    cells.forEach(cell => {
        cell.textContent = '';
    });
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

statusDisplay.textContent = `It's ${currentPlayer}'s turn`;
