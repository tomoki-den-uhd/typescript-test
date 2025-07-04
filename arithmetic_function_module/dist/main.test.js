import { add } from "./calculations";
import { subtraction } from "./calculations";
import { multiply } from "./calculations";
import { divide } from "./calculations";
test("2と3を足したら5が出力される", () => {
    expect(add(2, 3)).toBe(5);
});
test("98と33を引いたら65が出力される", () => {
    expect(subtraction(98, 33)).toBe(65);
});
test("40と30をかけたら1200が出力される", () => {
    expect(multiply(40, 30)).toBe(1200);
});
test("45と5を割ったら9が出力される", () => {
    expect(divide(45, 5)).toBe(9);
});
test("32と0を割ったら第二引数に0が渡されれていますが出力される", () => {
    expect(divide(32, 0)).toBe("第二引数に0が渡されれています");
});
