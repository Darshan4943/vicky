import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Student.module.css";

const StudentLogin = () => {
  const [student, setstudent] = useState([]);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setstudent(JSON.parse(localStorage.getItem("student")));
    // console.log(admin);
  }, []);
  function handleLogin() {
    console.log(student);
    let res = student.find(
      (item) =>
        item.email.toString() === email.toString() &&
        item.password.toString() === password.toString()
    );
    console.log(res);
    if (res) {
      alert("login successfull");
      localStorage.setItem("loggedStudent", res.name);
      navigate("/user");
    } else {
      alert("invalid credentials");
    }
  }
  return (
    <div className={styles.container}>
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
        <input type="password"  placeholder="password" onChange={(e) => setpassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
      <h2>dont have an account?</h2>
      <Link to="/studentRegister">
        <button>SignUp</button>
      </Link>
    </div>
  );
};

export default StudentLogin;
