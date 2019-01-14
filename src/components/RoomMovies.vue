<template>
  <div>
    ROOM MOVIES

    <div v-for='movie in movieList' :key='movie.id' class="container">
      <movie-card :id='movie.id' :title='movie.title' :year='movie.year' :url='movie.url'/>
      <br>
    </div>
  </div>
</template>

<script>
import movieCard from '@/components/MovieCard'

const movieList = [
  {
    id: 1,
    title: 'The Dark Knight',
    year: 2007,
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 2,
    title: '12 Angry Man',
    year: 1962,
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 3,
    title: 'Jurassic Park',
    year: 1997,
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 4,
    title: 'Brave Heart',
    year: 1999,
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 5,
    title: 'Inception',
    year: 2005,
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 6,
    title: 'The GodFather I',
    year: 1976,
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 7,
    title: 'GoodFellas',
    year: 1987,
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 8,
    title: 'Night Crawler',
    year: 2014,
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 9,
    title: 'Coco',
    year: 2018,
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 10,
    title: '8 Mile',
    year: 1999,
    url: 'https://github.com/Chi-Acci'
  }
]

export default {
  name: 'RoomMovies',
  components: {
    movieCard
  },
  data () {
    return {
      topMsg: `Room ${this.$route.params.id}`,
      movieList: movieList
    }
  }
}
</script>

<style scoped>
  .container {
    min-width: 250px;
    max-width: 400px;
    height: 100px;
    margin: auto;
  }
</style>
