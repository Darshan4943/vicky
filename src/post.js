import React, { useContext } from "react";
import { Context } from "./Ass7";
// import "./Child.css";

const Posts = () => {
  const { data, handleClick, details } = useContext(Context);

  return (
    <div className="main">
      <div className="box1">
        <h1>Posts List</h1>
        <table>
          <thead>
            <th>userId</th>
            <th>Id</th>
            <th colSpan={3}>Posts</th>
          </thead>
          {data.map((item, index) => (
            <tr key={index}>
                <td>{item.userId}</td>
              <td>{item.id}</td>
              <td >{item.title}</td>
              <td><button  onClick={() => handleClick(index)}> Details</button></td>
            </tr>
          ))}
        </table>
      </div>
      <div className="box2">
        <h1>Post Details</h1>
        {details ? (
          <table>
            <thead>
              <th colSpan={2}>Post Details</th>
            </thead>
            <tr>
              <td> UserId</td>
              <td>{details.userId}</td>
            </tr>
            <tr>
              <td style={{ width: "80px" }}> Id</td>
              <td>{details.id}</td>
            </tr>
            <tr>
              <td> Title</td>
              <td>{details.title}</td>
            </tr>
            <tr>
              <td> Body</td>
              <td>{details.body}</td>
            </tr>
          </table>
        ) : (
          <h3>Click on Veiw details button to get details about any Post</h3>
        )}
      </div>
    </div>
  );
};

export default Posts