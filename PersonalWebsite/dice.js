var randomNumber1 = Math.random();
randomNumber1 =Math.floor((randomNumber1 * 6) + 1);
var result1 = "diceimages/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.random();
randomNumber2 =Math.floor((randomNumber2 * 6) + 1);
var result2 = "diceimages/dice" + randomNumber2 + ".png";

var dice1 = document.getElementById("img1");
dice1.src = result1;
var dice2 = document.getElementById("img2");
dice2.src = result2;

if ( randomNumber1 === randomNumber2 ) {
  var winner = document.getElementById("winner");
  winner.innerHTML = "Draw!";
} else if ( randomNumber1 > randomNumber2 ) {
  var winner = document.getElementById("winner");
  winner.innerHTML = "🚩Player 1 wins!";
} else if ( randomNumber2 > randomNumber1 ) {
  var winner = document.getElementById("winner");
  winner.innerHTML = "Player 2 wins!🚩";
}
