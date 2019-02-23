<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-10">
        <layout-navigation/>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <router-view/>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10">
        <layout-footer/>
      </div>
    </div>
  </div>
</template>

<script>
import layoutNavigation from './navigation'
import layoutFooter from './footer'

export default {
  name: 'layout-main-container',
  components: {
    layoutNavigation,
    layoutFooter
  }
}
</script>

<style scoped>

</style>
