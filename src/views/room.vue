<template>
  <div class="container-fluid">
    <br>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <ul class="nav nav-tabs nav-justified">
          <li class="nav-item">
            <router-link :to="to(lobbyRouteName)" :class="tabClass(lobbyRouteName)">{{lobbyTabLabel}}</router-link>
          </li>
          <li class="nav-item">
            <router-link :to='to(moviesRouteName)' :class="tabClass(moviesRouteName)">{{moviesTabLabel}}</router-link>
          </li>
          <li class="nav-item">
            <router-link :to='to(resultsRouteName)' :class="tabClass(resultsRouteName)">{{resultsTabLabel}}</router-link>
          </li>
        </ul>
        <br>
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
import { roomLobbyRoute, roomMoviesRoute, roomResultsRoute } from '@/router/routes'
import { A_GET_ROOM } from '../store/constants'

export default {
  name: 'room',
  data () {
    return {
      lobbyRouteName: roomLobbyRoute.name,
      lobbyTabLabel: 'Lobby',
      moviesRouteName: roomMoviesRoute.name,
      moviesTabLabel: 'Movies',
      resultsRouteName: roomResultsRoute.name,
      resultsTabLabel: 'Results'
    }
  },
  computed: {
    roomIsLoaded () {
      return this.$store.getters.G_ROOM_IS_LOADED
    }
  },
  methods: {
    getRoomData () {
      this.$store.dispatch(A_GET_ROOM, this.$route.params.slug)
    },
    to (name) {
      return { name: name, params: { id: this.$route.params.id } }
    },
    tabClass (name) {
      return name === this.$route.name ? 'tab selected' : 'tab not-selected'
    }
  },
  created () {
    if (!this.roomIsLoaded) {
      this.getRoomData()
    }
  }
}
</script>

<style scoped>

a.tab.selected{
  color: yellow !important;
}

a.tab.not-selected{
  color: black !important;
}

</style>
