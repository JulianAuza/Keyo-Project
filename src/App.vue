<template>
  <div id="app">
  <div class="container">
    <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width:800px;
  height:480px;
  padding:0px;
  box-shadow: 5px 5px 18px #888888;
  margin:auto;
}
h1{
  font-weight:200;
}
div.container{
  width:722px;
  margin:auto;
}
img{
  height:147px;
  width:355px;
}
</style>
