import Vue from "vue";
import Vuex from "vuex";

// 1安装插件
Vue.use(Vuex);

// 2创建对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      // payload添加新的商品
      // let oldProduct = null;
      // for (let item of state.cartList) {
      //   if (item.iid === payload.iid) {
      //     oldProduct = item;
      //   }
      // }
      // 查找数组中是否已有该商品
      let oldProduct = state.cartList.find(item => item.iid === payload.iid);

      // 2 判断oldProduct
      if (oldProduct) {
        oldProduct.count += 1;
      } else {
        payload.count = 1;
        state.cartList.push(payload);
      }

      console.log("添加到购物车");
    }
  }
});

// 3挂载到实例
export default store;
