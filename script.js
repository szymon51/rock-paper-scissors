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
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        message = `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        message = `You won! ${playerSelection} beats ${computerSelection}`;
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
    }
    return message;
}

function game(buttonName) {
    computerSelection = getComputerChoice();
    playerSelection = buttonName;
    console.log(playRound(playerSelection, computerSelection));
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        game(button.id);
    })
});