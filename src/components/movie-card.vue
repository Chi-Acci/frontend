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
      <start-rating v-model="movie.rating"></start-rating>
    </div>
  </div>
</template>

<script>
import StartRating from '@/components/start-rating'

export default {
  name: 'MovieCard',
  components: { StartRating },
  props: {
    movie: {
      type: Object,
      required: true
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
