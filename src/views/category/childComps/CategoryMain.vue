<template>
  <div class="cate-main">
    <scroll class="content" ref="scroll">
      <div class="main-class">
        <div class="class-item" v-for="(item, index) in showList" :key="index">
          <img :src="item.image" alt="" @load="isLoad" />
          <span>{{ item.title }}</span>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import { getSubCategory } from 'network/category'

export default {
  name: 'CategoryMain',
  components: {
    Scroll,
  },
  data() {
    return {
      currentMaitKey: null,
      showList: [],
      lengthCounter: 0,
      mapList: null,
    }
  },
  created() {
    // 定义map类型的数据
    this.mapList = new Map()
  },
  watch: {
    currentMaitKey(oldVal, newVal) {
      this.showList = this.mapList.get(newVal)
    },
  },
  methods: {
    async getSubCategory(maitKey) {
      this.currentMaitKey = maitKey
      // 判断 是否已经有请求过
      if (this.mapList.get(maitKey)) return console.log('已有数据')

      const resSub = await getSubCategory(maitKey)
      if (resSub.success !== true) return console.log('获取分类详细数据失败') //获取失败的方法
      console.log('请求一次')
      this.showList = resSub.data.list
      this.mapList.set(maitKey, resSub.data.list)
    },
    // 刷新 scrolly
    isLoad() {
      this.lengthCounter++
      if (this.lengthCounter == this.showList.length) {
        this.$refs.scroll.refresh()
        // console.log('刷新了刷新了')
        this.lengthCounter = 0
      }
    },
  },
}
</script>

<style scoped lang='less'>
.cate-main {
  height: 100%;
  // overflow: hidden;
}

.content {
  height: 100%;
  overflow: hidden;
}

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