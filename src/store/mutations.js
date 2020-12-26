import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types";

export default {
  // mutations 唯一的目的就是修改state中的状态
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = false;
    state.cartList.push(payload);
  }
};
