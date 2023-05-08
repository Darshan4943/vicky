import React from "react";
import { useRecoilState } from "recoil";
import { datas, scores } from "./Atom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./User.module.css";

const User = () => {
  const [data, setData] = useRecoilState(datas);
  const [score, setscore] = useRecoilState(scores);
  const navigate = useNavigate();
  function handleSelect(e, index) {
    let answer = e.target.value;
    if (data[index].correct === answer) {
      setscore(score + 1);
    }
  }

  return (
    <div className={styles.container}>
      {data.map((data, index) => (
        <div key={index} className={styles.question}>
          <h3>
            {index + 1}. {data.question}
          </h3>
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
      <Link to="/score">
        <button className={styles.submitButton}>Submit</button>
      </Link>
    </div>
  );
};

export default User;