import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataSlice } from "../Slic";
import styles from "./Home.module.css";

const Home = () => {
  const data = useSelector((state) => {
    return state.data;
  });
  const dispatch = useDispatch();

  function handleClear() {
    const confirmation = window.confirm(
      "Are you sure you want to remove data?"
    );

    if (confirmation) {
      localStorage.removeItem("user");

      dispatch(dataSlice.actions.addData(null));
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Home page</h1>

      {data && (
        <div className={styles.data}>
          <h1 className={styles.title}>Now you can also visit Task page</h1>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>FirstName:</span>
            <span className={styles.dataValue}>{data.name}</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>LastName:</span>
            <span className={styles.dataValue}>{data.last}</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>Email:</span>
            <span className={styles.dataValue}>{data.email}</span>
          </div>
          <div className={styles.dataItem}>
            <span className={styles.dataLabel}>Phone-Number:</span>
            <span className={styles.dataValue}>{data.num}</span>
          </div>
          <button className={styles.button} onClick={handleClear}>
            Remove Data
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
