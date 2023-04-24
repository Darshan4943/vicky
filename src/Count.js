import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "./Store";
import "./Count.css";

const Count = () => {
  const count = useSelector((state) => {
    return state.count;
  });

  const dispatch = useDispatch();

  function handleInc() {
    dispatch(counterSlice.actions.Increment());
  }
  function handleDec() {
    dispatch(counterSlice.actions.Decrement());
  }
  function handleReset() {
    dispatch(counterSlice.actions.Reset());
  }
  return (
    <div className="Box">
      <h1>Counter Application</h1>
      <h1>Count :- {count}</h1>
      <div className="btns">
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Count;