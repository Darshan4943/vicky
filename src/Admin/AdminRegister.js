import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
const AdminRegister = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [admin, setadmin] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("admin")) {
      setadmin(JSON.parse(localStorage.getItem("admin")));
    }
  }, []);
  function handleRegister() {
    let obj = {
      name: name,
      email: email,
      password: password,
    };
    setadmin((prev) => [...prev, obj]);
    localStorage.setItem("admin", JSON.stringify([...admin, obj]));
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
           placeholder="password"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <Link to="/adminLogin">
          <button type="submit" onClick={handleRegister}>
            Register
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AdminRegister;
