"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtraction = exports.add = void 0;
const add = (x, y) => {
    return x + y;
};
exports.add = add;
const subtraction = (x, y) => {
    return x - y;
};
exports.subtraction = subtraction;
const multiply = (x, y) => {
    return x * y;
};
exports.multiply = multiply;
const divide = (x, y) => {
    if (y != 0) {
        return x / y;
    }
    else {
        return console.error('エラー');
    }
};
exports.divide = divide;
