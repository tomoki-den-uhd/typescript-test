import { add } from "./calculations.js";
import { subtraction } from "./calculations.js";
import { multiply } from "./calculations.js";
import { divide } from "./calculations.js";

//ランダム関数を用いて第一引数と第二引数を決めてもらう
let randomInit1 = Math.floor(Math.random() * 101);
let randomInit2 = Math.floor(Math.random() * 101);

console.log(`今回使用される第1引数は:${randomInit1}です`);
console.log(`今回使用される第2引数は:${randomInit2}です`);

console.log(`加算関数の結果: ${add(randomInit1, randomInit2)}`);
console.log(`減算関数の結果: ${subtraction(randomInit1, randomInit2)}`);
console.log(`乗算関数の結果:${multiply(randomInit1, randomInit2)}`);
console.log(`除算関数の結果: ${divide(randomInit1, randomInit2)}`);
