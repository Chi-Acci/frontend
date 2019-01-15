<template>
  <div>
    <h3>{{topMsg}}</h3>

    <room-lobby v-if="selected === 1"/>
    <room-movies v-if="selected === 2"/>
    <room-results v-if="selected === 3"/>

  </div>
</template>

<script>
import roomLobby from '@/components/RoomLobby'
import roomMovies from '@/components/RoomMovies'
import roomResults from '@/components/RoomResults'

export default {
  name: 'room',
  components: {
    roomLobby,
    roomMovies,
    roomResults
  },
  data () {
    return {
      topMsg: `Room ${this.$route.params.id}`,
      selected: 2
    }
  }
}
</script>

<style scoped>
</style>
