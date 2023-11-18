var playerOneRollNumber = Math.floor(Math.random() * 6) + 1;
var playerTwoRollNumber = Math.floor(Math.random() * 6) + 1;

console.log("Player One rolled a " + playerOneRollNumber);
console.log("Player One rolled a " + playerTwoRollNumber);

let playerOneImage = "Dice Images/dice" + playerOneRollNumber + ".png";
let playerTwoImage = "Dice Images/dice" + playerTwoRollNumber + ".png";

var currentImagePlayer1 = document.getElementById("playeronedice");
var currentImagePlayer2 = document.getElementById("playertwodice");

// currentImagePlayer1.setAttribute("src", playerOneImage); 
// currentImagePlayer2.setAttribute("src", playerTwoImage); 


currentImagePlayer1.src = "Dice Images/dice" + playerOneRollNumber + ".png";
currentImagePlayer2.src = "Dice Images/dice" + playerTwoRollNumber + ".png";

var winText = document.getElementById("WinText");
if (playerOneRollNumber > playerTwoRollNumber) {
  console.log("Player One Wins!");
  winText.innerHTML = "Player One Wins!";
} else if (playerOneRollNumber < playerTwoRollNumber) {
  console.log("Player Two Wins!");
  winText.innerHTML = "Player Two Wins!";
} else {
  console.log("It's a tie!");
  winText.innerHTML = "It's a tie!";
}