//your code here
let totalRounds = 0;
let roundsLeft = 0;
let userPoints = 0;
let computerPoints = 0;
let gameStarted = false;

const choices = ["ROCK", "PAPER", "SCISSORS"];

window.computerChoose = 0;

const roundsLeftEl = document.getElementById("roundsLeft");
const userPointsEl = document.getElementById("userPoints");
const computerPointsEl = document.getElementById("computerPoints");
const computerChooseEl = document.getElementById("computerChoose");
const roundResultEl = document.getElementById("roundResult");
const gameResultEl = document.getElementById("gameResult");

document.getElementById("playGame").addEventListener("click", () => {
  totalRounds = parseInt(document.getElementById("gameNumber").value);
  roundsLeft = totalRounds;
  userPoints = 0;
  computerPoints = 0;
  gameStarted = true;

  roundsLeftEl.textContent = roundsLeft;
  userPointsEl.textContent = userPoints;
  computerPointsEl.textContent = computerPoints;
  roundResultEl.textContent = "";
  computerChooseEl.textContent = "";
  gameResultEl.textContent = "";
});

function playRound(userChoice) {
  if (!gameStarted || roundsLeft === 0) return;

  window.computerChoose = Math.floor(Math.random() * 3);
  const computerChoice = choices[window.computerChoose];

  computerChooseEl.textContent = computerChoice;

  let result = "";

  if (userChoice === computerChoice) {
    result = "TIE";
  } else if (
    (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "PAPER" && computerChoice === "ROCK") ||
    (userChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    result = "WON";
    userPoints++;
  } else {
    result = "LOSE";
    computerPoints++;
  }

  roundResultEl.textContent = result;
  roundsLeft--;

  roundsLeftEl.textContent = roundsLeft;
  userPointsEl.textContent = userPoints;
  computerPointsEl.textContent = computerPoints;

  if (roundsLeft === 0) {
    if (userPoints > computerPoints) {
      gameResultEl.textContent = "WON";
    } else if (userPoints < computerPoints) {
      gameResultEl.textContent = "LOSE";
    } else {
      gameResultEl.textContent = "TIE";
    }
  }
}

document.getElementById("rock").addEventListener("click", () => playRound("ROCK"));
document.getElementById("paper").addEventListener("click", () => playRound("PAPER"));
document.getElementById("scissors").addEventListener("click", () => playRound("SCISSORS"));
