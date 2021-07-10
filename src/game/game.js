import Board from "./board";
import Player from "./player";

class Game {
    constructor() {
        this.board = new Board();
        this.topPlayer = new Player();
        this.bottomPlayer = new Player();
    }
}

export default Game;