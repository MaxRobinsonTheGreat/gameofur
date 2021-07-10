import Tile from "./tile";

class EndTile extends Tile{
    getImageUrl() {
        return 'tile-empty.png';
    }
}

export default EndTile;