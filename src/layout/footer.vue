<template>
  <div class="page-footer font-small blue pt-4">
    <div class="footer-copyright text-center py-3">
      {{copyRight}}
      <a :href='sourceUrl' target='_blank'>
        {{author}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-footer',
  data () {
    return {
      copyRight: '© 2018 Copyright:',
      author: 'Chi & Acci',
      sourceUrl: 'https://github.com/Chi-Acci'
    }
  }
}
</script>

<style scoped>
a {
  color: yellow;
}
</style>
