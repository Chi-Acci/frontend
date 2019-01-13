<template>
  <div id='nav'>
    <router-link to='/'>Home</router-link>
    {{separator}}
    <router-link to='/about'>About</router-link>
  </div>
</template>

<script>
export default {
  name: 'appNavigation',
  data () {
    return {
      separator: ' | '
    }
  }
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a.router-link-exact-active {
  color: orangered;
}
</style>
