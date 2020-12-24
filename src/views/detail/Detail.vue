<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="navbar" />
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="param" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <detail-recommend
        ref="recommend"
        :recommend="recommend"
        @loedingCmp="loedingCmp"
      />
    </scroll>
    <detail-bottom-bar @addCart="addToCart" />
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailRecommend from './childComps/DetailRecommend'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'

import { debounce } from 'common/utils'
import { backTopMixin } from 'common/mixin'
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from 'network/detail'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommend,
    DetailBottomBar,
    Scroll,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    }
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1.获取顶部的图片轮播数据
      // console.log(res)
      const data = res.result
      this.topImages = data.itemInfo.topImages

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      )

      // 6 评论的信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0]
      }
    })

    // 3 请求推荐数据
    getRecommend().then(res => {
      // console.log(res)
      this.recommend = res.data.list
    })

    // 给getThemeTopY赋值(对给this.themeTopYs赋值的操作进行防抖)
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log(this.themeTopYs)
    }, 100)

    this.$nextTick(() => {
      // console.log('nextTick')
    })
  },
  mounted() {
    // console.log('mounted')
    // let arr = [1, 2, 3]
    // let newArr = arr.filter(res => res > 1)
    // console.log(newArr)
  },
  methods: {
    // 监听商品详情图片
    imageLoad() {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
      // console.log('-------')
    },
    // 监听推荐的图片
    loedingCmp() {
      this.$refs.scroll.refresh()
    },
    // 点击navBar后 滚到相应位置
    titleClick(index) {
      // console.log(index)
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    // 监听 滚动的位置
    contentScroll(position) {
      // console.log(position)
      // 获取Y值
      const positionY = -position.y

      // positionY 在 0 到 7938 之间，index = 0
      // positionY 在 7938 到 9120 之间，index = 1
      // positionY 在 9120 到 9452 之间，index = 2
      // positionY 大于 9452 之间，index = 3

      // 将对应的index赋值给currentIndex
      // let newArr = this.themeTopYs.filter(res => res < positionY)
      // this.$refs.navbar.currentIndex = newArr.length - 1

      let length = this.themeTopYs.length
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i
          this.$refs.navbar.currentIndex = this.currentIndex
          // console.log(this.currentIndex)
        }
      }

      // 是否显示回到顶部
      this.ShowBackTop(position)
    },
    //
    addToCart() {
      // 1 获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // console.log(product)
      // 2 将商品添加到购物车里
      this.$store.commit('addCart', product)
    },
  },
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
}
</style>
