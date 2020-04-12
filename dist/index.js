import { Match } from './match';
import { Player } from './player';
const p1 = new Player('Christian', 'attacker');
const p2 = new Player('Carol', 'defender');
const j1 = new Match(p1, p2);
try {
    j1.move(0, 3, 4, 3);
}
catch (e) {
    console.log(e);
}
try {
    j1.move(5, 3, 5, 2);
}
catch (e) {
    console.log(e);
}
try {
    j1.move(5, 5, 5, 6);
}
catch (e) {
    console.log(e);
}
j1.board.toString();
//# sourceMappingURL=index.js.map