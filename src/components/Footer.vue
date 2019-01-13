<template>
  <footer class='footer'>
    <a :href='sourceUrl' class='orangered' target='_blank'>
      {{author}}
    </a>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      author: 'Chi & Acci Projects',
      sourceUrl: 'https://github.com/Chi-Acci'
    }
  }
}
</script>

<style scoped>
.orangered {
  color: orangered;
}

.footer {
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  text-align: center;
}
</style>
