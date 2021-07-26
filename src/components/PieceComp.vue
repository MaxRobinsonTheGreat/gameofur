<template>
  <div id="piece-container">
    <img v-if="pieceObj.highlighted" id="hightlight" src='../assets/piece-highlight.png' alt='highlight'>
    <img id="piece" :src="require('../assets/' + pieceObj.imageUrl)" alt='piece'>
  </div>
</template>

<script>
export default {
  name: 'PieceComp',
    data: function () {
      return {

      };
  },
  props: {
    'pieceObj': Object
  },
}
</script>

<style scoped>
div {
  top: 0;
  padding: 0;
}
#piece-container {
  position: relative;
  width: 100%;
  padding: 0px;
}

#piece {
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 1;
}

#hightlight {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 0;
}


</style>
