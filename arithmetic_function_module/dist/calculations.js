export const add = (x, y) => {
    return x + y;
};
export const subtraction = (x, y) => {
    return x - y;
};
export const multiply = (x, y) => {
    return x * y;
};
export const divide = (x, y) => {
    if (y != 0) {
        return x / y;
    }
    else {
        return console.error('第二引数に0が渡されれています');
    }
};
