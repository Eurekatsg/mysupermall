<template>
  <div>
    <div>css 动画测试</div>

    <div class="img"></div>
    <div
      axisdirection="vertical"
      horizontal="false"
      showshorizontalscrollindicator="false"
      showsverticalscrollindicator="false"
      scrolleventthrottle="50"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'CsssAnim',
}
</script>

<style scoped>
.img {
  height: 15px;
  width: 15px;
  background-color: yellow;

  transition: 1s height, 1s 1s width;
}

.img:hover {
  height: 450px;
  width: 450px;
  background-color: blue;
}

.img-list {
}
</style>