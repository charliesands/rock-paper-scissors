

function play(userChoice, compChoice) {
let compChoice = "Rock";
if (userChoice === compChoice){
    return "Tie"
} else if (userChoice == "Rock" && compChoice == "Scissors") {
        return "User Wins"
    } else if (userChoice == "Paper" && compChoice == "Rock") {
        return "User Wins"
    } else if (userChoice == "Scissors" && compChoice == "Paper") {
        return "User wins"
    } else if (userChoice == "Rock" && compChoice == "Paper") {
        return "Computer Wins"
    } else if (userChoice == "Paper" && compChoice == "Scissors") {
        return "Computer Wins"
    } else if (userChoice == "Scissors" && compChoice == "Rock") {
        return "Computer Wins"
    }
    }

