// import Tile from './tiles/tile.js';

class Piece {
    constructor (owner, tile=null) {
        this.owner = owner;
        this.tile = tile;
        this.imageUrl = this.getImageUrl();
        this.highlighted = false;
    }

    getImageUrl() {
        return 'black-piece.png';
    }
}

export default Piece;