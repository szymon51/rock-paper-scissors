function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3);
    let computerChoice;

    if (randomNumber === 1) computerChoice = "rock";
    else if (randomNumber === 2) computerChoice = "paper";
    else if (randomNumber === 3) computerChoice = "scissors";
    else console.log("There was an error generating the computer choice");
    return computerChoice;
}