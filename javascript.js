let humanScore = 0;
let computerScore = 0;
let gameOver = false;

document.addEventListener("click", onClick);

function onClick(event) {
  const buttonClicked = event.target.tagName == "BUTTON";
  const playAgainClicked = event.target.textContent == "Play Again";

  if (playAgainClicked) {
    location.reload();
  } else if (buttonClicked && !gameOver) {
    const humanChoice = event.target.className;
    playRound(humanChoice);
    checkGameOver();
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const winner = getWinner(humanChoice, computerChoice);
  updateScore(winner);
  
  const resultsText = getResultsText(
    winner, capitalize(humanChoice), capitalize(computerChoice));
  displayResults(resultsText);
}

function checkGameOver() {
  gameOver = humanScore == 5 || computerScore == 5;
  if (gameOver) {
    displayGameOver();
  }
}

function getWinner(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    return "computer";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    return "human";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    return "human";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    return "computer";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    return "computer";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    return "human";
  } else {
    return null;
  }
}

function updateScore(winner) {
  if (winner == "human") {
    const scoreDiv = document.querySelector(".human-score");
    scoreDiv.textContent = `You - ${++humanScore}`;
  } else if (winner == "computer") {
    const scoreDiv = document.querySelector(".computer-score");
    scoreDiv.textContent = `Computer - ${++computerScore}`;
  }
}

function getResultsText(winner, humanChoice, computerChoice) {
  switch (winner) {
    case "human":
      return `You win! ${humanChoice} beats ${computerChoice}.`;
    case "computer":
      return `You lose! ${computerChoice} beats ${humanChoice}.`;
    default:
      return `Tie! You both chose ${humanChoice}.`;
  }
}

function displayResults(resultsText) {
  const textDiv = document.createElement("div");
  textDiv.textContent = resultsText;

  const resultsDiv = document.querySelector(".results");
  resultsDiv.appendChild(textDiv);
}

function displayGameOver() {
  const gameOverDiv = document.createElement("div");
  gameOverDiv.className = "game-over";
  gameOverDiv.textContent =
    humanScore == 5 ? "Game Over! You win!" : "Game Over! You lose!"

  const replayButton = document.createElement("button");
  replayButton.textContent = "Play Again";

  const resultsDiv = document.querySelector(".results");
  resultsDiv.appendChild(gameOverDiv);
  resultsDiv.appendChild(replayButton);
}

function getComputerChoice() {
  const num = Math.random();
  if (0 <= num && num < 1 / 3) {
    return "rock";
  } else if (1 / 3 <= num && num < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function capitalize(text) {
  return text.at(0).toUpperCase() + text.substring(1);
}