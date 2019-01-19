<template>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users" :key="user.username">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <span :style="usernameStyle(user.username)">{{ user.username }}</span>
            </div>
            <div class="col-md-6">
              <div class="progress">
                <div class="progress-bar bg-dark"
                     role="progressbar"
                     :style="progressStyle(user.rated)"
                     :aria-valuenow="user.rated" aria-valuemin="0" aria-valuemax="10">
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <br>
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-md-6">
        <lobby-refresh :room-slug="slug"/>
        </div>
      </div>
      <br>
      <div class="row justify-content-around">
        <div class="col-md-6">
          <lobby-results :room-slug="slug"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lobbyRefresh from './lobby-refresh'
import lobbyResults from './lobby-results'

export default {
  name: 'RoomLobby',
  components: {
    lobbyRefresh,
    lobbyResults
  },
  computed: {
    username () {
      return this.$store.getters.G_USERNAME
    },
    users () {
      return this.$store.getters.G_ROOM_USERS
    },
    slug () {
      return this.$route.params.slug
    }
  },
  methods: {
    usernameStyle (username) {
      const color = username === this.username ? 'yellow' : 'white'
      return `color: ${color}`
    },
    progressStyle (value) {
      console.log(value)
      return `width: ${value * 10}%;`
    }
  }
}
</script>

<style scoped>

li {
  background-color: gray;
}
</style>
