function convertToString(number) {
    let time = number.toString();
    return `${("0" + time).substr(-2)}`
}
function getHours() {
    return new Date().getHours();
}
function getMinutes() {
    return new Date().getMinutes();
}
function getSeconds() {
    return new Date().getSeconds();
}
function getHourPeriod() {
    getHours();
    if (getHours() > 12) {
        return "PM"
    } else {
        return "AM"
    }
}
function getTwelveHourFormat() {
    if (getHours() > 12) {
        return getHours() - 12
    } else {
        return getHours();
    }
};
function showTime() {
    document.getElementById("hours").textContent = `${convertToString(getTwelveHourFormat())}`;
    document.getElementById("minutes").textContent = `${convertToString(getMinutes())}`;
    document.getElementById("seconds").textContent = `${convertToString(getSeconds())}`;
    document.getElementById("hourPeriod").textContent = getHourPeriod();
};
setInterval(showTime, 1000);
