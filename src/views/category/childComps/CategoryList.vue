<template>
  <div class="list-aside">
    <div
      class="list-item"
      v-for="(item, index) in list"
      :key="index"
      :class="{ active: currentIndex == index }"
      @click="itemClick(index)"
    >
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryList',
  props: {
    list: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tableClick', index)
    },
  },
}
</script>

<style scoped lang='less'>
.list-aside {
  width: 100px;
  height: calc(100vh - 44px - 49px);
  overflow: scroll;

  flex-shrink: 0;

  display: flex;
  background-color: #eee;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: flex-start;
  text-align: center;
}

.list-main {
  flex: 1 1 0%;
  background-color: green;
  height: 400px;

  display: flex;
  flex-direction: column;
}

.list-item {
  width: 100px;
  height: 50px;
  line-height: 50px;

  font-size: 15px;

  .title {
    position: relative;
    left: 0;
    padding: 0 5px;
    // transition: left 1s;
    transition: 0.5s left;
  }
}

.active {
  background-color: #fff;
  border-left: 4px solid var(--color-tint);

  .title {
    color: var(--color-tint);
    font-size: 16px;
    font-weight: bold;
    position: relative;
    left: 8px;
  }
}
</style>