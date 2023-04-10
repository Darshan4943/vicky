import React, { useState } from "react";

const Table3 = () => {
  const [greet, setGreet] = useState("");
  const greetings = [
    "Good morning",
    "Hello",
    "Hi there",
    "Good Evening",
    "Good Night",
    "Happy Birthday",
    "Hii !!",
    "Good Afternoon",
    "Happy New Year",
    "Have a great Day",
    "Namaste",
  ];

  let res;
  function handleClick() {
    let num = Math.floor(Math.random() * 10) + 1;
    
    res = greetings[num];
    setGreet(res);
  }
  return (
    <div style={{  textAlign: "center" }}>
      <h1>Greetings !! </h1>
      <h1 style={{ color: "tomato" }}>{greet}</h1>
      <button onClick={handleClick}>Toggle Greet </button>
    </div>
  );
};

export default Table3;