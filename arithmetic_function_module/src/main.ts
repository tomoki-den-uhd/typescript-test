import { add } from './calculations.js';
import { subtraction } from './calculations.js';
import { multiply } from './calculations.js';
import { divide } from './calculations.js';

//ランダム関数を用いて第一引数と第二引数を決める
function getRandomInit(min: number, max:number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomValue1 = getRandomInit(0,100);
const randomValue2 = getRandomInit(0,100);

console.log(`今回使用される第1引数は:${randomValue1}です`)
console.log(`今回使用される第2引数は:${randomValue2}です`)

//0から10のランダムの数値の間、計算結果をループさせる
// const randomValeuLoop = getRandomInit(1,10);

// console.log(`今回は${randomValeuLoop}回計算します`)
// for (let i = 0; i <= randomValeuLoop; i++){
    
// };

console.log(`加算関数の結果: ${add(randomValue1, randomValue2)}`);
console.log(`減算関数の結果: ${subtraction(3,5)}`);
console.log(`乗算関数の結果:${multiply(3,9)}`);
console.log(`除算関数の結果: ${divide(4,0)}`);



