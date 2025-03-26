
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
    document.getElementById('date').innerText = now.toDateString();
}
setInterval(updateClock, 1000);


let alarmTime = null;
function setAlarm() {
    alarmTime = document.getElementById('alarmTime').value;
    alert('Alarm set for ' + alarmTime);
}
function checkAlarm() {
    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    if (alarmTime === currentTime) {
        alert('Alarm ringing!');
    }
}
setInterval(checkAlarm, 60000);


let stopwatchInterval, stopwatchTime = 0;
function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        document.getElementById('stopwatchDisplay').innerText = new Date(stopwatchTime * 1000).toISOString().substr(11, 8);
    }, 1000);
}
function pauseStopwatch() {
    clearInterval(stopwatchInterval);
}
function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById('stopwatchDisplay').innerText = '00:00:00';
}


let countdownInterval;
function startCountdown() {
    let minutes = document.getElementById('countdownMinutes').value;
    let timeRemaining = minutes * 60;
    countdownInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById('countdownDisplay').innerText = new Date(timeRemaining * 1000).toISOString().substr(14, 5);
        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            alert('Countdown finished!');
        }
    }, 1000);
}

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
