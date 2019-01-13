<template>
  <div>
    <h3>{{topMsg}}</h3>

    <h4>
      {{roomIdLabel}}
      <input v-model='roomId' :placeholder='roomIdPlaceholder' :class='roomIdClass' required>
    </h4>

    <div>
      <button class='item' type='button' :disabled='btnDisabled' v-on:click='join()'>
        {{joinBtnLabel}}
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'join',
  data () {
    return {
      topMsg: 'Join Room',

      roomIdLabel: 'Name *',
      roomIdPlaceholder: 'Ask for the room name',
      roomIdClass: 'item',
      roomId: undefined,

      joinBtnLabel: 'Join',
      roomPathName: 'room'
    }
  },
  computed: {
    btnDisabled () {
      return !this.roomId
    }
  },
  watch: {
    roomId () {
      this.roomIdClass = 'item'
    }
  },
  methods: {
    join () {
      console.log('POST /join:')
      console.log('room name:', this.roomId)
      if (this.roomId !== 'abcd') {
        this.$router.push({ name: this.roomPathName, params: { id: this.roomId } })
      } else {
        this.roomIdClass = 'item invalid'
      }
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

.invalid {
  border-color: red;
}
</style>
