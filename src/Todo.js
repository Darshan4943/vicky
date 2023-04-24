import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoSlice } from "./Store";
import "./Todo.css";

export default function Todo() {
  const [dummy, setdummy] = useState("");
  const dispatch = useDispatch();

  const todo = useSelector((state) => {
    return state.todo;
  });
  const [data, setData] = useState([]);

  //   let res = "";
  function handleChange(e) {
    setdummy(e.target.value);
  }
  function handleAdd() {
    let obj = {
      name: dummy,
      iscomplete: false,
    };
    const newData = [...data, obj];
    setData(newData);
    setdummy("");
  }

  useEffect(() => {
    dispatch(TodoSlice.actions.saveTodo(data));
  }, [data, dispatch]);

  function handleComplete(index) {
    dispatch(TodoSlice.actions.completedTodo(index));
  }

  function handleDelete(index) { 
    dispatch(TodoSlice.actions.deleteTodo(index));
    let newdata = data.filter((item, id) => id !== index);
    setData(newdata);
  }
  return (
    <div className="container">
      <h1>Todo Application</h1>
      <div className="input">
      <input value={dummy} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      </div>
      <div className="main">
        {todo.map((item, index) => (
          <div key={index} className="box">
            <li
              style={{
                textDecoration: item.iscomplete ? "line-through" : "none",
              }}
            >
              {item.name}
            </li>
            <div className="box2">
              <button
                onClick={() => {
                  handleComplete(index);
                }}
              >
                Completed
              </button>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}