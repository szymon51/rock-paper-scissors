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
    if (playerSelection === "scissors" && computerSelection === "paper") {
        message = `You won! ${playerSelection} beats ${computerSelection}`;
        timesUserWon++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        message = `You won! ${playerSelection} beats ${computerSelection}`;
        timesUserWon++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        message = `You won! ${computerSelection} beats ${playerSelection}`;
        timesUserWon++;
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
    else if (computerSelection === playerSelection) {
    message = "It is a tie!";
    } else message = "something went wrong!";
    numberOfGamesPlayed++;
    return message;
}

function game() {
    let playerSelection = prompt("Please enter you choice").toLowerCase();
    const computerSelection = "rock";
    console.log(playRound(playerSelection, computerSelection));
    if (timesUserWon >= 3 && numberOfGamesPlayed === 5) alert("You won the whole game");
}

let numberOfGamesPlayed = 0;
let timesUserWon = 0;

for (let i = 0; i < 5; i++) {
    game();
}

