<template>
  <div id="container">
    <img id="tile" v-if="tileObj.imageUrl" :src="require('../assets/' + tileObj.imageUrl)" alt='tile'>
    <img id="piece" v-if="tileObj.piece" :src="require('../assets/' + tileObj.piece.imageUrl)" alt='piece'>
    <!-- <img id="piece" :src="require('../assets/black-piece.png')" alt='piece'> -->

    <!-- <p>{{tileObj.imageUrl}}</p> -->
  </div>
</template>

<script>
export default {
  name: 'TileComp',
    data: function () {
      return {

      };
  },
  props: {
    'tileObj': Object
  },
}
</script>

<style scoped>
#container {
  position: relative;
}

#tile {
  position: block;
  width:100%;
}

#piece {
  position: absolute;
  width:100%;
  left:0;
}
</style>
