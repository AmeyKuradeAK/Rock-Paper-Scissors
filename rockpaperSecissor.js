let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber == 0) {
        return "Stone"
    } else if (randomNumber == 1) {
        return "Paper"
    } else {
        return "Secissor"
    }
}

let getHumanChoice = () => {
    let userInput = prompt("Enter your choice, like Stone, Paper, Secissor")
    return userInput.toLowerCase()
}

let humanScore = 0
let computerScore = 0

let playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice == computerChoice) {
        console.log("It's a Tie")
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`You win ${humanChoice}, and computer choice ${computerChoice}`)
            humanScore++;
        } else {
            console.log(`You loose ${humanChoice}, Computer won ${computerChoice}`)
        }
}

let playGame = () => {
    humanScore = 0
    computerScore = 0

    for(let i=0; i<=5; i++){
        console.log(`Round: ${i}`)
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
    console.log("\nFinal Result:")
    if(humanScore > computerScore) {
        console.log("You are the Winner")
    } else if(computerScore > humanScore) {
        console.log("Computer is Winner")
    } else {
        console.log("Game is tied")
    }
    
}

playGame()


