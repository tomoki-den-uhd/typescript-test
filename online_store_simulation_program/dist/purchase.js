//関数は、ユーザーと商品のIDを引数として受け取る
export let processPurchase = (user, product) => {
    if (product.inventory === 0) {
        return console.log(`在庫切れです`);
    }
    else {
        product.decreaseStock();
        return console.log(`${user.userId}さんは商品${product.productId}を購入しました`);
    }
};
