import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import './style.css';
import{ useRecoilState} from "recoil"
import {Npmvalue} from "./Atom"
import Styles from "./npm.module.css"
export default function Npm() {
  const Navigate=useNavigate()
  const [data, setdata] = useState([]);
  const [filtervalue, setfiltervalue] = useState([]);
  const [Value, setselectedvalue] = useRecoilState(Npmvalue);
  
  useEffect(() => {
    fetch("https://api.npms.io/v2/search?q=reactjs")
      .then((res) => res.json())
      .then((data) => setdata(data.results));
  }, []);

  function handleChange(e) {
    let res = e.target.value;
    let filtervalues = data.filter((value) => {
      return value.package.name.toLowerCase().includes(res.toLowerCase());
    });

    if (res === "") {
      setfiltervalue([]);
    } else {
      setfiltervalue(filtervalues);
      console.log(filtervalues);
    }
  }
  let inputvalue;
  function handleChangeinput(e) {
    inputvalue = e.target.value;
    console.log(inputvalue);
  }
  function handleClick(id) {
    let result = filtervalue.filter((value, index) => index === id);
    let obj = {
      name: result[0].package.name,
      des: inputvalue,
    };
    setselectedvalue((prev) => [...prev, obj]);
    console.log(Value)
    console.log(result[0].package.name);
   
    
  }
  
  return (
    <div className={Styles.main}>
     
      <input onChange={handleChange} placeholder="search for Npm"/>
      <Link to ="/list"> <button className={Styles.button}>Go to Fav List</button></Link>
     
      {filtervalue &&
        filtervalue.map((d, index) => (
          <div>
            <p>{d.package.name}</p>
            <input onChange={handleChangeinput} placeholder="Why it is favorite" />
            <button onClick={() => handleClick(index)}>Add</button>
          </div>
        ))}
    
    </div>
  );
}