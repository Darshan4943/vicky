import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./register.module.css";

const StudentResgiter = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [student, setstudent] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("student")) {
      setstudent(JSON.parse(localStorage.getItem("student")));
    }
  }, []);
  function handleRegister() {
    let obj = {
      name: name,
      email: email,
      password: password,
    };
    setstudent((prev) => [...prev, obj]);
    localStorage.setItem("student", JSON.stringify([...student, obj]));
    // let res = admin;
    // localStorage.setItem("admin", JSON.stringify(res));
  }
  function handleSubmit(e) {
    e.preventDefault();
    // localStorage.setItem("admin", JSON.stringify(admin));
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setname(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <Link to="/studentLogin">
          <button type="submit" onClick={handleRegister}>
            Register
          </button>
        </Link>
      </form>
    </div>
  );
};

export default StudentResgiter;
