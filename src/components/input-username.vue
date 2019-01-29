<template>

  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">{{label}}</span>
    </div>
    <input
      type="text"
      v-model='username'
      class="form-control"
      :placeholder="placeholder"
      :disabled="disabled"
      required>
    <!--- :class='usernameClass'-->
  </div>

</template>

<script>

export default {
  name: 'input-username',
  data () {
    return {
      label: 'Username',
      placeholder: 'Who are you?',
      debounceTimeout: undefined,
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
      clearTimeout(this.debounceTimeout)
      this.debounceTimeout = setTimeout(() => {
        this.disabled = true
        this.$store.commit('M_USERNAME', value)
        this.checkUsername()
        this.disabled = false
      }, this.debounceTimer)
    },
    checkUsername () {
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
