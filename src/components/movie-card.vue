<template>
  <div v-if="movie" class="card">
    <div class="card-body">
      <h5 class="card-title">
        <a :href='movie.url' target='_blank'>
          <span>{{movie.title}} ({{movie.year}})</span>
        </a>
      </h5>
      <p class="card-text">
        {{movie.description}}
      </p>
      <input-rating v-if="!readOnly" v-on:rated="onRate"/>
    </div>
  </div>
</template>

<script>
import inputRating from './input-rating'
import { A_RATE_MOVIE } from '../store/constants'

export default {
  name: 'movie-card',
  components: {
    inputRating
  },
  props: {
    movie: {
      type: Object,
      required: true
    },
    readOnly: {
      type: Boolean,
      default: true
    }
  },
  computed: {
  },
  methods: {
    onRate (score) {
      this.$store.dispatch(A_RATE_MOVIE, { movie: this.movie.id, score })
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
