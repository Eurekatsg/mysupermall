<template>
  <div class="cate-main">
    <div>
      <div class="main-class">
        <div class="class-item" v-for="(item, index) in showList" :key="index">
          <img :src="item.image" alt="" />
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSubCategory } from 'network/category'

export default {
  name: 'CategoryMain',
  data() {
    return {
      currentMaitKey: null,
      showList: [],
    }
  },
  methods: {
    async getSubCategory(maitKey) {
      const resSub = await getSubCategory(maitKey)
      if (resSub.success !== true) return console.log('获取分类详细数据失败') //获取失败的方法
      console.log('请求一次')
      this.showList = resSub.data.list
    },
  },
}
</script>

<style scoped lang='less'>
.main-class {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;

  width: 200px;
}

.class-item {
  padding: 20px 10px;

  flex: 1;
  width: 48%;

  text-align: center;
  position: relative;
  text-align: center;

  img {
    width: 80px;
    height: 80px;
  }

  span {
    font-size: 14px;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
  }
}
</style>