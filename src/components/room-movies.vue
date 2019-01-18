<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-if="movie" class="col-md-10">
        <movie-card v-if="movie"/>

        <div v-else class="alert alert-success" role="alert">
          {{finishedMsg}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movieCard from '@/components/movie-card'

export default {
  name: 'RoomMovies',
  components: {
    movieCard
  },
  data () {
    return {
      finishedMsg: 'You are done here!'
    }
  },
  computed: {
    movie () {
      return this.$store.getters.G_NEXT_MOVIE
    }
  }
}
</script>

<style scoped>

</style>
