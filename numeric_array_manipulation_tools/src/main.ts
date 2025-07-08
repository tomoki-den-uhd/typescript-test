import { getSum } from "./arrayUtils.js";
import { getAverage } from "./arrayUtils.js";
import { getMax } from "./arrayUtils.js";
import { getMin } from "./arrayUtils.js";
import { sortArray } from "./arrayUtils.js";

let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`合計値:${getSum(array)}`);
console.log(`平均値:${getAverage(array)}`);
console.log(`最大値:${getMax(array)}`);
console.log(`最小値:${getMin(array)}`);
console.log(`昇順:${sortArray(array, "asc")}`);
console.log(`降順:${sortArray(array, "desc")}`);
