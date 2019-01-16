<template>
  <div class="container">
    <br>
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
  </div>
</template>

<script>
const otherUsers = [
  {
    username: 'Miguel Araujo', rated: 5
  },
  {
    username: 'Antonio Zambujo', rated: 2
  },
  {
    username: 'Maria', rated: 0
  }
]
export default {
  name: 'RoomLobby',
  data () {
    return {
      users: otherUsers
    }
  },
  computed: {
    username () {
      return this.$store.getters.G_USERNAME
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
