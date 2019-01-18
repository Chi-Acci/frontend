<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">
        <a :href='movie.url' target='_blank'>
          <span>{{movie.title}} ({{movie.year}})</span>
        </a>
      </h5>
      <p class="card-text">
        {{movie.description}}
      </p>
      <start-rating v-model="rating" :force-reset="forceReset"></start-rating>
      {{rating}}
    </div>
  </div>
</template>

<script>
import StartRating from '@/components/start-rating'
import { A_RATE_MOVIE } from '../store/constants'

export default {
  name: 'MovieCard',
  components: { StartRating },
  data () {
    return {
      rating: null,
      forceReset: 0
    }
  },
  computed: {
    movie () {
      return this.$store.getters.G_NEXT_MOVIE
    }
  },
  watch: {
    rating (newValue) {
      if (newValue !== null) {
        console.log(newValue)
        this.$store.dispatch(A_RATE_MOVIE, { id: this.movie.id, rating: newValue })
        this.rating = null
        this.forceReset += 1
      }
    }
  }
}
</script>

<style scoped>
  .card {
    background-color: gray;
    color: white;
  }

  a {
    color: yellow;
  }
</style>
