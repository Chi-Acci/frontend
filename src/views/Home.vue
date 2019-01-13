<template>
  <div>
    <h3>
      <p>{{topMsg}}</p>
      <p>{{botMsg}}</p>
    </h3>

    <div>
      <router-link :to='createBtnRoute'>
        <button class='item' type='button'>
          {{createBtnLabel}}
        </button>
      </router-link>
    </div>

    <div>
      <router-link :to='joinBtnRoute'>
        <button class='item' type='button'>
          {{joinBtnLabel}}
        </button>
      </router-link>
    </div>
  </div>

</template>

<script>
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
