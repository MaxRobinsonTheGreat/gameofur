import Tile from './tiles/tile.js';
import StartTile from './tiles/starttile.js';
import EndTile from './tiles/endtile.js';
import DoubleTile from './tiles/doubletile.js';


class Board {
    constructor() {
        this.tiles = [];
        let rows = 3; 
        let cols = 8;
        // special tiles: start, end, double, etc..
        // have different image urls, landOn calculations, 
        let boardmap = [
            [DoubleTile, Tile, Tile, Tile, StartTile, EndTile, Tile, Tile],
            [Tile, Tile, Tile, DoubleTile, Tile, Tile, Tile, Tile],
            [DoubleTile, Tile, Tile, Tile, StartTile, EndTile, Tile, Tile]
        ];
        for (let r=0; r<rows; r++) {
            let rowTiles = [];
            for (let c=0; c<cols; c++) {
                rowTiles.push(new boardmap[r][c](r, c));
            }
            this.tiles.push({
                id: r+"",
                tiles: rowTiles
            });
        }
    }

    getTile(r, c) {
        return this.tiles[r].tiles[c];
    }

    getById(id) {
        let s = id.split(',');
        return this.getTile(+s[0], +s[1])
    }


}

export default Board;