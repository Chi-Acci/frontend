<template>
  <div>
    <h3>{{topMsg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'room',
  data () {
    return {
      topMsg: `Room ${this.$route.params.id}`
    }
  }
}
</script>

<style>
</style>
