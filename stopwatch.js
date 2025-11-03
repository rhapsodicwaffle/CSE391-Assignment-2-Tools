let seconds = 0;
let intervalId = null;
let isRunning = false;

function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    document.getElementById('display').textContent = formatTime(seconds);
}

function startTimer() {
    if (isRunning) return;
    
    if (seconds >= 30) return;
    
    isRunning = true;
    
    intervalId = setInterval(function() {
        seconds += 3;
        
        if (seconds >= 30) {
            seconds = 30;
            stopTimer();
        }
        
        updateDisplay();
    }, 3000);
}

function stopTimer() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateDisplay();
}

window.onload = function() {
    updateDisplay();
};
