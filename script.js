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
        numberOfWins++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        message = `You won! ${playerSelection} beats ${computerSelection}`;
        numberOfWins++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        message = `You won! ${playerSelection} beats ${computerSelection}`;
        numberOfWins++;
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        message = `You lost! ${computerSelection} beats ${playerSelection}`;
        numberOfLoses++;
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        message = `You lost! ${computerSelection} beats ${playerSelection}`;
        numberOfLoses++;
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        message = `You lost! ${computerSelection} beats ${playerSelection}`;
        numberOfLoses++;
    }
    else if (computerSelection === playerSelection) {
        message = "It is a tie!";
        numberOfTies++;
    }
    return message;
}

function endOfGame(whoWon) {
    numberOfWins = 0;
    numberOfLoses = 0;
    numberOfTies = 0; 

    alert(`${whoWon} won!`);
}

function updateScore() {
    const wins = document.querySelector('#wins');
    const loses = document.querySelector('#loses');
    const ties = document.querySelector('#ties');

    wins.textContent = `WINS: ${numberOfWins}`;
    loses.textContent = `LOSES: ${numberOfLoses}`;
    ties.textContent = `TIES: ${numberOfTies}`;
    
    if (numberOfLoses >= 5) endOfGame("Computer"); 
    else if (numberOfWins >= 5) endOfGame("You"); 
}



function game(buttonName) {
    computerSelection = getComputerChoice();
    playerSelection = buttonName;
    
    result = document.querySelector('#result');
    result.textContent = (playRound(playerSelection, computerSelection));

    updateScore();
}

let numberOfWins = 0;
let numberOfLoses = 0;
let numberOfTies = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        game(button.id);
    })
});