<template>
  <div class="profile">
    <!-- 导航页 -->
    <nav-bar class="nav-bar">
      <div slot="center">我的</div>
    </nav-bar>
    <scroll class="content">
      <!-- 头像区 -->
      <user-bar />
      <!-- 金额区 -->
      <order-bar />

      <!-- 消息区 -->
      <option-bar />

      <!-- app区 -->
      <apply-bar />
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import UserBar from './childComps/UserBar'
import OrderBar from './childComps/OrderBar'
import OptionBar from './childComps/OpitionBar'
import ApplyBar from './childComps/ApplyBar'

import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'Profile',
  components: {
    NavBar,
    UserBar,
    OrderBar,
    OptionBar,
    ApplyBar,

    Scroll,
  },
}
</script>

<style scoped>
.profile {
  height: 100vh;
}

.content {
  height: calc(100% - 44px - 49px);
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: bold;
}
</style>