import { add } from './calculations.js';
import { subtraction } from './calculations.js';
import { multiply } from './calculations.js';
import { divide } from './calculations.js';

console.log('テスト確認')

for (let i = 0; i <= Math.random(); i++) {
    console.log(`加算関数の結果: ${add(Math.random(),Math.random())}`);
    console.log(`減算関数の結果: ${subtraction(3,5)}`);
    console.log(`乗算関数の結果:${multiply(3,9)}`);
    console.log(`除算関数の結果: ${divide(4,0)}`);   
}

