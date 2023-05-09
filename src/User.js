// import React from "react";
import { useRecoilState } from "recoil";
import { datas, scores } from "./Atom";
import { useNavigate } from "react-router-dom";

import styles from "./User.module.css";
import { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useRecoilState(datas);
  const [user, setuser] = useState();
  useEffect(() => {
    if (localStorage.getItem("question")) {
      setData(JSON.parse(localStorage.getItem("question")));
    }
    if (localStorage.getItem("loggedStudent")) {
      setuser(localStorage.getItem("loggedStudent"));
    }
  }, []);
  const [score, setscore] = useRecoilState(scores);
  const navigate = useNavigate();
  function handleSelect(e, index) {
    let answer = e.target.value;
    if (data[index].correct === answer) {
      setscore(score + 1);
    }
  }

  function handleSubmit() {
    let obj = {
      name: user,
      score: score,
    };
    localStorage.setItem("userScore", JSON.stringify(obj));
    alert("successfully submitted");
    navigate("/");
  }
  return (
    <div className={styles.container}>
      {data.map((data, index) => (
        <div key={index} className={styles.question}>
          <h3>
            {index + 1}. {data.question}
          </h3>
          {data.imageque && (
            <img
              src={data.imageque}
              alt="images"
              style={{ height: "200px", width: "200px" }}
            />
          )}
          <div className={styles.options}>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value={data.options[0]}
                onChange={(e) => handleSelect(e, index)}
              />
              {data.options[0]}
            </label>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value={data.options[1]}
                onChange={(e) => handleSelect(e, index)}
              />
              {data.options[1]}
            </label>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value={data.options[2]}
                onChange={(e) => handleSelect(e, index)}
              />
              {data.options[2]}
            </label>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value={data.options[3]}
                onChange={(e) => handleSelect(e, index)}
              />
              {data.options[3]}
            </label>
          </div>
        </div>
      ))}

      <button onClick={handleSubmit} className={styles.submitButton}>
        Submit
      </button>
      {/* </Link> */}
    </div>
  );
};

export default User;
