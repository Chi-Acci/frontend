<template>
  <div class='card'>
    <a :href='movie.url' target='_blank'>
      <p>{{movie.title}} ({{movie.year}})</p>
    </a>
    <div class="container">
      <start-rating v-model="movie.rating"></start-rating>
    </div>
  </div>
</template>

<script>
import StartRating from '@/components/start-rating'

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default {
  name: 'MovieCard',
  components: { StartRating },
  props: {
    movie: {
      type: Object,
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
