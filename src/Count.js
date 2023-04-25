import * as React from "react";
import "./Count.css";
import { countSlice } from "./Store";

import { useDispatch, useSelector } from "react-redux";
export default function Count() {

  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.count;
  });

  const btns = useSelector((state) => {
    return state.btns;
  });

  function handleClick(index) {
    dispatch(countSlice.actions.incCount(index));
  }
  return (
    <div>
      <h1>Counts</h1>
      <table>
        <thead>
          <th>Buttons</th>
          <th>Click-Counts</th>
        </thead>
        {count.map((count, index) => (
          <tr>
            <td>
              <button
                onClick={() => {
                  handleClick(index);
                }}
              >
                {btns[index]}
              </button>
            </td>
            <strong>
              <td>{count}</td>
            </strong>
          </tr>
        ))}
      </table>
    </div>
  );
}