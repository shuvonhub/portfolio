const spots = document.querySelectorAll(".spot");
const grid = document.querySelector(".grid");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const winner = document.querySelector(".winner");
const x = document.querySelector(".x");
const o = document.querySelector(".o");
const playAgain = document.querySelector(".playagain");
const playerOne = document.querySelector(".playerone");
const playerTwo = document.querySelector(".playertwo");
let playerName1 = "";
let playerName2 = "";
const valider = document.querySelector(".p1");

let xScore = 0;
let oScore = 0;
let count = 0;
playerOne.style.background = "white";
playerTwo.style.background = "white";

playerOne.addEventListener("input", (e) => {
  console.log(e.target.value);
  valider.addEventListener("click", () => {
    playerName1 = e.target.value;
    // e.target.value = "";
    console.log("player one : " + playerName1);
  });
});

playerTwo.addEventListener("input", (e) => {
  console.log(e.target.value);
  valider.addEventListener("click", () => {
    playerName2 = e.target.value;
    // e.target.value = "";
    console.log("player two : " + playerName2);
  });
});

playAgain.addEventListener("click", () => {
  spots.forEach((spot) => {
    spot.textContent = "";
    winner.textContent = "";
    winner.style.background = "transparent";
  });
});

grid.addEventListener("click", () => {
  count++;
  console.log(count);
});

spots.forEach((spot) => {
  spot.addEventListener("click", () => {
    if (count % 2 == 0) {
      spot.textContent = "X";
      spot.style.color = "yellow";
    } else {
      spot.textContent = "O";
      spot.style.color = "red";
    }
    if (
      (one.textContent === "X" &&
        two.textContent === "X" &&
        three.textContent === "X") ||
      (four.textContent === "X" &&
        five.textContent === "X" &&
        six.textContent === "X") ||
      (seven.textContent === "X" &&
        eight.textContent === "X" &&
        nine.textContent === "X") ||
      (one.textContent === "X" &&
        four.textContent === "X" &&
        seven.textContent === "X") ||
      (two.textContent === "X" &&
        five.textContent === "X" &&
        eight.textContent === "X") ||
      (three.textContent === "X" &&
        six.textContent === "X" &&
        nine.textContent === "X") ||
      (one.textContent === "X" &&
        five.textContent === "X" &&
        nine.textContent === "X") ||
      (seven.textContent === "X" &&
        five.textContent === "X" &&
        three.textContent === "X")
    ) {
      winner.textContent = playerName1 + " a gagné";
      xScore++;
      x.textContent = xScore;
      winner.style.left = "50%";
      winner.style.background = "rgb(255, 255, 79)";
    } else if (
      (one.textContent === "O" &&
        two.textContent === "O" &&
        three.textContent === "O") ||
      (four.textContent === "O" &&
        five.textContent === "O" &&
        six.textContent === "O") ||
      (seven.textContent === "O" &&
        eight.textContent === "O" &&
        nine.textContent === "O") ||
      (one.textContent === "O" &&
        four.textContent === "O" &&
        seven.textContent === "O") ||
      (two.textContent === "O" &&
        five.textContent === "O" &&
        eight.textContent === "O") ||
      (three.textContent === "O" &&
        six.textContent === "O" &&
        nine.textContent === "O") ||
      (one.textContent === "O" &&
        five.textContent === "O" &&
        nine.textContent === "O") ||
      (seven.textContent === "O" &&
        five.textContent === "O" &&
        three.textContent === "O")
    ) {
      winner.textContent = playerName2 + " a gagné";
      oScore++;
      o.textContent = oScore;
      winner.style.left = "50%";
      winner.style.background = "pink";
    }
  });
});
