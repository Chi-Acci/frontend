<template>
  <div>
    ROOM RESULTS

    <ul>
      <li v-for="movie in results" :key="movie.id">
        {{ movie.title}}
      </li>
    </ul>
  </div>
</template>

<script>
const results = [
  {
    id: 11,
    title: 'Snowpiercer',
    year: 2013,
    url: 'https://github.com/Chi-Acci'
  },
  {
    id: 12,
    title: 'The Prestige',
    year: 2004,
    url: 'https://github.com/Chi-Acci'
  }
]

export default {
  name: 'RoomResults',
  data () {
    return {
      results: results
    }
  }
}
</script>

<style scoped>

</style>
