<template>
  <h4>
    {{usernameLabel}}
    <input v-model='username' :placeholder='usernamePlaceholder' :class='usernameClass' :disabled="disabled" required>
  </h4>
</template>

<script>

export default {
  name: 'username',
  data () {
    return {
      usernameLabel: 'Username',
      usernamePlaceholder: 'Who are you?',
      usernameClass: 'item',
      usernameDebounceTimeout: undefined,
      debounceTimer: 700, // ms
      disabled: false
    }
  },
  computed: {
    username: {
      get () {
        return this.$store.getters.G_USERNAME
      },
      set (value) {
        this.debounceUsernameSet(value)
      }
    }
  },
  methods: {
    randomString () {
      return Math.random().toString(36).substring(2, 15)
    },
    debounceUsernameSet (value) {
      this.usernameClass = 'item'
      clearTimeout(this.usernameDebounceTimeout)
      this.usernameDebounceTimeout = setTimeout(() => {
        this.disabled = true
        this.$store.commit('M_USERNAME', value)
        this.checkUsername()
        this.disabled = false
      }, this.debounceTimer)
    },
    checkUsername () {
      console.log('GET /user:')
      if (this.username !== 'abcd') {
        this.usernameClass = 'item valid'
      } else {
        this.usernameClass = 'item invalid'
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

  .valid {
    border-color: green;
  }

  .invalid {
    border-color: red;
  }
</style>
