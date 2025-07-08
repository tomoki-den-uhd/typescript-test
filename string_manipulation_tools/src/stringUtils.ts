export let getStringLength = (str: String): number => {
  return str.length;
  //   console.log();
};
export let getStringUpperCase = (str: String): string => {
  return str.toUpperCase();
};
export let getStringLowerCase = (str: String): string => {
  return str.toLowerCase();
};

export let getStringCount = (str: string, char: string): number => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
};
