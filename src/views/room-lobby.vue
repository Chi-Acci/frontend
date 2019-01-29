<template>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item" v-for="(user, index) in users" :key="index">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <span :style="usernameStyle(user.name)">{{ user.name }}</span>
            </div>
            <div class="col-md-6">
              <div class="progress">
                <div class="progress-bar bg-dark"
                     role="progressbar"
                     :style="progressStyle(user.rated_count)"
                     :aria-valuenow="user.rated_count" aria-valuemin="0" aria-valuemax="10">
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <br>
    <div class="container">
      <div v-if="showRefreshButton" class="row justify-content-around">
        <div class="col-md-6">
        <lobby-refresh :room-slug="slug"/>
        </div>
      </div>
      <div v-else-if="showGetResultsBtn" class="row justify-content-around">
        <div class="col-md-6">
          <lobby-results :room-slug="slug"/>
        </div>
      </div>
      <div v-else class="row justify-content-around">
        <div class="col-md-6">
          <div class="alert alert-dark" role="alert">
            {{ resultsAreLoadedMsg }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { G_USERNAME, G_ROOM_USERS, G_ROOM_RESULTS, G_ROOM_RESULTS_READY } from '../store/constants'
import lobbyRefresh from '../components/lobby-refresh'
import lobbyResults from '../components/lobby-results'

export default {
  name: 'RoomLobby',
  components: {
    lobbyRefresh,
    lobbyResults
  },
  data () {
    return {
      resultsAreLoadedMsg: 'We have results already!'
    }
  },
  computed: {
    username () {
      return this.$store.getters[G_USERNAME]
    },
    users () {
      return this.$store.getters[G_ROOM_USERS]
    },
    slug () {
      return this.$route.params.slug
    },
    resultsAreReady () {
      return this.$store.getters[G_ROOM_RESULTS_READY]
    },
    roomResultsAreLoaded () {
      return !!this.$store.getters[G_ROOM_RESULTS]
    },
    showRefreshButton () {
      return !this.resultsAreReady
    },
    showGetResultsBtn () {
      return this.resultsAreReady && !this.roomResultsAreLoaded
    }
  },
  methods: {
    usernameStyle (username) {
      const color = username === this.username ? 'yellow' : 'white'
      return `color: ${color}`
    },
    progressStyle (value) {
      return `width: ${value * 10}%;`
    }
  }
}
</script>

<style scoped>
li {
  background-color: gray;
}
.alert {
  background-color: gray;
  color: white;
}
</style>
