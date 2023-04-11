import React, { useState } from "react";
import styles from "./table5.module.css"

const Table5 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [pass, setpass] = useState("");

  const [data, setdata] = useState([]);

  function handleNameChange(e) {
    setname(e.target.value);
  }
  function handleEmailChange(e) {
    setemail(e.target.value);
  }
  function handleAgeChange(e) {
    setage(e.target.value);
  }
  function handlePass(e) {
    setpass(e.target.value);
  }

  function handleSubmit() {
    setdata((prevdata) => [
      ...prevdata,
      {
        name: name,
        email: email,
        age: age,
      },
    ]);
    setname("");
    setemail("");
    setage("");
    setpass("");
  }

  function handleDelete(id) {
    setdata((prevData) => prevData.filter((item, index) => index !== id));
  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box1} style={{backgroundColor:'orange'}}>
          <h2 style={{ textAlign: "center" }}>Enter Your Details</h2>
          <label>
            UserName:
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={handleNameChange}
              value={name}
            ></input>
          </label>
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={handleEmailChange}
              value={email}
            ></input>
          </label>
          <label>
            Age:
            <input
              type="number"
              placeholder="Enter Your Age"
              value={age}
              onChange={handleAgeChange}
            ></input>
          </label>
          <label>
            Password:
            <input type="password" value={pass} onChange={handlePass}></input>
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className={styles.box2} style={{backgroundColor:'tomato'}}>
          <h2 style={{ textAlign: "center" }}>Preview Your Data</h2>
          <h4>Name : {name}</h4>
          <h4>Email :{email}</h4>
          <h4>Age :{age}</h4>
        </div>
      </div>

      {/* <hr /> */}
      <table>
        <thead>
          <tr>
            <th style={{ width: "200px" }}>Id</th>
            <th style={{ width: "200px" }}>Name</th>
            <th style={{ width: "200px" }}>Email</th>
            <th style={{ width: "200px", textAlign: "center" }}>Age</th>
            <th style={{ width: "200px", textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td
                style={{
                  width: "100px",
                  textAlign: "center",
                }}
              >
                {index + 1}
              </td>
              <td
                style={{
                  width: "100px",
                  textAlign: "center",
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  width: "100px",
                  textAlign: "center",
                }}
              >
                {item.email}
              </td>
              <td
                style={{
                  width: "100px",
                  textAlign: "center",
                  
                }}
              >
                {item.age}
              </td>
              <td style={{ width: "100px", textAlign: "center" }}>
                <button  style={{backgroundColor:'tomato' }}onClick={() => handleDelete(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table5;