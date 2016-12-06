console.log('working');
document.addEventListener('DOMContentLoaded', start);
var RockPaperScissors = RockPaperScissors || {};
RockPaperScissors.playerCounter = 0;
RockPaperScissors.computerCounter = 0;

// winner is notified
RockPaperScissors.updateWinner = function() {
  var theWinnerIs = document.getElementById('whowins');
  var theWinnerIshtml = 'You played ' + this.moveChoice + ' and the computer played ' + this.computerMoveValue + '. ' + this.winner;
  theWinnerIs.innerHTML = theWinnerIshtml;
  this.winner = '';
};

// counter is updated
RockPaperScissors.updateCounter = function(){
  if (this.winner === 'Player wins!') {
    document.getElementById('playerScore').innerHTML = this.playerCounter++;
  } else if (this.winner === 'Computer wins!'){
    document.getElementById('computerScore').innerHTML = this.computerCounter++;
  }
  RockPaperScissors.updateWinner();
};

// answers are compared
RockPaperScissors.compareAnswers = function () {
  console.log(this.computerMoveValue);
  console.log(this.moveChoice);
  if (this.computerMoveValue === 'rock' && this.moveChoice === 'rock' || this.computerMoveValue === 'paper' && this.moveChoice === 'paper' || this.computerMoveValue === 'scissors' && this.moveChoice === 'scissors') {
    this.winner = 'Draw!';
  } else if (this.computerMoveValue === 'rock' && this.moveChoice === 'scissors' || this.computerMoveValue === 'scissors' && this.moveChoice === 'paper' || this.computerMoveValue === 'paper' && this.moveChoice === 'rock') {
    this.winner = 'Computer wins!';
  } else if (this.computerMoveValue === 'rock' && this.moveChoice === 'paper' || this.computerMoveValue === 'scissors' && this.moveChoice === 'rock' || this.computerMoveValue === 'paper' && this.moveChoice === 'scissors') {
    this.winner = 'Player wins!';
  }
  this.updateCounter();
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
  document.getElementById('playerScore').innerHTML = this.playerCounter;
  document.getElementById('computerScore').innerHTML = this.computerCounter;
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
