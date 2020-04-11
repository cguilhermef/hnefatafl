const Board = require('./board');
const Piece = require('./piece');

class Match {

  player1_ = null;
  player2_ = null;
  playing_ = null;
  board_ = null;

  constructor(player1, player2, playing = 'attacker') { 
    this.start();
    this.player1 = player1;
    this.player2 = player2;
    this.playing = playing;
  }

  get board() {
    return this.board_;
  }

  set player1(player) {
    this.player1_ = player;
  }
  get player1() {
    return this.player1_;
  }

  set player2(player) {
    this.player2_ = player;
  }
  get player2() {
    return this.player2_;
  }

  set playing(player) {
    this.playing_ = player;
  }
  get playing() {
    return this.playing_;
  }

  move(colFrom, rowFrom, colTo, rowTo) {
    if (this.board_ === null) {
      throw new Error('This match has not yet started!');
    }

    const player = this.whoIsPlaying();
    const piece = this.board.getPiece(colFrom, rowFrom);

    if (this.playing !== piece.role) {
      throw new Error(`Player ${ player.nickname } can't move ${ piece.role}'s pieces!`);
    }

    try {
      this.board_.movePiece(colFrom, rowFrom, colTo, rowTo);
      this.togglePlayer();
    } catch(e) {
      throw new Error(e);
    }
  }

  start() {
    if (this.board_ !== null) {
      throw new Error('This match has already started!');
    }
    this.board_ = new Board();
    this.board_.setPiece(new Piece(3, 0, 'attacker'));
    this.board_.setPiece(new Piece(4, 0, 'attacker'));
    this.board_.setPiece(new Piece(5, 0, 'attacker'));
    this.board_.setPiece(new Piece(5, 1, 'attacker'));
    this.board_.setPiece(new Piece(6, 0, 'attacker'));
    this.board_.setPiece(new Piece(7, 0, 'attacker'));

    this.board_.setPiece(new Piece(0, 3, 'attacker'));
    this.board_.setPiece(new Piece(0, 4, 'attacker'));
    this.board_.setPiece(new Piece(0, 5, 'attacker'));
    this.board_.setPiece(new Piece(1, 5, 'attacker'));
    this.board_.setPiece(new Piece(0, 6, 'attacker'));
    this.board_.setPiece(new Piece(0, 7, 'attacker'));

    this.board_.setPiece(new Piece(3, 10, 'attacker'));
    this.board_.setPiece(new Piece(4, 10, 'attacker'));
    this.board_.setPiece(new Piece(5, 10, 'attacker'));
    this.board_.setPiece(new Piece(5, 9, 'attacker'));
    this.board_.setPiece(new Piece(6, 10, 'attacker'));
    this.board_.setPiece(new Piece(7, 10, 'attacker'));

    this.board_.setPiece(new Piece(10, 3, 'attacker'));
    this.board_.setPiece(new Piece(10, 4, 'attacker'));
    this.board_.setPiece(new Piece(10, 5, 'attacker'));
    this.board_.setPiece(new Piece(9, 5, 'attacker'));
    this.board_.setPiece(new Piece(10, 6, 'attacker'));
    this.board_.setPiece(new Piece(10, 7, 'attacker'));

    this.board_.setPiece(new Piece(5, 3, 'defender'));
    this.board_.setPiece(new Piece(5, 4, 'defender'));
    this.board_.setPiece(new Piece(5, 5, 'king'));
    this.board_.setPiece(new Piece(5, 6, 'defender'));
    this.board_.setPiece(new Piece(5, 7, 'defender'));

    this.board_.setPiece(new Piece(3, 5, 'defender'));
    this.board_.setPiece(new Piece(4, 5, 'defender'));
    this.board_.setPiece(new Piece(6, 5, 'defender'));
    this.board_.setPiece(new Piece(7, 5, 'defender'));

    this.board_.setPiece(new Piece(4, 4, 'defender'));
    this.board_.setPiece(new Piece(4, 6, 'defender'));
    this.board_.setPiece(new Piece(6, 4, 'defender'));
    this.board_.setPiece(new Piece(6, 6, 'defender'));

  }

  togglePlayer() {
    this.playing = this.playing === 'attacker' ? 
      'defender' :
      'attacker';
  }

  whoIsPlaying() {
    return this.playing === this.player1.role ?
      this.player1 :
      this.player2;
  }
}

module.exports = Match;