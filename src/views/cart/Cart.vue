<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车<span v-if="length">({{ length }})</span>
      </div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list />

    <!-- 底部汇总 -->
    <chart-bottom-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import ChartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    ChartBottomBar,
  },
  computed: {
    ...mapGetters({ length: 'cartLength' }),
  },
}
</script>

<style scoped>
.cart {
  height: 100vh;
  width: 100vw;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: bold;
}
</style>
