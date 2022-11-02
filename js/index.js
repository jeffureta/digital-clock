const clock = document.getElementById("clock");
const hoursDiv = document.getElementById("hours");
const minutesDiv = document.getElementById("minutes");
const secondsDiv = document.getElementById("seconds");
const hourPeriod = document.getElementById("hourPeriod");
function showTime() {
    let date = new Date();
    let hours = date.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12; //ternary
    console.log(hours);
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();
    if (hours < 12) {
        //clock.textContent =  `${("0"+hours).substr(-2)}:${("0"+minutes).substr(-2)}:${("0"+seconds).substr(-2)} PM`
        hoursDiv.textContent = `${("0" + hours).substr(-2)}`;
        minutesDiv.textContent = `${("0" + minutes).substr(-2)}`;
        secondsDiv.textContent = `${("0" + seconds).substr(-2)}`;
        hourPeriod.textContent = "PM";

    } else {
        //clock.textContent = `${("0"+hours).substr(-2)}:${("0"+minutes).substr(-2)}:${("0"+seconds).substr(-2)} AM`
    }
}
setInterval(showTime, 1000);
