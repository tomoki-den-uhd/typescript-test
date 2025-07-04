export const add = (x: number, y: number) => {
  return x + y;
};

export const subtraction = (x: number, y: number) => {
  return x - y;
};

export const multiply = (x: number, y: number) => {
  return x * y;
};

  export const divide = (x: number, y: number) => {
    if (y != 0) {
      return x / y;
    } else {
      return "第二引数に0が渡されれています"
    }
};


