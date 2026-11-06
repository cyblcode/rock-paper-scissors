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
    move = prompt("enter your move")
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
    }

    else if (humanChoice == "paper" & computerChoice == "rock") {
        console.log("player wins, paper beats rock")
    }

    else if (humanChoice == "scissors" & computerChoice == "paper") {
        console.log("player wins, scissors beats paper")
    }

    else {
        console.log(`computer wins, ${computerChoice} beats ${humanChoice}`)
    }
        
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

console.log(playRound(humanSelection, computerSelection))   