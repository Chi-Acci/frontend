<template>
  <div>
    ROOM LOBBY

    <ul >
      <li v-for="user in users" :key="user.username">
        {{ user.username }} -> {{userStatus(user)}}
      </li>
    </ul>
  </div>
</template>

<script>
const otherUsers = [
  {
    username: 'Miguel Araujo', ready: true
  },
  {
    username: 'Antonio Zambujo', ready: true
  }
]
export default {
  name: 'RoomLobby',
  data () {
    return {
      users: otherUsers
    }
  },
  mounted () {
    this.users.push({ username: this.$store.getters.G_USERNAME, ready: false })
  },
  methods: {
    userStatus (user) {
      return user.ready ? 'ready' : 'not ready'
    }
  }
}
</script>

<style scoped>

</style>
