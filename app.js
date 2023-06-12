
function hour() {
    let date = new Date();
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let boxHour = document.querySelector(`#timerH`);
    boxHour.innerHTML = hours;
    document.body.append(boxHour);
}
setInterval(hour, 3600000)

function minute() {
    let date = new Date();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let boxMinute = document.querySelector(`#timerM`);
    boxMinute.innerHTML = minutes;
    document.body.append(boxMinute);
}
setInterval(minute, 60000)

function second() {
    let date = new Date();
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let boxSecond = document.querySelector(`#timerS`);
    boxSecond.innerHTML = seconds;
    document.body(boxSecond);
}
setInterval(second, 1000);






hour(); minute(); second();


