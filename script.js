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
    let userChoice = prompt("Hello!", "scissors");
    userChoice = userChoice.toLowerCase();
    if(userChoice === computerSelection) console.log("you won!");
    else console.log("you lost"); 
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));