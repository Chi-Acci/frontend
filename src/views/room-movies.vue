<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-if="movie" class="col-10">
        <movie-card :movie="movie" :read-only="false"/>
      </div>
      <div v-else class="alert alert-dark" role="alert">
        {{finishedMsg}}
      </div>
    </div>
  </div>
</template>

<script>
import { G_NEXT_MOVIE, A_WS_SEND_UPDATE } from '../store/constants'
import movieCard from '../components/movie-card'

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
      return this.$store.getters[G_NEXT_MOVIE]
    }
  },
  watch: {
    movie: 'serverUpdate'
  },
  methods: {
    serverUpdate (newValue) {
      if (newValue === undefined) {
        this.$store.dispatch(A_WS_SEND_UPDATE)
      }
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
