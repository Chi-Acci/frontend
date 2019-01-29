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
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text">{{moodLabel}}</label>
          </div>
          <select v-model="mood" class="custom-select">
            <option disabled :value='undefined'>{{moodPlaceholder}}</option>
            <option v-for="_mood in availableMoods" :value="_mood.key" :key="_mood.key">
              {{ _mood.label }}
            </option>
          </select>
        </div>
        <br>
        <button class="btn btn-dark" type='button' :disabled='btnDisabled' v-on:click='create()'>
          {{createBtnLabel}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { roomRoutes } from '../router/routes'
import { G_USERNAME, A_CREATE_USER, A_CREATE_ROOM } from '../store/constants'
import username from '../components/input-username'

const availableMoods = [
  {
    key: 'any',
    label: 'No mood'
  },
  {
    key: 'happy',
    label: 'Happy'
  },
  {
    key: 'sad',
    label: 'Sad'
  }
]

export default {
  name: 'create',
  components: {
    username
  },
  data () {
    return {
      topMsg: 'Creating Room',

      roomIdLabel: 'Room Id *',
      roomIdPlaceholder: 'Something Unique',
      roomIdClass: 'item',
      roomSlug: this.randomString(),

      availableMoods: availableMoods,
      moodPlaceholder: 'What\'s the room\'s mood?',
      moodLabel: 'Mood',
      mood: 'any',

      createBtnLabel: 'Create'
    }
  },
  computed: {
    btnDisabled () {
      return !this.username || !this.roomSlug
    },
    username () {
      return this.$store.getters[G_USERNAME]
    },
    room () {
      return {
        slug: this.roomSlug,
        mood: this.mood
      }
    }
  },
  watch: {
    roomSlug () {
      this.roomIdClass = 'item'
    }
  },
  methods: {
    randomString () {
      return Math.random().toString(36).substring(2, 15)
    },
    create () {
      this.$store.dispatch(A_CREATE_USER, this.username)
        .then(() => {
          this.$store.dispatch(A_CREATE_ROOM, this.room)
            .then(() => { this.createSuccess() })
            .catch(() => { this.createFail() })
        })
        .catch(() => {})
    },
    createSuccess () {
      this.$router.push({ name: roomRoutes.name, params: { slug: this.roomSlug } })
    },
    createFail () {
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
