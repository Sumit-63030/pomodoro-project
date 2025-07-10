const startbtn = document.getElementById("startbtn");
const stopbtn = document.getElementById("stopbtn");
let timeleft = 50 * 60;
const timeCounter = document.getElementById("counter");
let timerId = null;
let currentMode = 50;
let resetbtn = document.getElementById('reset-btn');
let pomodoroBtn = document.getElementById('Pomodoro-btn');
let shortBreakBtn = document.getElementById('short-break-btn');
let LongBreakBtn = document.getElementById('long-break-btn');
const endSound = new Audio("./relax.mp3");



document.getElementById("start-btn").addEventListener("click", () => {

    if (timerId !== null) {
        return;
    }

    timerId = setInterval(function () {
        timeleft--;

        if (timeleft < 0) {
            clearInterval(timerId);
            timerId = null;
            timeleft = 0;


            if (currentMode === 10 || currentMode === 20 || currentMode === 50) {
                endSound.play();
            }


        }
        let minutes = Math.floor(timeleft / 60);
        let seconds = timeleft % 60;

        if (seconds < 10) {
            seconds = String(seconds).padStart(2, "0");
        }
        let displayTime = minutes + ":" + seconds;

        timeCounter.innerHTML = displayTime;


    }, 1000)
});


document.getElementById('stop-btn').addEventListener('click', () => {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
    endSound.pause();
    endSound.currentTime = 0;
})


function updateDisplay() {
    let minutes = Math.floor(timeleft / 60);
    let seconds = String(timeleft % 60).padStart(2, "0");
    timeCounter.innerHTML = `${minutes}:${seconds}`;
}

document.getElementById('reset-btn').addEventListener('click', () => {
    if (timerId != null) {
        clearInterval(timerId);
        timerId = null;
    }
    endSound.pause();
    endSound.currentTime = 0;
    timeleft = currentMode * 60;
    updateDisplay();
})


document.getElementById('Pomodoro-btn').addEventListener('click', () => {
    if (timerId != null) {
        clearInterval(timerId);
        timerId = null;
    }
    endSound.pause();
    endSound.currentTime = 0;
    currentMode = 50;
    timeleft = 50*60;
    updateDisplay();
})

const modeButtons = document.querySelectorAll('.pomodoro-buttons .button');

modeButtons.forEach(button => {
    button.addEventListener('click', () => {
        modeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


document.getElementById('short-break-btn').addEventListener('click', () => {
    if (timerId != null) {
        clearInterval(timerId);
        timerId = null;

    }
    endSound.pause();
    endSound.currentTime = 0;
    currentMode = 10;
    timeleft = 10*60;

    updateDisplay();


})

document.getElementById('long-break-btn').addEventListener('click', () => {
    if (timerId != null) {
        clearInterval(timerId);
        timerId = null;
    }
    endSound.pause();
    endSound.currentTime = 0;
    currentMode = 20;
    timeleft = 20*60;
    updateDisplay();

})


