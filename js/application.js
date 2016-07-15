game = new Game;
  game.populateDom();

  $(document).on('keyup',function(e){
    if(e.which==38) {
      console.log("up");
      game.moveUp();
    };
    if(e.which==39) {
      console.log("right");
      game.moveRight();
    };
    if(e.which==40) {
      console.log("down");
      game.moveDown();
    };
    if(e.which==37) {
      console.log("left");
      game.moveLeft();
    };
    game.populateDom();
  });

