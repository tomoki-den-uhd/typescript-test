import { getStringLength } from "./stringUtils.js";
import { getStringUpperCase } from "./stringUtils.js";
import { getStringLowerCase } from "./stringUtils.js";
import { getStringCount } from "./stringUtils.js";
// ユーザーの名前を取得
const input = window.prompt("文字列を入力してください:");
if (input !== null) {
    console.log(`文字列の長さ: ${getStringLength(input)}`);
    console.log(`大文字変換: ${getStringUpperCase(input)}`);
    console.log(`小文字変換: ${getStringLowerCase(input)}`);
    const char = window.prompt("出現回数を数えたい文字を1つ入力してください:");
    if (char !== null && char.length === 1) {
        console.log(`「${char}」の出現回数: ${getStringCount(input, char)}`);
    }
    else if (char !== null) {
        console.log("1文字を入力してください。");
    }
}
