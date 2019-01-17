<template>
  <div class="container">
    <br>
    <div v-for='movie in movieList' :key='movie.id' class="row justify-content-center">
      <div class="col-md-10">
        <movie-card :movie='movie'/>
      </div>
    </div>
  </div>
</template>

<script>
import movieCard from '@/components/movie-card'

const movieList = [
  {
    id: 1,
    title: 'The Dark Knight',
    year: 2012,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 2,
    title: '12 Angry Man',
    year: 1962,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 3,
    title: 'Jurassic Park',
    year: 1997,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 4,
    title: 'Brave Heart',
    year: 1999,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 5,
    title: 'Inception',
    year: 2005,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 6,
    title: 'The GodFather I',
    year: 1976,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 7,
    title: 'GoodFellas',
    year: 1987,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 8,
    title: 'Night Crawler',
    year: 2014,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 9,
    title: 'Coco',
    year: 2018,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 10,
    title: '8 Mile',
    year: 2002,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
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

</style>
