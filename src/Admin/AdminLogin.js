import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
const AdminLogin = () => {
  const [admin, setadmin] = useState([]);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setadmin(JSON.parse(localStorage.getItem("admin")));
    // console.log(admin);
  }, []);
  function handleLogin() {
    console.log(admin);
    let res = admin.find(
      (item) =>
        item.email.toString() === email.toString() &&
        item.password.toString() === password.toString()
    );
    if (res) {
      alert("login successfull");
      navigate("/adminHome");
    } else {
      alert("invalid credentials");
    }
  }
  return (
    <div className={styles.container}>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input type="password"  placeholder="password" onChange={(e) => setpassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <h2>dont have an account?</h2>
      <Link to="/adminRegister">
        <button>SignUp</button>
      </Link>
    </div>
  );
};

export default AdminLogin;
