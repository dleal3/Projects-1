var userChoice = prompt("Please type 'Rock', 'Paper', or 'Scissors'.");

function computerPlayer() {
  Do {
  compChoice = Math.floor(Math.random() * Math.floor(3))
} while (compChoice != 0 || compChoice != 1 || compChoice != 2);
  if (compChoice == 0) {
    return "Rock"
  }
  else if (compChoice == 1) {
    return "Paper"
  }
  else if (compChoice == 2) {
    return "Scissors"
  }
  else {
    return "does not compute..."
  }
}

function findTheWinner(userChoice) {
  if (userChoice == "Rock" && computerPlayer() == "Rock") {
    return "It's a draw!"
  }
  else if (userChoice == "Rock" && computerPlayer() == "Paper") {
    return "You lose"
  }
  else if (userChoice == "Rock" && computerPlayer() == "Scissors") {
    return "Winner, winner, chicken dinner!"
  }
  else if (userChoice == "Paper" && computerPlayer() == "Rock") {
    return "Winner, winner, chicken dinner!"
  }

}


alert(findTheWinner(userChoice));

document.getElementById("output").innerHTML = findTheWinner(userChoice);
