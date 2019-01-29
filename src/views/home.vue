<template>
  <div class="container">
    <h4>
      <p>{{topMsg}}</p>
      <p style="color: yellow">{{botMsg}}</p>
    </h4>

    <div class="container-fluid">
      <router-link :to='createBtnRoute'>
        <button class="btn btn-dark" type='button'>
          {{createBtnLabel}}
        </button>
      </router-link>
    </div>
    <br>
    <div>
      <router-link :to='joinBtnRoute'>
        <button class="btn btn-dark" type='button'>
          {{joinBtnLabel}}
        </button>
      </router-link>
    </div>
  </div>

</template>

<script>
import { A_SESSION_RESET } from '../store/constants'

export default {
  name: 'home',
  data () {
    return {
      topMsg: 'Need help choosing a movie?',
      botMsg: 'Get a room!',
      createBtnLabel: 'Create Room',
      createBtnRoute: 'create',
      joinBtnLabel: 'Join Room',
      joinBtnRoute: 'join'
    }
  },
  created () {
    this.$store.dispatch(A_SESSION_RESET)
  }
}
</script>

<style scoped>
.item {
  min-width: 250px;
  max-width: 400px;
  height: 30px;
  margin: 10px;
}
</style>
