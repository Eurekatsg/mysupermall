<template>
  <div class="apply-bar">
    <!-- 我的购物车 -->
    <div class="message">
      <img src="~assets/img/profile/cart.svg" alt="" />
      <span>我的购物车</span>
    </div>

    <!-- 下载购物车app -->
    <div class="message">
      <img src="~assets/img/profile/shopping.svg" alt="" />
      <span>下载购物车app</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplyBar',
}
</script>

<style scoped>
.apply-bar {
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.message {
  height: 50px;
  line-height: 50px;
  flex: 1;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

.message span {
  flex-grow: 1;
  border-bottom: 2px solid rgba(238, 238, 238, 0.5);
}

.message:last-child span {
  border-bottom: none;
}

.message img {
  width: 25px;
  height: 25px;
  flex-shrink: 1;
  margin: auto 10px;
}
</style>