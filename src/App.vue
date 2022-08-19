<template>
  <Nav_Container />
  <router-view />
</template>

<script>

import Nav_Container from './components/Navz.vue'

export default {
  name: 'App',
  components: {

    Nav_Container,

},

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#container-lottie{
  position: fixed;
  width: 100px;
  height: 100px;
}
</style>
