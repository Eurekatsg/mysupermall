<template>
  <div class="category">
    <!-- 导航 -->
    <category-nav-bar />

    <!-- 分类列表 -->
    <div class="content">
      <category-list :list="list" @tableClick="tableClick" class="aside" />
      <category-main class="main" ref="main" />
    </div>
  </div>
</template>

<script>
import CategoryNavBar from './childComps/CategoryNavBar'
import CategoryList from './childComps/CategoryList'
import CategoryMain from './childComps/CategoryMain'

import { getCategory } from 'network/category'

export default {
  name: 'Category',
  data() {
    return {
      list: [],
      currentIndex: 0,
    }
  },
  components: {
    CategoryNavBar,
    CategoryList,
    CategoryMain,
  },
  computed: {},
  created() {
    // 获取分类列表数据
    this.getCategory()
  },
  mounted() {},
  methods: {
    tableClick(index) {
      this.currentIndex = index
      // console.log(this.list[index].maitKey)
      this.$refs.main.getSubCategory(this.list[index].maitKey)
    },

    /* 
      网络请求相关的方法
    */
    async getCategory() {
      // 获取分类列表数据
      const res = await getCategory()
      if (res.success !== true) return console.log('获取分类列表数据失败') // 获取失败的方法
      this.list = res.data.category.list

      this.tableClick(0)
    },
  },
}
</script>

<style scoped>
.category {
  height: 100vh;
}

.content {
  height: calc(100% - 44px - 49px);
  display: flex;
  flex-direction: row;
}

.aside {
  flex-shrink: 0;
  width: 100px;
}

.main {
  flex: 1 1 0%;
}
</style>
