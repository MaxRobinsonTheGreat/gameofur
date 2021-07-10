<template>
  <div id="app">
    <Board></Board>
  </div>
</template>

<script>
import Board from './components/BoardComp.vue'

export default {
  name: 'App',
  components: {
    Board
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  align-content: center;
}
body {
  background-color: rgb(25, 25, 56)
}
</style>
