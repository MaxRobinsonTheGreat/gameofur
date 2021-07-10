<template>
  <img :src="require('../assets/' + pieceObj.imageUrl)" alt='piece'>
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
template {
    display: absolute;
    left:0;
    top: 0;
    width:60%;
    z-index: 1;
}
</style>
