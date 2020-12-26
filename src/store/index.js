import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

// 1安装插件
Vue.use(Vuex);

// 2创建对象
const state = {
  cartList: []
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

// 3挂载到实例
export default store;
