import { Books } from "./books";

test("タイトルが本1で著者が太郎で在庫が2の時", () => {
  const book = new Books("本1", "太郎", 2);
  expect(book.displayInfo()).toEqual(
    `この本のタイトルは本1で著者は太郎です \n 残りの在庫数は2`
  );
  expect(book.borrowBook()).toBe(`本1を貸出しました`);
});

test("タイトルが本5で著者が山田で在庫が0の時", () => {
  const book = new Books("本5", "山田", 0);
  expect(book.displayInfo()).toEqual(
    `この本のタイトルは本5で著者は山田です \n 残りの在庫数は0`
  );
  expect(book.borrowBook()).toBe(`在庫切れ`);
});
