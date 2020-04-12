import { Piece } from './piece';

describe('Pieces', () => {
  it('should create a piece at col 1, row 2', () => {
    const piece = new Piece(1, 2, 'attacker');
    expect(piece.col).toEqual(1);
    expect(piece.row).toEqual(2);
  });
  
  it('should change col from 1 to 2', () => {
    const piece = new Piece(1, 2, 'attacker');
    piece.col = 2;
    expect(piece.col).toEqual(2);
  });
  
  it('shouldn\'t set col greater than 10 or less than 0', () => {
    const piece = new Piece(1, 2, 'attacker');
    expect(() => piece.col = 11).toThrow();
    expect(() => piece.col = -1).toThrow();
  });
  
  it('shouldn\'t set row greater than 10 or less than 0', () => {
    const piece = new Piece(1, 2, 'attacker');
    expect(() => piece.row = 11).toThrow();
    expect(() => piece.row = -1).toThrow();
  });

  it('should get role', () => {
    const piece = new Piece(1, 2, 'king');
    expect(piece.role).toEqual('king');
  });

  it('shouldn\'t set role anything else than defender, attacker or king', () => {
    expect(() => new Piece(1, 2, 'loremipsum')).toThrow();
  });
});
