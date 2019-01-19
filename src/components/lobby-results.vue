<template>
  <button class="btn btn-dark" type='button' :disabled='disabled' v-on:click='onClick()'>
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
  computed: {
    disabled () {
      return true
    }
  },
  methods: {
    onClick () {
      this.$store.dispatch(A_GET_ROOM)
    }
  }
}
</script>

<style scoped>

</style>
