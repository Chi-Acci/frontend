<template>
  <button class="btn btn-dark" type='button' v-on:click='onClick()'>
    {{label}}
  </button>
</template>0

<script>
import { A_GET_ROOM_RESULTS } from '../store/constants'

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
      this.$store.dispatch(A_GET_ROOM_RESULTS, this.roomSlug)
    }
  }
}
</script>

<style scoped>

</style>
