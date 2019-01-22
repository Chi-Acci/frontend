<template>
  <div class="container">
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
            v-model='roomSlug'
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
import { roomRoutes } from '../router/routes'
import { G_USERNAME, A_CREATE_USER, A_JOIN_ROOM } from '../store/constants'
import username from '@/components/input-username'

export default {
  name: 'join',
  components: {
    username
  },
  data () {
    return {
      roomIdLabel: 'Room Id *',
      roomIdPlaceholder: 'Ask around',
      roomIdClass: 'item',
      roomSlug: undefined,

      joinBtnLabel: 'Join'
    }
  },
  computed: {
    btnDisabled () {
      return !this.username || !this.roomSlug
    },
    username () {
      return this.$store.getters[G_USERNAME]
    }
  },
  watch: {
    roomSlug () {
      this.roomIdClass = 'item'
    }
  },
  methods: {
    join () {
      this.$store.dispatch(A_CREATE_USER, this.username)
        .then(() => {
          this.$store.dispatch(A_JOIN_ROOM, this.roomSlug)
            .then(() => { this.joinSuccess() })
            .catch(() => { this.joinFail() })
        })
        .catch(() => {})
    },
    joinSuccess () {
      this.$router.push({ name: roomRoutes.name, params: { slug: this.roomSlug } })
    },
    joinFail () {
      this.roomIdClass = 'item invalid'
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
