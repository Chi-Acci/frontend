<template>
  <div class="container">
    <h4>{{topMsg}}</h4>

    <br>

    <div class="row justify-content-center">
      <div class="col-md-4">
        <username/>

        <br>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{roomIdLabel}}</span>
          </div>
          <input
            type="text"
            v-model='roomId'
            class="form-control"
            :placeholder="roomIdPlaceholder"
            required>
          <!--- :class='roomIdClass'-->
        </div>

        <br>

        <button class="btn btn-dark" type='button' :disabled='btnDisabled' v-on:click='join()'>
          {{joinBtnLabel}}
        </button>

      </div>
    </div>

  </div>
</template>

<script>
import username from '@/components/username'

export default {
  name: 'join',
  components: {
    username
  },
  data () {
    return {
      topMsg: 'Join Room',

      roomIdLabel: 'Room Id *',
      roomIdPlaceholder: 'Ask for the room name',
      roomIdClass: 'item',
      roomId: undefined,

      joinBtnLabel: 'Join',
      roomPathName: 'room'
    }
  },
  computed: {
    btnDisabled () {
      return !this.username || !this.roomId
    },
    username () {
      return this.$store.getters.G_USERNAME
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
