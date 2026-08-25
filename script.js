function getComputerChoice(computerChoice) {
    choices = ["rock", "paper", "scissors"]
    computerChoice = Math.floor(Math.random() * choices.length)
    return(computerChoice, choices[computerChoice])
}

function getHumanChoice(humanChoice) {
    humanChoice = prompt("enter your choice (rock/paper/scissors)")
    return humanChoice.toLowerCase()
}

let humanScore = 0
let computerScore = 0

