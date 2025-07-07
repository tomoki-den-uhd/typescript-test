export let getStringLength = (str) => {
    return str.length;
    //   console.log();
};
export let getStringUpperCase = (str) => {
    return str.toUpperCase();
};
export let getStringLowerCase = (str) => {
    return str.toLowerCase();
};
export let getStringCount = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
};
