function Game() {
  this.board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  this.setUpBoard();
  this.populateDom();
  this.toString();
}

Game.prototype.populateDom = function () {
  for (var i = 0; i < this.board.length; i++ ) {
    for (var j = 0; j < this.board.length; j++ ) {
      $("#"+String(i)+String(j)).removeClass();
      $("#"+String(i)+String(j)).html(this.board[i][j]);
      $("#"+String(i)+String(j)).addClass("class"+String(this.board[i][j]));
    }
  }
}

function randomNumber() {
  return Math.floor(Math.random()*4)
}

Game.prototype.setRand = function() {
  this.board[randomNumber()][randomNumber()] = 7
}

Game.prototype.secondRand = function() {
  var firstNum = randomNumber()
  var secondNum = randomNumber()
  if (this.board[firstNum][secondNum] === 0) {
    this.board[firstNum][secondNum] = 7
  } else {
    this.secondRand()
  };
};

Game.prototype.setUpBoard = function() {
  this.setRand();
  this.secondRand();
}

Game.prototype.toString = function() {
  for ( i = 0; i < this.board.length; i++ ) {
    console.log(this.board[i])
 }
}

function nonZero(value) {
  return value > 0
}

Game.prototype.removeZeroes = function() {
  for ( i = 0; i < this.board.length; i++ ) {
    var filtered = this.board[i].filter(nonZero)
    this.board[i] = filtered
  };
};

Game.prototype.addZeroes = function() {
  for ( i = 0; i < this.board.length; i++ ) {
    while (this.board[i].length < 4) {
      this.board[i].push(0)
    };
  };
};

Game.prototype.combineLikeNumbers = function() {
    this.board.forEach(function(row){
      row.forEach(function(number, idx){
        if (number === row[idx+1]) {
          row[idx] = row[idx] + row[idx + 1]
          row.splice([idx + 1], 1)
        }
      });
    });
  };

function transpose(a) {
  return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
}

Game.prototype.moveLeft = function() {
  this.removeZeroes();
  this.combineLikeNumbers();
  this.addZeroes();
  this.secondRand();
  this.toString();
}

Game.prototype.moveRight = function() {
  this.removeZeroes();
  this.board.forEach(function(row){ row.reverse() });
  this.combineLikeNumbers();
  this.addZeroes();
  this.board.forEach(function(row){ row.reverse() });
  this.secondRand();
  this.toString();
}

Game.prototype.moveUp = function() {
  this.board = transpose(this.board);
  this.removeZeroes();
  this.combineLikeNumbers();
  this.addZeroes();
  this.board = transpose(this.board);
  this.secondRand();
  this.toString();
}

Game.prototype.moveDown = function() {
  this.board = transpose(this.board);
  this.board.forEach(function(row){ row.reverse() });
  this.removeZeroes();
  this.combineLikeNumbers();
  this.addZeroes();
  this.board.forEach(function(row){ row.reverse() });
  this.board = transpose(this.board);
  this.secondRand();
  this.toString();
}

