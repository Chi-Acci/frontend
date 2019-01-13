<template>
  <div>
    <h3>{{topMsg}}</h3>

    <h4>
      {{roomIdLabel}}
      <input v-model='roomId' :placeholder='roomIdPlaceholder' :class='roomIdClass' required>
    </h4>

    <h4>
      {{moodLabel}}
      <select v-model="mood" class='item'>
        <option disabled :value='undefined'>{{moodPlaceholder}}</option>
        <option v-for="_mood in availableMoods" :value="_mood.key" :key="_mood.key">
          {{ _mood.label }}
        </option>
      </select>
    </h4>

    <div>
      <button class='item' type='button' :disabled='btnDisabled' v-on:click='create()'>
        {{createBtnLabel}}
      </button>
    </div>
  </div>
</template>

<script>
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
  data () {
    return {
      topMsg: 'Creating Room',

      roomIdLabel: 'Name *',
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
      return false
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
