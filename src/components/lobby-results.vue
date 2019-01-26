<template>
  <button class="btn btn-dark" type='button' v-on:click='onClick()'>
    {{label}}
  </button>
</template>

<script>
import { A_GET_ROOM } from '../store/constants'

export default {
  name: 'room-results',
  props: {
    roomSlug: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      label: 'Calculate Results'
    }
  },
  methods: {
    onClick () {
      this.$store.dispatch(A_GET_ROOM, this.roomSlug)
    }
  }
}
</script>

<style scoped>

</style>
