

function play(userChoice) {
    let choices = ["Rock", "Paper", "Scissors"]
    let randomN = Math.floor(Math.random() * choices.length)
    let compChoice = choices[randomN];
    // let t = "tie"
    document.getElementById('user').innerHTML = userChoice;
    document.getElementById('comp').innerHTML = compChoice;
    if (userChoice === compChoice) {
        return document.getElementById('results').innerHTML = "tie";
    } if (userChoice == "Rock" && compChoice == "Scissors") {
        return document.getElementById('results').innerHTML = "User Wins";
    } if (userChoice == "Paper" && compChoice == "Rock") {
        return document.getElementById('results').innerHTML = "User Wins";
    } if (userChoice == "Scissors" && compChoice == "Paper") {
        return document.getElementById('results').innerHTML = "User Wins";
    } if (userChoice == "Rock" && compChoice == "Paper") {
        return document.getElementById('results').innerHTML = "Computer Wins";
    } if (userChoice == "Paper" && compChoice == "Scissors") {
        return document.getElementById('results').innerHTML = "Computer Wins";
    } if (userChoice == "Scissors" && compChoice == "Rock") {
        return document.getElementById('results').innerHTML = "Computer Wins";
    }
}

