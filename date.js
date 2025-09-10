function Todayis() {
    const today = new Date();

    document.getElementById("result").textContent = `Today is ${today}`;
    document.getElementById("result").style.fontFamily = "cursive";
    document.getElementById("result").style.color = "blue";

    document.getElementById("result2").textContent = `Year: ${today.getFullYear()}  Months: ${today.getMonth()+1}  Day: ${today.getDate()}  Hours: ${today.getHours()}  Minutes: ${today.getMinutes()}  Seconds: ${today.getSeconds()}  Milliseconds: ${today.getMilliseconds()}`;
    document.getElementById("result2").style.fontFamily = "cursive";
    document.getElementById("result2").style.color = "green";
}