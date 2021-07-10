import Piece from "../piece";
import Tile from "./tile";

class StartTile extends Tile{
    constructor(row, col) {
        super(row, col);
        this.piece = new Piece(null, this);
    }

    getImageUrl() {
        return 'tile-empty.png';
    }
}

export default StartTile;