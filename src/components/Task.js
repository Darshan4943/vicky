import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { todoSlice } from "../Slic";
import styles from "./Task.module.css";

const Task = () => {
  const [text, setText] = useState("");
  const [isUpdate, setisUpdate] = useState(false);
  const [updateIndex, setupdateIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/contact");
    }
  });

  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  function handleTodoAdd() {
    let newtodo = [...todo, text];
    dispatch(todoSlice.actions.addTodo(newtodo));
    setText("");
  }

  function handleTodoDelete(index) {
    dispatch(todoSlice.actions.deleteTodo(index));
  }

  function handleUpdateTodo(index) {
    setText(todo[index]);
    setisUpdate(true);
    setupdateIndex(index);
  }

  function handleTodoSave() {
    let newtodo = [...todo];
    newtodo[updateIndex] = text;
    dispatch(todoSlice.actions.updateTodo(newtodo));
    setText("");
    setisUpdate(false);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Your Todo's And Manage Them</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
        placeholder="Enter Your Todo"
      />
      {!isUpdate ? (
        <button className={styles.button} onClick={handleTodoAdd}>
          Add
        </button>
      ) : (
        <button className={styles.button} onClick={handleTodoSave}>
          Save
        </button>
      )}
      {todo &&
        todo.map((item, index) => (
          <div key={index} className={styles.todoItem}>
            <p className={styles.todoText}>{item}</p>
            <div className={styles.todoActions}>
              <button onClick={() => handleUpdateTodo(index)}>Update</button>
              <button onClick={() => handleTodoDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Task;
