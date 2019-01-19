<template>
  <div class="container">
    <div class="row justify-content-around">
      <div class="col-md-7">
        <div class="row justify-content-around">
            <button type="button" class="btn btn-outline-dark" v-on:click="rated(1)">1</button>
            <button type="button" class="btn btn-outline-dark" v-on:click="rated(2)">2</button>
            <button type="button" class="btn btn-outline-dark" v-on:click="rated(3)">3</button>
            <button type="button" class="btn btn-outline-dark" v-on:click="rated(4)">4</button>
            <button type="button" class="btn btn-outline-dark" v-on:click="rated(5)">5</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'inputRating',
  methods: {
    rated (rating) {
      this.$emit('rated', rating)
    }
  }
}
</script>

<style scoped>
button {
  margin: auto;
}

</style>
