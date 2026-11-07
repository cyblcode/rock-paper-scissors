function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1
    if (computerChoice == 1) {
        return "rock";
    }
    else if (computerChoice == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    move = prompt("enter your move (rock/paper/scissors)")
    move = move.toLowerCase()
    if (move == "rock") {
        return "rock"
    }
    else if (move == "paper") {
        return "paper"
    }
    else {
        return "scissors"
    }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("tie")
    }
    else if (humanChoice == "rock" & computerChoice == "scissors") {
        console.log("player wins, rock beats paper")
        humanScore++;
        console.log(`human: ${humanScore} /// computer: ${computerScore}`)
    }

    else if (humanChoice == "paper" & computerChoice == "rock") {
        console.log("player wins, paper beats rock")
        humanScore++;
        console.log(`human: ${humanScore} /// computer: ${computerScore}`)
    }

    else if (humanChoice == "scissors" & computerChoice == "paper") {
        console.log("player wins, scissors beats paper")
        humanScore++;
        console.log(`human: ${humanScore} /// computer: ${computerScore}`)
    }

    else {
        console.log(`computer wins, ${computerChoice} beats ${humanChoice}`)
        computerScore++;
        console.log(`human: ${humanScore} /// computer: ${computerScore}`)
    }
        
}



function playGame() {
    do {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        
        console.log(playRound(humanSelection, computerSelection))
    }
    while (humanScore < 5 & computerScore < 5);

    if (humanScore = 5) {
        console.log(`human wins! ${humanScore}-${computerScore}`)
        return;
    }
    else if (computerScore = 5) {
        console.log(`computer wins! ${humanScore}-${computerScore}`)
        return;
    }
}

console.log(playGame())