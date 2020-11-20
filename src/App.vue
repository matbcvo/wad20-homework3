<template>
  <div id="app" :class="$route.name == 'login' ? ['flex-middle', 'viewport-size'] : []">
    <Header v-if="$route.name != 'login'"/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {

  name: 'app',
  components: {
    Header,
  }
}
</script>

<style>
  * {
    font-family: 'Roboto Slab', serif;
    outline: none;
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #0277bd;
    color: #263238;
  }

  a {
    color: #40c4ff;
  }

  button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
  }

  button:hover {
    box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
    cursor: pointer;
  }

  .flex-middle {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .viewport-size {
    width: 100vw;
    height: 100vh;
  }
</style>
