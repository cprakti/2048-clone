// $(document).ready(function() {


function Game() {
  this.board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  this.setUpBoard();
}

Game.prototype.setUpBoard = function() {

  var selectedRow = this.board[randomNumber];
  selectedRow[randomNumber] = 2
}

var randomNumber = Math.floor(Math.random()*4)


// });
