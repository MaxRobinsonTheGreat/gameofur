class Tile {
    constructor(row, col) {
        this.id = row + ',' + col; 
        this.isMiddle = row===1;
        this.isTop = row===0;
        this.imageUrl = this.getImageUrl();
        this.piece = null;
        this.selected = false;
    }

    getImageUrl() {
        return 'tile-basic.png';
    }

    select() {
        this.selected = true;
        if (this.piece)
            this.piece.highlighted = true;
    }

    deselect() {
        this.selected = false;
        if (this.piece)
            this.piece.highlighted = false;
    }
}


export default Tile;