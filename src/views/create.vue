<template>
  <div class="container">
    <h4>{{topMsg}}</h4>

    <br>

    <div class="row justify-content-center">
      <div class="col-md-8">
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
import username from '@/components/username'

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
      roomId: this.randomString(),

      availableMoods: availableMoods,
      moodPlaceholder: 'What\'s the room\'s mood?',
      moodLabel: 'Mood',
      mood: 'any',

      createBtnLabel: 'Create',
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
    randomString () {
      return Math.random().toString(36).substring(2, 15)
    },
    create () {
      console.log('POST /create:')
      console.log('username:', this.username)
      console.log('room name:', this.roomId)
      console.log('mood:', this.mood)
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
