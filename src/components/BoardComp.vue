<template>
  <div id="board">
    <table id="tiles-table" >
      <tr v-for="row in boardArr" :key="row.id">
        <td v-for="tile in row.tiles" :key="tile.id" v-on:click="tileSelect(tile)">
            <TileComp :tileObj="tile"></TileComp>
            <!-- <PieceComp :pieceObj="piece"></PieceComp> -->
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import TileComp from './TileComp.vue'
// import PieceComp from './PieceComp.vue';

import Game from '../game/game.js';
import Piece from '../game/piece.js';

export default {
  name: 'BoardComp',
  data: function () {
    let game = new Game();
    return {
      curSelected : null,
      boardArr : game.board.tiles,
      piece : new Piece(null, null)
    }
  },
  methods: {
    tileSelect(tile) {
      console.log(tile)
      if (this.curSelected) {
        if (!tile.piece) {
          tile.piece = this.curSelected.piece;
          this.curSelected.piece = null;
          this.curSelected = null;
        }
      }
      else if (tile.piece) {
        this.curSelected = tile;
      }
    }
  },
  components: {
    TileComp,
    // PieceComp
  }
}
</script>

<style scoped>
#board {
  position: block;
  background: black;
  margin: auto;
  width: 80%;
  justify-content: center;
}

#tiles-table { 
  position: block;
  width: 100%;
  border-collapse: collapse;
}
/* tr {
  padding: 0px;
  margin: 100px;
} */
td {
  /* padding-left: 3px; */
  /* padding-right: 3px; */
  padding: 0px;
  padding-bottom: 0px;
  /* margin: 100px; */
  
}
</style>
