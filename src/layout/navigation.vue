<template>
  <div id="app-nav">
    <router-link to='/' class="blacky">Home</router-link>
    {{separator}}
    <router-link to='/about' class="blacky">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'layout-navigation',
  data () {
    return {
      separator: ' | '
    }
  }
}
</script>

<style scoped>
#app-nav {
  padding: 30px;
}

#app-nav .blacky {
  color: black;
}

#app-nav a.router-link-exact-active {
  color: yellow;
}
</style>
