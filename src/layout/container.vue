<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <app-navigation/>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <router-view/>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <app-footer/>
      </div>
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
