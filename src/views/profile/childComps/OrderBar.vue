<template>
  <div class="order-bar">
    <!-- 余额 -->
    <div class="info-bar">
      <div class="info-number">
        <span>{{ banlance }}</span
        >元
      </div>
      <div class="info-msg">我的余额</div>
    </div>
    <!-- 优惠 -->
    <div class="info-bar">
      <div class="info-number">
        <span>{{ discount }}</span
        >个
      </div>
      <div class="info-msg">我的优惠</div>
    </div>
    <!-- 积分 -->
    <div class="info-bar">
      <div class="info-number">
        <span>{{ point }}</span
        >分
      </div>
      <div class="info-msg">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderBar',
  data() {
    return {
      banlance: 0.01,
      discount: 0,
      point: 0,
    }
  },
}
</script>

<style scoped>
.order-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: nowrap;
  height: 100px;
  border-bottom: 15px solid #eee;
  width: 100vw;

  font-size: 16px;
}

.info-bar {
  width: 30%;
  border-right: 2px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info-bar:last-child {
  border-right: none;
}

.info-number {
  padding-bottom: 5px;
}

.info-number span {
  font-size: 28px;
  color: var(--color-tint);
  font-weight: bold;
}
</style>