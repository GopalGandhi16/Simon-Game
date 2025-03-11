let colors = ["red", "yellow", "green", "blue"];
let userPattern = [];
let gamePattern = [];
let level = 1;
let hasStarted = false;

let h2 = document.querySelector("h2");
let boxes = document.querySelectorAll(".box");

let body = document.querySelector("body");
body.addEventListener("keydown", function () {
    if (!hasStarted) {
        hasStarted = true;
        gameStart();
    }
});

function gameStart() {
    h2.innerText = `Level ${level}`;

    let i = Math.floor(Math.random() * colors.length);
    let color = colors[i];
    let div = document.querySelector(`.${color}`);

    // Flash animation for the game-selected box
    div.classList.add("flash");
    setTimeout(() => {
        div.classList.remove("flash");
    }, 500);

    gamePattern.push(color);
    userPattern = [];
    level++;
}

boxes.forEach((btn) => {
    btn.addEventListener("click", function () {
        let clickedColor = this.getAttribute("id");
        let divBox = document.querySelector(`#${clickedColor}`);

        // Flash animation for user click
        divBox.classList.add("flash");
        setTimeout(() => {
            divBox.classList.remove("flash");
        }, 500);

        userPattern.push(clickedColor);
        checker();
    });
});

function checker() {
    let index = userPattern.length - 1;

    if (userPattern[index] !== gamePattern[index]) {
        endGame();
        return;
    }

    if (userPattern.length === gamePattern.length) {
        setTimeout(gameStart, 1000);
    }
}

function endGame() {
    h2.innerText = `Sorry, The Game Ended! \n Your score was ${level - 1}`;
    userPattern = [];
    gamePattern = [];
    level = 1;
    hasStarted = false;
}
