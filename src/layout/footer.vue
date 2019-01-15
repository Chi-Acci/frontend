<template>
  <footer class="page-footer font-small blue pt-4">
    <div class="footer-copyright text-center py-3">
      © 2018 Copyright:
      <a :href='sourceUrl' class='orangered' target='_blank'>
        {{author}}
      </a>
    </div>
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
    color: yellow;
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
