import { atom } from "recoil";


export const numbers = atom({
  key: "numbers",
  default: 1,
});
export const datas = atom({
  key: "datas",
  default: [],
});
export const scores = atom({
  key: "scores",
  default: 0,
});