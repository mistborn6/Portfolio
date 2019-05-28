let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return ;
        }
        // display it
        displayTimeLeft(secondsLeft);
        // console.log(secondsLeft);
        // console.log({now, then});
    }, 1000);
}

function displayTimeLeft(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const display = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    timerDisplay.textContent = display;
    document.title = display;
    // console.log({mins, secs});
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const mins = end.getMinutes();
    endTime.textContent = `Be Back At ${hours > 12 ? hours - 12 : hours}:${mins < 10 ? '0' : ''}${mins}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}


buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
//    console.log(mins); 
    timer(mins * 60);
    this.reset();
});

