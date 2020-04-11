const Piece = require('./piece');

class Board {
  pieces_ = [];

  constructor() {
  }

  movePiece(fromCol, fromRow, toCol, toRow) {
    if (!this.isValidCoordinate(fromCol)) {
      throw new Error('fromCol must be between 0 and 10');
    }
    if (!this.isValidCoordinate(fromRow)) {
      throw new Error('fromRow must be between 0 and 10');
    }
    if (!this.isValidCoordinate(toCol)) {
      throw new Error('tiCol must be between 0 and 10');
    }
    if (!this.isValidCoordinate(toRow)) {
      throw new Error('toRow must be between 0 and 10');
    }
    
    if (!this.isEmptyPosition(toCol, toRow)) {
      throw new Error(`Destination ${toCol}.${toRow} is not empty!`);
    }

    if (fromCol !== toCol && fromRow !== toRow) {
      throw new Error(`Pieces cannot be moved diagonally!`);
    }

    const piece = this.getPiece(fromCol, fromRow);

    if (piece === null) {
      throw new Error('Piece not found!');
    }

    if (piece.role !== 'king' && this.isSpecialPosition(toCol, toRow)) {
      throw new Error(`Piece ${ fromCol }.${ fromRow} is not the King!`);
    }

    this.pieces_ = this.pieces_.filter((p) => {
      if (p.row == piece.row && p.col === piece.col) {
        piece.col = toCol;
        piece.row = toRow;
        return piece;
      }
      return p;
    });
  }

  setPiece(piece) {
    if (this.pieces.length === 37) {
      throw new Error('Board is full!');
    }

    if (piece.role === 'king' && this.pieces_.some((p) => p.role === 'king')) {
      throw new Error(`Only one King is allowed!`);
    }

    if (this.pieces_.some((p) => {
      return p.col === piece.col && p.row === piece.row
    })) {
      throw new Error(`${ piece.col}.${ piece.row} is not empty!`);
    }

    this.pieces_.push(piece);
  }

  getPiece(col, row) {
    return this.pieces.find((piece) => piece.col === col && piece.row === row ) || null;
  }

  get pieces() {
    return this.pieces_;
  }

  isValidCoordinate(coordinate) {
    return coordinate >= 0 && coordinate <= 10;
  }

  isEmptyPosition(col, row) {
    return !this.pieces.some((piece) => {
      return piece.col === col && piece.row === row;
    });
  }
  
  isSpecialPosition(col, row) {
    if (col === 0 && row === 0) {
      return true;
    }
    if (col === 0 && row === 10) {
      return true;
    }
    if (col === 10 && row === 0) {
      return true;
    }
    if (col === 10 && row === 10) {
      return true;
    }
    if (col === 5 && row === 5) {
      return true;
    }
    return false;
  }

  draw() {
    for(let i = 0; i < 11; i++) {
      let row = '';
      for(let j = 0; j < 11; j++) {
        const piece = this.getPiece(j, i);
        if (piece === null) {
          row += this.isSpecialPosition(j, i) ? '[H]' : '[ ]';
        } else {
          row +=`[${ piece.role[0].toUpperCase() }]`;
        }
      }
      console.log(row);
    }
  }
}

module.exports = Board;