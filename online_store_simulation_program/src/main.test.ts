import { Products } from "./product";
import { Users } from "./user";
import { processPurchase } from "./purchase";

export const product = new Products(1, "歯ブラシ", 300, 2);
export const user = new Users(1, "東京都", "田中");

test(`userIDが1でuserAddressが東京でuserNameが田中の時で\nproductIdが1でproductNameが歯ブラシでpriceが300でinventoryが2の時`, () => {
  const user = new Users(1, "東京都", "田中");
  const product = new Products(1, "歯ブラシ", 300, 2);
  expect(user.displayInfo()).toBe(
    `ユーザID:1\nユーザアドレス:東京都\nユーザネーム:田中`
  );
  expect(product.displayInfo()).toBe(
    `商品ID:1\n消費名:歯ブラシ\n商品価格:300円\n商品在庫:2`
  );
  expect(processPurchase(user, product)).toBe(`1さんは商品1を購入しました`);
});

test("inventoryが0の時", () => {
  const user = new Users(295291058, "test@test.com", "田中");
  const product = new Products(171957, "cup", 32572891790, 0);
  expect(user.displayInfo()).toBe(
    `ユーザID:295291058\nユーザアドレス:test@test.com\nユーザネーム:田中`
  );
  expect(product.displayInfo()).toBe(
    `商品ID:171957\n消費名:cup\n商品価格:32572891790円\n商品在庫:0`
  );
  expect(processPurchase(user, product)).toBe(`在庫切れです`);
});
