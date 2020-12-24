<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart">
        <span class="btm-title" @click="addToCart">加入购物车</span>
      </div>
      <div class="buy"><span class="btm-title">立即购买</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart() {
      this.$emit('addCart')
    },
  },
}
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  background: #fff;

  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 100;

  display: flex;
  flex-direction: row;
  text-align: center;

  box-shadow: rgba(0, 0, 0, 0.15) 0 -0.01rem 0.06rem 0;
}

.bar-item {
  flex: 1;
  display: flex;
  align-items: center;
}

.bar-item > div {
  flex: 1;
}

.bar-left .text {
  font-size: 13px;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 3px;
  background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}

.bar-left .service {
  background-position: 0 -52px;
}

.bar-left .shop {
  background-position: 0 -98px;
}

.bar-right {
  font-size: 0.8rem;
  color: #fff;

  line-height: 40px;
  padding: 0;
}

.bar-right .cart {
  /* background-color: #ffe817; */
  /* color: #333; */
  background-image: linear-gradient(to right, #ffe817, #ff9402);
  border-radius: 20px 0 0 20px;
}

.bar-right .buy {
  /* background-color: #f69; */
  border-radius: 0 20px 20px 0;
  background-image: linear-gradient(to left, #f69, rgb(252, 69, 93));
}

.btm-title {
  font-weight: bold;
}
</style>