import { useRef } from "react";
import styles from "./App.module.css";
import { useRecoilState } from "recoil";
import { datas, numbers } from "./Atom";
import { Link } from "react-router-dom";

export default function Admin() {
  let inputref = useRef();
  let queref = useRef();
  let option1ref = useRef();
  let option2ref = useRef();
  let option3ref = useRef();
  let option4ref = useRef();
  let imageRef = useRef();
  let correctoptionref = useRef();

  const [number, setNumber] = useRecoilState(numbers);
  const [data, setData] = useRecoilState(datas);
  function handleChange(e) {
    setNumber(e.target.value);
  }

  function handleQuestion(e) {
    queref.current = e.target.value;
  }
  function handleOption1(e) {
    option1ref.current = e.target.value;
  }
  function handleOption2(e) {
    option2ref.current = e.target.value;
  }
  function handleOption3(e) {
    option3ref.current = e.target.value;
  }
  function handleOption4(e) {
    option4ref.current = e.target.value;
  }
  function handlecorrectoption(e) {
    correctoptionref.current = e.target.value;
  }
  function handleSubmit() {
    let newObj = {
      question: queref.current,
      imageque: imageRef.current,
      options: [
        option1ref.current,
        option2ref.current,
        option3ref.current,
        option4ref.current,
      ],
      correct: correctoptionref.current,
    };
    setData([...data, newObj]);
    localStorage.setItem("question", JSON.stringify([...data, newObj]));
    alert("submitted successfully");
  }
  function handleNext() {
    let newObj = {
      question: queref.current,
      imageque: imageRef.current,
      options: [
        option1ref.current,
        option2ref.current,
        option3ref.current,
        option4ref.current,
      ],
      correct: correctoptionref.current,
    };
    setData([...data, newObj]);
    setNumber(number - 1);
    // console.log(data);
  }
  function handleimageChange(e) {
    let url = URL.createObjectURL(e.target.files[0]);
    imageRef.current = url;
  }
  return (
    <div className={styles.container}>
      <label>
        Enter no of question
        <br />
        <input
          ref={inputref}
          onChange={handleChange}
          placeholder="Number of question"
        />
      </label>
      {/* <button onClick={handleCLick}>ok</button> */}
      <input ref={imageRef} type="file" onChange={handleimageChange} />
      <input ref={queref} placeholder="question" onChange={handleQuestion} />

      <input ref={option1ref} placeholder="Option1" onChange={handleOption1} />

      <input ref={option2ref} placeholder="Option2" onChange={handleOption2} />

      <input ref={option3ref} placeholder="Option3" onChange={handleOption3} />

      <input ref={option4ref} placeholder="Option4" onChange={handleOption4} />

      <input
        ref={correctoptionref}
        placeholder="Correct option"
        onChange={handlecorrectoption}
      />

      {number == 1 && (
        <Link to="/">
          <button onClick={handleSubmit}>Submit</button>
        </Link>
      )}
      {number > 1 && <button onClick={handleNext}>Next</button>}
    </div>
  );
}
