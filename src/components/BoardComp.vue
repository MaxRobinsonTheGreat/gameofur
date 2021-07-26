<template>
  <div id="board">
    <table id="tiles-table" >
      <tr v-for="row in boardArr" :key="row.id">
        <td v-for="tile in row.tiles" :key="tile.id" v-on:click="tileSelect(tile)">
            <TileComp :tileObj="tile"></TileComp>
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
        this.curSelected.deselect();
        if (tile === this.curSelected) {
          this.curSelected = null;
          return;
        }
        if (tile.piece) {
          tile.select();
          this.curSelected = tile;
        }
        else {
          tile.piece = this.curSelected.piece;
          this.curSelected.piece = null;
          this.curSelected = null;
        }
      }
      else {
        this.curSelected = tile;
        this.curSelected.select();
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
  background: rgb(25, 25, 56);
  border-color: rgb(184, 162, 39);
  border-width: 5px;
  border-style: solid;
  border-radius: 15px;

  margin: auto;
  padding: 50px;

  width: 80%;
  height: 100%;
  justify-content: center;
}

#tiles-table { 
  /* position: relative; */
  /* display: inline; */
  border-collapse: collapse;
  width: 100%;
  /* height: 100%; */
  /* padding: 0px;*/
}
tr>td {
  /* display: row; */
  /* border: 5px solid black; */
  padding: 0;
  /* padding-bottom: 0; */
}
td {
  /* display: row; */
  /* padding-left: 3px; */
  /* padding-right: 3px; */
  padding: 0px;
  margin: 0px;
  /* display: block; */
  /* width: 100%; */
  /*margin: 0px; */

  /* padding-bottom: 0px; */
  /* margin: 0px; */
  /* margin: 100px; */
  
}
</style>