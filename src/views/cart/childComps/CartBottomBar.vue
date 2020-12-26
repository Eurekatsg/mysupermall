<template>
  <div class="bottom-bar">
    <div class="check-all" @click="checkAll">
      <check-btn class="check-btn" :is-checked="isSelectAll" />
      <span>全选</span>
    </div>

    <div class="submit">
      <span class="price">合计: ￥{{ totalPrice }}</span>
      <span class="btn">结算 ({{ checkLength }})</span>
    </div>
  </div>
</template>

<script>
import CheckBtn from 'components/content/checkBtn/CheckBtn'

import { mapGetters } from 'vuex'

export default {
  name: 'ChartBottomBar',
  components: {
    CheckBtn,
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList
        .filter(item => item.checked)
        .reduce((preValue, item) => preValue + item.price * item.count, 0)
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      return (
        this.cartList.length !== 0 && this.cartList.every(item => item.checked)
      )
    },
  },
  methods: {
    checkAll() {
      if (this.isSelectAll) {
        // 全部选中
        this.cartList.forEach(item => (item.checked = false))
      } else {
        // 全部不选中
        this.cartList.forEach(item => (item.checked = true))
      }
    },
  },
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;

  position: fixed;
  bottom: 49px;
  width: 100%;

  /* line-height: 40px; */

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.check-all {
  width: 55px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.check-btn {
  width: 20px;
  height: 20px;
}

.sumbit {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
}

.price {
  white-space: nowrap;
  font-size: 15px;
}

.btn {
  background-image: linear-gradient(90deg, #f69 0%, rgb(252, 69, 93) 98%);
  font-size: 15px;
  line-height: 15px;
  padding: 8px 18px;
  text-align: center;
  border-radius: 80px;
  color: #ffffff;
  white-space: nowrap;
  margin-left: 10px;
}
</style>