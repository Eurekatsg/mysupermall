<template>
  <div class="option-bar">
    <!-- 我的消息 -->
    <div class="message">
      <img src="~assets/img/profile/message.svg" alt="" />
      <span>我的消息</span>
    </div>
    <!-- 积分商城 -->
    <div class="message">
      <img src="~assets/img/profile/pointer.svg" alt="" />
      <span>积分商城 </span>
    </div>
    <!-- 会员卡 -->
    <div class="message">
      <img src="~assets/img/profile/vip.svg" alt="" />
      <span>会员卡</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionBar',
}
</script>

<style scoped>
.option-bar {
  border-bottom: 15px solid #eee;
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