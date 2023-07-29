let statusForm = true;
const clockForm = document.querySelector(".clockForm");

clockForm.addEventListener("click", () => {
    if(statusForm) {
        clockForm.classList.add("active");
        statusForm = false;
    }else {
        clockForm.classList.remove("active");
        statusForm = true;
    }
})

setInterval(() => {
    const date = new Date();

    const getHour = date.getHours();
    const getMinute = date.getMinutes();
    const getSecond = date.getSeconds();
    const getDate = date.getDate();
    const getDay = date.getDay();
    const getMonth = date.getMonth();
    const getYear = date.getFullYear();

    const dayinWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]

    document.querySelector(".hrTime").innerHTML = getHour;
    document.querySelector(".mnTime").innerHTML = getMinute;
    document.querySelector(".scTime").innerHTML = getSecond;
    document.querySelector(".date").innerHTML = dayinWeek[getDay] + ", " + getDate + " THG " + getMonth + ", " + getYear;

    const hrHand = document.querySelector(".hourHand");
    const mnHand = document.querySelector(".minHand");
    const scHand = document.querySelector(".secHand");

    scHand.setAttribute("style", "transform: translate(-50%, -50%) rotate(calc(" + getSecond +" * 6deg));")
    mnHand.setAttribute("style", "transform: translate(-50%, -50%) rotate(calc(" + getMinute +" * 6deg));")
    hrHand.setAttribute("style", "transform: translate(-50%, -50%) rotate(calc(" + getHour +" * 30deg));")
}, 1000)