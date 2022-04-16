var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = []
var level = 0;
var header = "#level-title";
var currentNumber = 0
gameOn = false

$("h1").on("click", function(event) {
  if (gameOn === false) {
  emptyUserList();
  nextSequence();
  $(header).text("Level " + level);
  gameOn = true;
} else {
  null;
}
});

$(document).on("keydown", function(event) {
  switch (event.key) {
    case "a":
      if (gameOn === false) {
        emptyUserList()
        nextSequence();
        $(header).text("Level " + level);
        gameOn = true;
      } else {
        null;
      }
      break;
    default:
      if (gameOn === false) {
        emptyUserList()
        nextSequence();
        $(header).text("Level " + level);
        gameOn = true;
      } else {
        null;
      }
  }
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  var randomChosenColourString = "#" + randomChosenColour
  $(randomChosenColourString).fadeOut(250).fadeIn(250);
  playSound(randomChosenColour);
  $(header).text("Level " + level);
  level++;
};

function playSound(name) {
  var soundPath = "sounds/" + name + ".mp3";
  var sound = new Audio(soundPath)
  sound.play();
};

function animatePress(currentColour) {
  var currentColourString = "#" + currentColour
  $(currentColourString).toggleClass("pressed")
  setTimeout(function() {
    $(currentColourString).toggleClass("pressed")
  }, 100);
}

function animationGameOver() {
  $('body').toggleClass("game-over")
  setTimeout(function() {
    $('body').toggleClass("game-over")
  }, 200);
};

function checkAnswer(currentlevel) {
  if (gamePattern.length === userClickedPattern.length) {
    if (currentlevel === gamePattern[currentNumber]) {
      currentNumber = 0;
      setTimeout(nextSequence(), 1000);
      emptyUserList();
    } else {
      playSound("wrong");
      animationGameOver();
      $(header).text("Game Over, Press Any Key to Restart");
      startOver()
    }
  } else {
    if (currentlevel === gamePattern[currentNumber]) {
      currentNumber++;
    } else {
      playSound("wrong");
      animationGameOver();
      $(header).text("Game Over, Press Any Key to Restart");
      startOver()
    }
  }
};

function emptyUserList() {
  userClickedPattern = [];
};

function startOver() {
  level = 0;
  gamePattern = [];
  currentNumber = 0;
  gameOn = false;
}

$(".btn").on("click", function(event) {
  var userChosenColour = event.target.id;
  playSound(userChosenColour);
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);
  checkAnswer(userChosenColour);
});
