import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataSlice } from "../Slic";
import styles from "./Contact.module.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [Email, setEmail] = useState("");
  const [number, setnumber] = useState("");
  const navigate = useNavigate();
  const data = useSelector((state) => {
    return state.data;
  });
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    let newObj = {
      name: name,
      last: lastname,
      email: Email,
      num: number,
    };
    localStorage.setItem("user", JSON.stringify(newObj));
    dispatch(dataSlice.actions.addData(newObj));
    return navigate("/");
  }
  useEffect(() => {
    console.log(data);
  });
  return (
    <div className={styles.container}>
      <h1>Contact-Us</h1>
      <h1>Fill this form to use Task page</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          FirstName
          <input type="text" onChange={(e) => setname(e.target.value)} />
        </label>
        <label>
          LastName
          <input type="text" onChange={(e) => setlastname(e.target.value)} />
        </label>
        <label>
          Email
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone-Number
          <input type="number" onChange={(e) => setnumber(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
