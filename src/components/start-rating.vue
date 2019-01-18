<template>
  <div class="container">
    <form class="rating">
      <label>
        <input type="radio" name="stars" v-on:input="update(1)" />
        <span class="icon">★</span>
      </label>
      <label>
        <input type="radio" name="stars" v-on:input="update(2)" />
        <span class="icon">★</span>
        <span class="icon">★</span>
      </label>
      <label>
        <input type="radio" name="stars" :value="value" v-on:input="$emit('input', 3)" />
        <span class="icon">★</span>
        <span class="icon">★</span>
        <span class="icon">★</span>
      </label>
      <label>
        <input type="radio" name="stars" :value="value" v-on:input="$emit('input', 4)" />
        <span class="icon">★</span>
        <span class="icon">★</span>
        <span class="icon">★</span>
        <span class="icon">★</span>
      </label>
      <label>
        <input type="radio" name="stars" :value="value" v-on:input="$emit('input', 5)" />
        <span class="icon">★</span>
        <span class="icon">★</span>
        <span class="icon">★</span>
        <span class="icon">★</span>
        <span class="icon">★</span>
      </label>
    </form>
  </div>
</template>

<script>

export default {
  name: 'startRating',
  props: ['value', 'forceReset'],
  methods: {
    update (v) {
      this.$emit('input', v)
    },
    reset () {
      console.log('starts reset')
      this.$forceUpdate()
    }
  },
  watch: {
    forceReset (newValue) {
      if (newValue) {
        this.reset()
      }
    }
  }
}
</script>

<style scoped>
  .rating {
    display: inline-block;
    position: relative;
    height: 50px;
    line-height: 50px;
    font-size: 40px;
  }

  .rating label {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    cursor: pointer;
  }

  .rating label:last-child {
    position: static;
  }

  .rating label:nth-child(1) {
    z-index: 5;
  }

  .rating label:nth-child(2) {
    z-index: 4;
  }

  .rating label:nth-child(3) {
    z-index: 3;
  }

  .rating label:nth-child(4) {
    z-index: 2;
  }

  .rating label:nth-child(5) {
    z-index: 1;
  }

  .rating label input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .rating label .icon {
    float: left;
    color: transparent;
  }

  .rating label:last-child .icon {
    color: black;
  }

  .rating:not(:hover) label input:checked ~ .icon,
  .rating:hover label:hover input ~ .icon {
    color: yellow;
  }

  .rating label input:focus:not(:checked) ~ .icon:last-child {
    color: black;
  }
</style>
