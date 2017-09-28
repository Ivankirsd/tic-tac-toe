class TicTacToe {
    constructor() {
      this.matrix = [[null, null, null],
                    [null, null, null],
                    [null, null, null]];

      this.Simbol = 'x';
    }

    getCurrentPlayerSymbol() {
      return this.Simbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.matrix[rowIndex][columnIndex] === null) {

        this.matrix[rowIndex][columnIndex] = this.Simbol;

        if (this.Simbol == 'o') {
          this.Simbol = 'x';
        } else {
          this.Simbol = 'o';
        }
      }
    }

    isFinished() {
      return (this.isDraw() || this.getWinner() !== null)
    }

    getWinner() {

      for (var i = 0; i < this.matrix.length; i++) {
        if (this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][1] === this.matrix[i][2] && this.matrix[i][0] !== null) {
          return this.matrix[i][0];
        }
        if (this.matrix[0][i] === this.matrix[1][i] && this.matrix[1][i] === this.matrix[2][i] && this.matrix[0][i] !== null) {
          return this.matrix[0][i];
        }
      }
      if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2] && this.matrix[1][1] !== null) {
        return this.matrix[1][1];
      }
      if (this.matrix[2][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[0][2] && this.matrix[1][1] !== null) {
        return this.matrix[1][1];
      }
      return null;
    }

    noMoreTurns() {

      for (var i = 0; i < this.matrix.length; i++) {
        for (var j = 0; j < this.matrix[i].length; j++) {
          if(this.matrix[i][j] === null) {
            return false;
          }
        }
      }
      return true;
    }

    isDraw() {
      return  (this.noMoreTurns() && this.getWinner() === null);
    }

    getFieldValue(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
