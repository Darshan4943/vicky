import React from "react";
import { useRecoilState } from "recoil";
import { scores } from "./Atom";
// import "./App.css";
const Score = () => {
  const [score, setscore] = useRecoilState(scores);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Your score is :- {score}</h1>
    </div>
  );
};

export default Score;
