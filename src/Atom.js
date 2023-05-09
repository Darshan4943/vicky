import { atom } from "recoil";

// const [number, setNumber] = useState(1);
//   const [data, setData] = useState([]);
//   const [score, setscore] = useState(0)

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
