<template>
  <div class="container">
    <h4>{{topMsg}}</h4>
    <div class="content">{{contentMsg}}</div>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      topMsg: 'How does it work?',
      contentMsg: 'Lorem Ipsum is simply dummy \
                  text of the printing and typesetting industry. \
                  Lorem Ipsum has been the industry\'s standard dummy \
                  text ever since the 1500s, when an unknown printer \
                  took a galley of type and scrambled it to make a \
                  type specimen book. It has survived not only five centuries, \
                  but also the leap into electronic typesetting, \
                  remaining essentially unchanged. It was popularised in the 1960s \
                  with the release of Letraset sheets containing Lorem Ipsum passages, \
                  and more recently with desktop publishing software like Aldus PageMaker \
                  including versions of Lorem Ipsum.'
    }
  }
}
</script>

<style>
.content {
  margin: auto;
  max-width: 400px;
}
</style>
