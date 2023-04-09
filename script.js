function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3);
    let computerChoice;

    if (randomNumber === 1) computerChoice = "rock";
    else if (randomNumber === 2) computerChoice = "paper";
    else if (randomNumber === 3) computerChoice = "scissors";
    else console.log("There was an error generating the computer choice");
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let message = ""; 
    console.log(`${playerSelection}, ${computerSelection}`); 
    if (playerSelection === "scissors" && computerSelection === "paper") {
        message = `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        message = `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        message = `You lost! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        message = `You lost! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        message = `You lost! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        message = `You lost! ${computerSelection} beats ${playerSelection}`;
    }
    else message = "It is a tie!";
    return message;
}

function game() {
    let numberOfGamesPlayed = 0;
    let timesUserWon = 0;
    let playerSelection = prompt("Please enter you choice").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

game();

