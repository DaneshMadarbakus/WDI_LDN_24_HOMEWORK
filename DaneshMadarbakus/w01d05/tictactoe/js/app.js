// do not use switch
// var solutions ie winning combinations (eg 012, 345, 137) (put these in arrays and sub arrays )
// var x moves
// var turns
// var o moves
// var squares
// var squares array
// var clear button


document.addEventListener('DOMContentLoaded', start);

// var squares = document.getElementsByClassName('squares');
// squares = Array.prototype.slice.call(squares);
var clicks = 0;
var winningSolutions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
// var squaresInPlay = [];
var clearButton = document.getElementsByClassName('clearing');
var xMoves = [];
var oMoves= [];
var squares;

function start() {
  squares = document.getElementsByClassName('squares');
  console.log('working');
  for (var y = 0; y < squares.length; y++){
    squares[y].addEventListener('click', xOMove);
    squares[y].setAttribute('data-clicked', '');
  }
  squares = Array.prototype.slice.call(squares);

  clearButton[0].addEventListener('click', clearGrid);

}


function determineWinner(){
  for (var w = 0; w < winningSolutions.length; w++){
    if (xMoves.sort() === winningSolutions[w]) {
      console.log('x has won');
    } else if (oMoves.sort() === winningSolutions[w]) {
      console.log('o has won');
    } else {
      console.log(xMoves.sort());
      return;
    }
  }
}

function numberOfClicks() {
  clicks += 1;
  console.log(clicks);
}

function xOMove() {
  if (!this.getAttribute('data-clicked')){
    if (clicks%2 === 0){
      this.classList.add('Xs');
      xMoves.push(squares.indexOf(this));
      this.setAttribute('data-clicked', 'clicked');
      numberOfClicks();
      determineWinner();
    } else {
      this.classList.add('Os');
      oMoves.push(squares.indexOf(this));
      this.setAttribute('data-clicked', 'clicked');
      numberOfClicks();
      determineWinner();
    }
  } else {
    return;
  }
}

function clearGrid() {
  window.location.reload();
}


// function isWinner() {
//   if
// }
