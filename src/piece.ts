export class Piece {

  private col_ = null;
  private row_ = null;
  private role_ = null;

  constructor(
    col,
    row,
    role
  ) {
    this.col = col;
    this.row = row;
    this.role = role;
  }

  set col(col) {
    if (col < 0 || col > 10) {
      throw new Error('Col must be between 0 and 10!');
    }
    this.col_ = col;
  }

  get col() {
    return this.col_;
  }

  set row(row) {
    if (row < 0 || row > 10) {
      throw new Error('Row must be between 0 and 10!');
    }
    this.row_ = row;
  }

  get row() {
    return this.row_;
  }

  set role(role) {
    if (role !== 'attacker' && role !== 'defender' && role !== 'king') {
      throw new Error('Role must be "attack", "defense" or "king"!');
    }
    this.role_ = role;
  }

  get role() {
    return this.role_;
  }

  toString() {
    return `${ this.role }, ${ this.col }.${ this.row }`;
  }
}
