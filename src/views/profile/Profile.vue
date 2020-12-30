<template>
  <div class="wrapper">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  components: {},
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  height: 1000px;
}

.left {
  flex-shrink: 0;
  width: calc(60%);
  background-color: red;
}

.right {
  flex: 1 1 0%;
  width: 100%;
  background-color: blue;
}
</style>
