var timer = 60;
var newHit = 0;
var score = 0;


function increaseScore() {
    score = score + 10;
    document.querySelector("#scorebox").textContent = score;
}

function bubble() {
    var clutter = "";
    for (var i = 0; i < 152; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter = clutter + `<div class="bubble">${rn}</div>`
    }
    document.querySelector(".bottomPanel").innerHTML = clutter;
}

function runTimer() {
    var timeInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timeIntervel").textContent = timer;
        }
        else {
            clearInterval(timeInt);
            document.querySelector(".bottomPanel").innerHTML = `<h1>You Scored ${score}</h1>`;
        }
    }, 1000);
}

function getNewHit() {
    newHit = Math.floor(Math.random() * 10)
    document.querySelector("#getHit").textContent = newHit;
}


document.querySelector(".bottomPanel").addEventListener("click", function (a) {
    var clickedNumber = Number(a.target.textContent);
    if (clickedNumber === newHit) {
        increaseScore();
        getNewHit();
        bubble();
    }


})

getNewHit();
runTimer();
bubble();