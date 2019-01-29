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
      contentMsg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut faucibus pulvinar elementum integer enim. Habitant morbi tristique senectus et netus. Mattis aliquam faucibus purus in massa tempor nec. Urna porttitor rhoncus dolor purus non enim praesent elementum. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Sed sed risus pretium quam vulputate dignissim suspendisse in. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Dapibus ultrices in iaculis nunc. Ipsum dolor sit amet consectetur adipiscing elit. Odio aenean sed adipiscing diam donec adipiscing tristique. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Molestie at elementum eu facilisis sed odio morbi. Amet risus nullam eget felis eget nunc lobortis. Enim neque volutpat ac tincidunt vitae. Amet venenatis urna cursus eget. Feugiat in fermentum posuere urna. Sed id semper risus in hendrerit gravida rutrum quisque non.'
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
