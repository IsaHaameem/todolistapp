let tasks = [];
let points = 0;
let streak = 0;
let dailyGoal = 3; // Set your daily goal
let completedToday = 0;
let editingTaskIndex = -1;

// Load streak from localStorage
function loadStreak() {
    const storedStreak = localStorage.getItem('streak');
    if (storedStreak) {
        streak = parseInt(storedStreak);
    }
}

// Update streak in localStorage
function updateStreak() {
    localStorage.setItem('streak', streak);
}

document.getElementById('task-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const dueTimeInput = document.getElementById('due-time');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');

    const task = {
        text: taskInput.value,
        dueDate: dueDateInput.value,
        dueTime: dueTimeInput.value,
        priority: priorityInput.value,
        category: categoryInput.value,
        completed: false,
        timer: 0,
        timerInterval: null
    };

    if (editingTaskIndex >= 0) {
        tasks[editingTaskIndex] = task;
        editingTaskIndex = -1;
    } else {
        tasks.push(task);
    }

    updateTaskList();
    resetForm();
});

function updateTaskList() {
    const taskCategories = {
        general: document.getElementById('general-tasks'),
        fitness: document.getElementById('fitness-tasks'),
        work: document.getElementById('work-tasks'),
        study: document.getElementById('study-tasks'),
        personal: document.getElementById('personal-tasks')
    };

    for (let category in taskCategories) {
        taskCategories[category].innerHTML = `<h3>${category.charAt(0).toUpperCase() + category.slice(1)} Tasks</h3>`;
    }

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <input type="checkbox" onchange="toggleCompletion(${index})" ${task.completed ? 'checked' : ''}>
            <span>${task.text} (Due: ${task.dueDate} ${task.dueTime} | Priority: ${task.priority})</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
            <span class="timer" id="timer-${index}">Timer: ${task.timer}s</span>
            <button onclick="startTimer(${index})">Start Timer</button>
        `;
        taskCategories[task.category].appendChild(li);
    });

    updateStats();
}

function resetForm() {
    document.getElementById('task-input').value = '';
    document.getElementById('due-date').value = '';
    document.getElementById('due-time').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('category').value = 'general';
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('task-input').value = task.text;
    document.getElementById('due-date').value = task.dueDate;
    document.getElementById('due-time').value = task.dueTime;
    document.getElementById('priority').value = task.priority;
    document.getElementById('category').value = task.category;
    editingTaskIndex = index; // Set editing index
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function startTimer(index) {
    const task = tasks[index];
    let timerValue = task.timer;
    const timerDisplay = document.getElementById(`timer-${index}`);

    if (task.timerInterval) clearInterval(task.timerInterval); // Clear any existing timer

    task.timerInterval = setInterval(() => {
        timerValue++;
        task.timer = timerValue; // Update the task timer
        timerDisplay.textContent = `Timer: ${timerValue}s`;

        // Check for notification every 10 seconds
        if (timerValue % 3600 === 0) {
            notifyUser(task.text);
        }
    }, 1000);
}

function notifyUser(taskName) {
    const sound = document.getElementById('notification-sound');
    sound.play();
    alert(`Time to check on your task: ${taskName}!`);
}

function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    if (tasks[index].completed) {
        points += 10; // Reward points for completing a task
        completedToday++; // Increment completed tasks
    } else {
        points -= 5; // Deduct points for unchecking a completed task
        completedToday = Math.max(0, completedToday - 1); // Decrement completed tasks
    }

    console.log(`Task ${index} completion toggled. Completed Today: ${completedToday}`); // Debugging

    updateTaskList();
    updateStats();
}

function updateStats() {
    document.getElementById('points').innerText = `Points: ${points}`;
    document.getElementById('streak').innerText = `Streak: ${streak}`;
    document.getElementById('daily-goal').innerText = `Daily Goal: ${completedToday}/${dailyGoal}`;
    
    if (completedToday >= dailyGoal) {
        document.getElementById('play-game').style.display = 'block';
    } else {
        document.getElementById('play-game').style.display = 'none';
    }

    updateProgressBar(); // Update the progress bar
}

// Progress bar logic
function updateProgressBar() {
    const progress = document.querySelector('progress');
    const progressPercentage = dailyGoal > 0 ? (completedToday / dailyGoal) * 100 : 0; // Prevent division by zero
    progress.value = progressPercentage;

    console.log(`Progress Percentage: ${progressPercentage}`); // Debugging

    // Update progress bar color
    progress.className = 
        progressPercentage < 50 ? 'low-progress' :
        progressPercentage < 100 ? 'mid-progress' : 'high-progress';
}

document.getElementById('play-game').addEventListener('click', function() {
    // Redirect to a game page or show a mini-game/modal
    window.location.href = 'games.html'; // Change to your game URL
});

// Check the date to update the streak
function checkStreak() {
    const today = new Date().toISOString().split('T')[0];
    const lastStreakDate = localStorage.getItem('lastStreakDate');

    if (lastStreakDate !== today) {
        // Reset daily completed tasks
        completedToday = 0; // Reset the count for the new day
        // Update last streak date
        localStorage.setItem('lastStreakDate', today);

        // Increment streak if all tasks were completed yesterday
        if (lastStreakDate) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];

            if (lastStreakDate === yesterdayStr) {
                streak++;
            } else {
                streak = 1; // New streak starts
            }
        }
        updateStreak(); // Update the streak in localStorage
    }
}

// Load streak and check streak on page load
document.addEventListener('DOMContentLoaded', function() {
    loadStreak();
    checkStreak();
    updateStats(); // Initial stats update
    updateProgressBar(); // Initialize progress bar
});

// Notepad functions
document.getElementById('save-notes')?.addEventListener('click', function() {
    const notes = document.getElementById('notepad').value;
    localStorage.setItem('notes', notes);
    alert('Notes saved!');
});

document.getElementById('clear-notes')?.addEventListener('click', function() {
    document.getElementById('notepad').value = '';
});

document.addEventListener('DOMContentLoaded', function() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        document.getElementById('notepad').value = savedNotes;
    }
});
