<template>
  <div class="container-fluid">
    <br>
    <div v-if="roomIsLoaded" class="row justify-content-center">
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
import { homeRoute, roomLobbyRoute, roomMoviesRoute, roomResultsRoute } from '../router/routes'
import { G_ROOM_IS_LOADED, G_ROOM_RESULTS, G_ROOM_RESULTS_READY,
  A_GET_ROOM, A_WS_CONNECT } from '../store/constants'

export default {
  name: 'room',
  data () {
    return {
      homeRoute: homeRoute,
      lobbyRouteName: roomLobbyRoute.name,
      lobbyTabLabel: 'Lobby',
      moviesRouteName: roomMoviesRoute.name,
      moviesTabLabel: 'Movies',
      resultsRouteName: roomResultsRoute.name,
      resultsTabLabel: 'Results'
    }
  },
  computed: {
    roomSlug () {
      return this.$route.params.slug
    },
    roomIsLoaded () {
      return this.$store.getters[G_ROOM_IS_LOADED]
    },
    roomResultsAreLoaded () {
      return !!this.$store.getters[G_ROOM_RESULTS]
    },
    roomResultsAreReady () {
      return this.$store.getters[G_ROOM_RESULTS_READY]
    }
  },
  methods: {
    getRoomData () {
      this.$store.dispatch(A_GET_ROOM, this.roomSlug)
        .then(() => { this.getRoomDataSuccess() })
        .catch(() => { this.getRoomDataError() })
    },
    initWebSocket () {
      this.$store.dispatch(A_WS_CONNECT, this.roomSlug)
        .then(() => { console.log('SUCCESS') })
        .catch(() => { console.log('ERROR') })
    },
    getRoomDataSuccess () {
      this.initWebSocket()
    },
    getRoomDataError () {
      this.$router.push({ name: this.homeRoute.name })
    },
    getRoomResultsSuccess () {
      this.$router.push({ name: roomResultsRoute.name })
    },
    to (name) {
      return { name: name }
    },
    tabClass (name) {
      return name === this.$route.name ? 'tab selected' : 'tab not-selected'
    }
  },
  created () {
    if (!this.roomIsLoaded) {
      this.getRoomData()
    } else {
      this.initWebSocket()
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
