const Match = require('./match');
const Player = require('./player');

const p1 = new Player('Christian', 'attacker');
const p2 = new Player('Carol', 'defender');
const j1 = new Match(p1, p2);

try {
  j1.move(0, 3, 4, 3);
} catch (e) {
  console.log(e);
}
try {
  j1.move(5, 3, 5, 2);
} catch (e) {
  console.log(e);
}

j1.board.draw();