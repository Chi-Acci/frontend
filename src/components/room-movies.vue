<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-if="movie" class="col-md-10">
        <movie-card :movie="movie" :read-only="false"/>
      </div>
      <div v-else class="alert alert-dark" role="alert">
        {{finishedMsg}}
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
.alert {
  background-color: gray;
  color: white;
}
</style>
