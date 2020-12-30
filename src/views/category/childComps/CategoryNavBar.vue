<template>
  <div>
    <nav-bar class="cate-nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'CategoryNavBar',
  components: {
    NavBar,
  },
}
</script>

<style scoped>
.cate-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: bold;
}
</style>