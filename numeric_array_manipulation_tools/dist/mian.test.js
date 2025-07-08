import { getSum } from "./arrayUtils";
import { getAverage } from "./arrayUtils";
import { getMax } from "./arrayUtils";
import { getMin } from "./arrayUtils";
import { sortArray } from "./arrayUtils";
test(`配列が19487,185,29387891,9729の時`, () => {
    const array = [19487, 185, 29387891, 9729];
    expect(getSum(array)).toBe(29417292);
    expect(getAverage(array)).toBe(7354323);
    expect(getMax(array)).toBe(29387891);
    expect(getMin(array)).toBe(185);
    expect(sortArray(array, "asc")).toEqual([185, 9729, 19487, 29387891]);
    expect(sortArray(array, "desc")).toEqual([29387891, 19487, 9729, 185]);
});
