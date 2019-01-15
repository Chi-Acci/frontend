<template>
  <div class="container">
    <h4>{{topMsg}}</h4>
    <div class="row justify-content-center">
      <div class="col-6">
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
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
import { roomLobbyRoute, roomMoviesRoute, roomResultsRoute } from '@/router/routes'

export default {
  name: 'room',
  data () {
    return {
      topMsg: `Room ${this.$route.params.id}`,
      lobbyRouteName: roomLobbyRoute.name,
      lobbyTabLabel: 'Lobby',
      moviesRouteName: roomMoviesRoute.name,
      moviesTabLabel: 'Movies',
      resultsRouteName: roomResultsRoute.name,
      resultsTabLabel: 'Results'
    }
  },
  methods: {
    to (name) {
      return { name: name, params: { id: this.$route.params.id } }
    },
    tabClass (name) {
      return name === this.$route.name ? 'tab selected' : 'tab not-selected'
    }
  }
}
</script>

<style scoped>
.nav-tabs{
  color: black !important;
}

li {
  padding: 0px;
}

a.tab.selected{
  color: red !important;
}

</style>
