let gap = 20;

class Board {
  constructor(w, h) {
    this.symbols = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.w = w;
    this.h = h;
  }

  show() {
    strokeWeight(3);
    line(0, this.h / 3, this.w, this.h / 3);
    line(0, this.h / 3 * 2, this.w, this.h / 3 * 2);
    line(this.w / 3, 0, this.w / 3, this.h);
    line(this.w / 3 * 2, 0, this.w / 3 * 2, this.h);
    line(0, this.h, this.w, this.h);

    ellipseMode(CORNER);
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        let x = this.w / 3;
        let y = this.h / 3;
        if (this.symbols[i][j] == 'X') {
          line(x * j + gap, y * i + gap, x * (j + 1) - gap, y * (i + 1) - gap);
          line(x * j + gap, y * (i + 1) - gap, x * (j + 1) - gap, y * i + gap);
        } else if (this.symbols[i][j] == 'O') {
          ellipse(x * j + gap, y * i + gap, this.w / 3 - 2 * gap, this.h / 3 - 2 * gap);
        }
      }
    }
  }

  checkWinCondition() {
    for (var i = 0; i < 3; i++) {
      // Check horizontal
      if (this.symbols[0][i] == this.symbols[1][i] && this.symbols[1][i] == this.symbols[2][i]) {
        return this.symbols[1][i];
      }
      // Check vertical
      if (this.symbols[i][0] == this.symbols[i][1] && this.symbols[i][1] == this.symbols[i][2]) {
        return this.symbols[i][1];
      }
    }

    // Check diagonal
    if (this.symbols[0][0] == this.symbols[1][1] && this.symbols[1][1] == this.symbols[2][2]) {
      return this.symbols[1][1];
    }
    if (this.symbols[2][0] == this.symbols[1][1] && this.symbols[1][1] == this.symbols[0][2]) {
      return this.symbols[1][1];
    }

    // Check tie
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (this.symbols[i][j] == '') {
          return '';
        }
      }
    }
    return "It's a Tie";
  }

  reset() {
    this.symbols = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }
}