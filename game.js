
var buttonColours = ["red", "blue", "green", "yellow"];

// create arrays to store the game pattern and user's pattern
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

//if started display the level and initiate next sequence.
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;


//detect keypress and display level
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


//detect clicks, play sounds accordingly then check checkAnswer

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
//record the button click, get the ID and store it in an array above.
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

//If game pattern matches user's pattern, bring next sequence.
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound(wrong);
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

/* create a random sequence, animate the buttons and play matching sounds, then store it
 in an array above. */
function nextSequence() {
  userClickedPattern = [];

  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

//Button click animations
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

//play relevant sounds
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

<<<<<<< HEAD
//set the level to zero, reset game pattern array and set started false.
=======
//Set level and gamepattern to 0, set started false to start the game over.
>>>>>>> cf0df59 (Add aditional comments)
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
