import { ADD_COUNTER, ADD_TO_CART } from "./mutation-types";

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 查找数组中是否已有该商品
      let oldProduct = context.state.cartList.find(
        item => item.iid === payload.iid
      );

      console.log("添加到购物车");
      // 2 判断oldProduct
      if (oldProduct) {
        // 数量+1
        // oldProduct.count += 1;
        context.commit(ADD_COUNTER, oldProduct);
        resolve("当前的商品数量+1");
      } else {
        //添加商品
        payload.count = 1;
        // state.cartList.push(payload);
        context.commit(ADD_TO_CART, payload);
        resolve("添加了新的商品");
      }
    });
  }
};
