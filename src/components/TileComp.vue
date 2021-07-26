<template>
  <div id="tile-container">
    <img id="tile" v-if="tileObj.imageUrl" :src="require('../assets/' + tileObj.imageUrl)" alt='tile'>
    <PieceComp id="piece" v-if="tileObj.piece" :pieceObj="tileObj.piece"></PieceComp>
  </div>
</template>

<script>
import PieceComp from './PieceComp.vue';

export default {
  name: 'TileComp',
    data: function () {
      return {

      };
  },
  props: {
    'tileObj': Object
  },
  components: {
    PieceComp
  }
}
</script>

<style scoped>

#tile-container {
  position: relative;
  top: 0;
}

#tile {
  width:100%;
  margin: 0;
  padding: 0;
}

#piece {
  padding: 0px;
  width:100%;
  left:0;
}
</style>
