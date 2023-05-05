let CountVal = 10;
let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");

function okay() {
    timerEl.textContent = CountVal;
    CountVal = CountVal - 1
    if (CountVal === 0) {
        timerEl.textContent = "BOOM";
        clearInterval(uniqueNo);
    }
}

let uniqueNo = setInterval(okay, 1000);

function defusing(event) {
    if (CountVal > 0 && event.key === "Enter" && defuserEl.value === "defuse") {
        timerEl.textContent = "You did it!";
        clearInterval(uniqueNo);
    }
}

defuserEl.addEventListener("keydown", defusing);