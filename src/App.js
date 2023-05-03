import { useState } from "react";
import "./App.css";

export default function App() {
  let numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    "%",
    ".",
  ];
  // let operators=[,]
  const [value, setValue] = useState("");
  const [count, setcount] = useState(0);
  function handleClick(id) {
    if (value === "0") {
      setValue(numbers[id]);
    } else {
      if (count === 1) {
        setcount(0);
        setValue(numbers[id]);
        return;
      }
      setValue(value + numbers[id]);
    }
  }
  function handleres() {
    const result = eval(value);
    setValue(result);
    setcount(count + 1);
  }
  function handleClear() {
    setValue("");
  }
  return (
    <div className="container">
      <input value={value} />
      <div className="numbers">
        {numbers.map((num, index) => (
          <button key={index} onClick={() => handleClick(index)}>
            {num}
          </button>
        ))}
        <button onClick={handleres}>=</button>
        <button onClick={handleClear}>clear</button>
      </div>
    </div>
  );
}