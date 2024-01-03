let curDate = new Date();
let time = curDate.getHours() + ":" + curDate.getMinutes() + ":" + curDate.getSeconds();
console.log(time);

function updateTime(){
    curDate = new Date();
    let [hours, minutes, seconds] = [curDate.getHours(), curDate.getMinutes(), curDate.getSeconds()];
    if(hours < 10)
        hours = '0' + hours;
    if(minutes < 10)
        minutes = '0' + minutes;
    if(seconds < 10)
        seconds = '0' + seconds;
    time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = time;
}

setInterval(updateTime, 1000);