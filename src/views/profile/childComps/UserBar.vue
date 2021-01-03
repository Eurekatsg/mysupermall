<template>
  <div class="user-bar">
    <!-- 信息 -->
    <div class="user-info">
      <div class="user-img">
        <img src="~assets/img/profile/avatar.svg" alt="" />
      </div>
      <div class="info-name">
        <div><span>登陆</span>/<span>注册</span></div>
        <div class="phone-info">
          <img src="~assets/img/profile/phone.svg" alt="" />
          <span>暂无绑定手机号</span>
        </div>
      </div>
    </div>
    <!-- 返回按钮 -->
    <div class="back-btn">></div>
  </div>
</template>

<script>
export default {
  name: 'UserBar',
}
</script>

<style scoped lang='less'>
.user-bar {
  height: 130px;
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
  padding: 5px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-img {
  width: 80px;
  height: 80px;
  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
}

.user-info {
  width: auto;
  display: flex;
  align-items: center;

  .info-name {
    padding-left: 10px;
  }

  .phone-info {
    font-size: 15px;
    display: flex;

    span {
      line-height: 25px;
      height: 25px;
    }

    img {
      width: 25px;
      height: 25px;
    }
  }
}

.back-btn {
  img {
    width: 30px;
    height: 30px;
  }
}
</style>