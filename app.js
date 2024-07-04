let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
const timerElement = document.getElementById('timer');

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let hoursStr = hours < 10 ? '0' + hours : hours;
    let minutesStr = minutes < 10 ? '0' + minutes : minutes;
    let secondsStr = seconds < 10 ? '0' + seconds : seconds;
    
    timerElement.innerText = `${hoursStr}:${minutesStr}:${secondsStr}`;
}

document.getElementById('start').addEventListener('click', function() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000 / 60);
    }
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timer);
    timer = null;
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    timerElement.innerText = '00:00:00';
});
