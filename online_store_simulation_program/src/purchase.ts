import { Products } from "./product.js";
import { Users } from "./user.js";
// import { product } from "./main.js";
// import { user } from "./main.js";

//関数は、ユーザーと商品のIDを引数として受け取る
export let processPurchase = (user: Users, product: Products): string => {
  if (product.inventory === 0) {
    // return console.log(`在庫切れです`);
    return `在庫切れです`;
  } else {
    product.decreaseStock();
    // return console.log(
    //   `${user.userId}さんは商品${product.productId}を購入しました`
    // );
    return `${user.userId}さんは商品${product.productId}を購入しました`;
  }
};
