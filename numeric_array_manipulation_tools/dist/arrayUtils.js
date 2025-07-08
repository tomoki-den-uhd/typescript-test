export const getSum = (arry) => {
    let sum = 0;
    for (let i = 0; i < arry.length; i++) {
        sum += arry[i];
    }
    return sum;
};
export const getAverage = (arry) => {
    return arry.length === 0 ? 0 : getSum(arry) / arry.length;
};
export const getMax = (arr) => {
    return Math.max(...arr);
};
export const getMin = (arr) => {
    return Math.min(...arr);
};
export const sortArray = (arr, order = "asc") => {
    const sorted = [...arr];
    return sorted.sort((a, b) => (order === "asc" ? a - b : b - a));
};
//maxとminの求め方
// const arr = [1, 3, 8, 7, 5];
// // Array.reduce に渡すコールバック関数
// const getMin = (a, b) => Math.min(a, b);
// const getMax = (a, b) => Math.max(a, b);
// // 実際に求める
// const min = arr.reduce(getMin);
// const max = arr.reduce(getMax);
// console.log(min, max); // 1 8
// arrayUtils.tsファイルを作成し、以下の関数を定義する
//   - 配列の合計値を計算する関数
//   - 配列の平均値を計算する関数
//   - 配列の最大値と最小値を返す関数
//   - 配列をソートする関数（昇順・降順）
// export const getSum = (arr: number[]): number =>
//     arr.reduce((acc, val) => acc + val, 0);
//   export const getAverage = (arr: number[]): number =>
//     arr.length === 0 ? 0 : getSum(arr) / arr.length;
//   export const getMaxMin = (arr: number[]): { max: number; min: number } => ({
//     max: Math.max(...arr),
//     min: Math.min(...arr),
//   });
//   export const sortArray = (arr: number[], order: 'asc' | 'desc' = 'asc'): number[] => {
//     const sorted = [...arr];
//     return sorted.sort((a, b) => (order === 'asc' ? a - b : b - a));
//   };
