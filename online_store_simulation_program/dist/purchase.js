import { product } from "./main.js";
import { user } from "./main.js";
//関数は、ユーザーと商品のIDを引数として受け取る
export let processPurchase = (userId, productId) => {
    if ((product.inventory = 0)) {
        return `在庫切れです`;
    }
    else {
        product.decreaseStock();
        return `${user.userId}さんは商品${product.productId}を購入しました`;
    }
};
