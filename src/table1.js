import React, { useState } from "react";

const Table1 = () => {
  const [randomNum, setrandomNum] = useState(1);
  const [table, settable] = useState([]);
  function handleClick() {
    const number = Math.floor(Math.random() * 10) + 1;
    setrandomNum(number);
    let res = [];
    for (let i = 1; i <= 10; i++) {
      res[i] = randomNum * i;
    }
    settable(res);
  }
  return (
    <div>
      <h1>Random Number :- {randomNum}</h1>
      <button onClick={handleClick}>Get a Table</button>
      {table.map((item, index) => (
        <li key={index} style={{ color: "tomato" }}>
          {item}
        </li>
      ))}
    </div>
  );
};

export default Table1;