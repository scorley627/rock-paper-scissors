function capitalize(text) {
  return text.at(0).toUpperCase() + text.substring(1);
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

function getHumanChoice() {
  return prompt("Enter choice (rock, paper, or scissors):").toLowerCase();
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    let winner = null;
    if (humanChoice == "rock" && computerChoice == "paper") {
      winner = "computer";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
      winner = "human";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
      winner = "human";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
      winner = "computer";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
      winner = "computer";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
      winner = "human";
    }
    
    humanChoice = capitalize(humanChoice);
    computerChoice = capitalize(computerChoice);
  
    if (winner == "human") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      ++humanScore;
    } else if (winner == "computer") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      ++computerScore;
    } else {
      console.log(`Tie! You both chose ${humanChoice}.`);
    }
  }

  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; ++i) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(`You win! Won ${humanScore} rounds. Lost ${computerScore} ` +
      `rounds.`);
  } else if (computerScore > humanScore) {
    console.log(`You lose! Lost ${computerScore} rounds. Won ${humanScore} ` +
      `rounds.`);
  } else {
    console.log(`Tie! You both won ${humanScore} rounds!`);
  }
}

playGame();