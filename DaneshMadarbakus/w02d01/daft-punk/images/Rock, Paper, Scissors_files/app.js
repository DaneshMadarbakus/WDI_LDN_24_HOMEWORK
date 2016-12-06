console.log('working');
document.addEventListener('DOMContentLoaded', start);
var RockPaperScissors = RockPaperScissors || {};


// User clicks button (Might not be neccessary)



// winner is notified
// counter goes up accordingly

// answers are compared & winner is notified
RockPaperScissors.compareAnswers = function () {
  console.log(this.computerMoveValue);
  console.log(this.moveChoice);
  var playerCounter = 0;
  var computerCounter = 0;
  document.getElementById('playerScore').innerHTML = playerCounter;
  document.getElementById('computerScore').innerHTML = computerCounter;

  var theWinnerIs = document.getElementById('whowins');
  // var playerCounter = document.getElementById('playerScore');
  // var computerCounter = document.getElementById('computerScore');
  if (this.computerMoveValue === 'rock' && this.moveChoice === 'rock') {
    theWinnerIs.innerHTML = 'You played rock and the computer played rock. DRAW!';
    playerCounter++;
  } else if (this.computerMoveValue === 'rock' && this.moveChoice === 'scissors') {
    theWinnerIs.innerHTML = 'You played scissors and the computer played rock. You LOSE! Rock beats scissors!';

  }
};


// Generate random computer answer
RockPaperScissors.computerMove = function() {
  this.computerMoveValue = Math.ceil(Math.random() * 3);
  if (this.computerMoveValue === 1) {
    this.computerMoveValue = 'rock';
  } else if (this.computerMoveValue === 2) {
    this.computerMoveValue = 'paper';
  } else if (this.computerMoveValue === 3) {
    this.computerMoveValue = 'scissors';
  }
  this.compareAnswers();
};


// Extract value from button played
RockPaperScissors.playerMove = function(e) {
  this.moveChoice = e.target.id;
  this.computerMove();
};



// Add event listeners to buttons
RockPaperScissors.addEventListeners = function() {
  var buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', this.playerMove.bind(this));
  }
};


function start(){
RockPaperScissors.addEventListeners();


}
