let humanScore = 0;
let computerScore = 0;

document.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.tagName == "BUTTON") {
    playRound(event.target.className, getComputerChoice());

    if (humanScore == 5) {
      const gameOverDiv = document.createElement("div");
      gameOverDiv.textContent = "Game Over! You win!";

      const resultsDiv = document.querySelector(".results");
      resultsDiv.appendChild(gameOverDiv);

      document.removeEventListener("click", onClick);
    } else if (computerScore == 5) {
      const gameOverDiv = document.createElement("div");
      gameOverDiv.textContent = "Game Over! You lose!";

      const resultsDiv = document.querySelector(".results");
      resultsDiv.appendChild(gameOverDiv);

      document.removeEventListener("click", onClick);
    }
  }
}

function playRound(humanChoice, computerChoice) {
  let winner = getWinner(humanChoice, computerChoice);
  updateScore(winner);
  
  let resultsText = getResultsText(
    winner, capitalize(humanChoice), capitalize(computerChoice));
  displayResults(resultsText);
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
    ++humanScore;
    const scoreDiv = document.querySelector(".human-score");
    scoreDiv.textContent = `You - ${humanScore}`;
  } else if (winner == "computer") {
    ++computerScore;
    const scoreDiv = document.querySelector(".computer-score");
    scoreDiv.textContent = `Computer - ${computerScore}`;
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
  const resultsDiv = document.querySelector(".results");
  const textDiv = document.createElement("div");
  textDiv.textContent = resultsText;
  resultsDiv.appendChild(textDiv);
}

function getComputerChoice() {
  let num = Math.random();
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