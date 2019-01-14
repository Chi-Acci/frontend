<template>
  <div class='card'>
    <a :href='url' target='_blank'>
      <p>{{title}} ({{year}})</p>
    </a>
    <p>{{stars}}</p>
  </div>
</template>

<script>
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default {
  name: 'MovieCard',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      safeRating: getRandomInt(1, 5)
    }
  },
  computed: {
    rating: {
      get () {
        return this.safeRating
      },
      set (value) {
        if (value > 0 && value < 6) {
          this.safeRating = value
        }
      }
    },
    stars () {
      let startsString = ''
      for (let i = 0; i < this.rating; i++) {
        startsString += '*'
      }
      return startsString
    }
  }
}
</script>

<style scoped>
  .card {
    border: solid;
    border-color: darkgreen;
    border-width: 3px;
  }
</style>
