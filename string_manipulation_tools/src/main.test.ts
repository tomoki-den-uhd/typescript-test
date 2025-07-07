import { getStringLength } from "./stringUtils";
import { getStringUpperCase } from "./stringUtils";
import { getStringLowerCase } from "./stringUtils";
import { getStringCount } from "./stringUtils";

test(`入力された文字列がgaiusehtaKJHGUIEGtJKETGEUksjgharehgの時`, () => {
  const input: string = "gaiusehtaKJHGUIEGtJKETGEUksjgharehg";
  expect(getStringLength(input)).toBe(35);
  expect(getStringUpperCase(input)).toBe("GAIUSEHTAKJHGUIEGTJKETGEUKSJGHAREHG");
  expect(getStringLowerCase(input)).toBe("gaiusehtakjhguiegtjketgeuksjgharehg");
});

test(`入力された特定の文字がgの時`, () => {
  const input: string = "gaiusehtaKJHGUIEGtJKETGEUksjgharehg";
  const char: string = "g";
  expect(getStringCount(input, char)).toBe(3);
});
// ユーザーの名前を取得
