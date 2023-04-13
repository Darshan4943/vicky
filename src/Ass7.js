import React, { useState, useEffect } from "react";
import Posts from "./post";
import "./Ass.css";

export const Context = React.createContext();

const Ass7 = () => {
  const [data, setData] = useState([]);
  const [details, setdetails] = useState();
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function handleClick(index) {
    const temp = {
      userId:data[index].userId,
      id: data[index].id,
      title: data[index].title,
      body: data[index].body,
    };
    setdetails(temp);
  }
  return (
    <div className="Container">
      
      <Context.Provider value={{ data, handleClick, details }}>
        <Posts />
      </Context.Provider>
    </div>
  );
};

export default Ass7