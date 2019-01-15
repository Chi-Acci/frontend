<template>
  <div class="container-fluid">
    <div class="row">
      <app-navigation/>
    </div>
    <div class="row">
        <router-view/>
    </div>
    <div class="row justify-content-center">
      <app-footer/>
    </div>
  </div>
</template>

<script>
import appNavigation from '@/layout/navigation'
import appFooter from '@/layout/footer'

export default {
  name: 'layout-main',
  components: {
    appNavigation,
    appFooter
  }
}
</script>

<style scoped>

</style>
