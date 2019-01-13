<template>
  <div id="app">
    <app-navigation/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import appNavigation from '@/components/Navigation'
import appFooter from '@/components/Footer'


export default {
  name: 'app',
  components: {
    appNavigation,
    appFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
