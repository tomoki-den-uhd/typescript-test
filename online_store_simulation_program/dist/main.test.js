import { Products } from "./product";
import { Users } from "./user";
export const product = new Products(1, "歯ブラシ", 300, 2);
export const user = new Users(1, "東京都", "田中");
test("userIDが1でuserAddressが東京でuserNameが田中の時", () => {
    const user = new Users(1, "東京都", "田中");
    expect(user.displayInfo()).toBe(`ユーザID:1\nユーザアドレス:東京都\nユーザネーム:田中`);
});
test("productIdが1でproductNameが歯ブラシでpriceが300でinventoryが2の時", () => {
    const product = new Products(1, "歯ブラシ", 300, 2);
    expect(product.displayInfo()).toBe(`商品ID:1\n消費名:歯ブラシ\n商品価格:300円\n商品在庫:2`);
});
