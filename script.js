let curDate = new Date();
let time = curDate.getHours() + ":" + curDate.getMinutes() + ":" + curDate.getSeconds();
console.log(time);
function updateTime(){
    curDate = new Date();
    time = curDate.getHours() + ":" + curDate.getMinutes() + ":" + curDate.getSeconds();
    document.getElementById("time").innerHTML = time;
}

setInterval(updateTime, 1000)