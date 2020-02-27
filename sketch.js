let w = 400;
let h = 400;
let text_gap = 50;
let board;
let P1, P2;
let nextPlayer;
let winCondition;

function setup() {
  createCanvas(w, h + text_gap);
  board = new Board(w, h);
  P1 = new Player('X');
  P2 = new Player('O');
  nextPlayer = P1;
  winCondition = '';
}

function draw() {
  background(255);
  textSize(20);
  board.show();
  winCondition = board.checkWinCondition();
  if (winCondition != '') {
    noLoop();
    text("Winner: " + winCondition, 0, height - text_gap / 2);
    text("Space to reset", width / 3 * 2, height - text_gap / 2);
  } else {
    text("Turn: " + nextPlayer.symbol, 0, height - text_gap / 2);
  }
}

function mousePressed() {
  let x = floor(mouseY / (h / 3));
  let y = floor(mouseX / (w / 3));
  if (x < 3 && y < 3 && board.symbols[x][y] == '') {
    if (nextPlayer == P1) {
      board.symbols[x][y] = nextPlayer.symbol;
      nextPlayer = P2;
    } else {
      board.symbols[x][y] = nextPlayer.symbol;
      nextPlayer = P1;
    }
  }
}

function keyPressed() {
  if (key == ' ') {
    nextPlayer = P1;
    board.reset();
    loop();
  }
}