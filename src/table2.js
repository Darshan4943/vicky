import React, { useState } from "react";

const Table2 = () => {
  const [data, setdata] = useState([]);
  function handleMouseOver(res) {
    let times = new Date().toLocaleTimeString();
    setdata((prevdata) => [
      ...prevdata,
      {
        Time: times,
        Event: "Mouse-Over",
        Tag: res,
      },
    ]);
   
  }
 
  function handleMouseOut(res) {
    let times = new Date().toLocaleTimeString();
    setdata((prevdata) => [
      ...prevdata,
      {
        Time: times,
        Event: "Mouse-Out",
        Tag: res,
      },
    ]);
  }
  return (
    <div>
      <h1 
        onMouseOver={() => handleMouseOver("Heading 1")}
        onMouseOut={() => handleMouseOut("Heading 1")}
      >
        Heading 1
      </h1>

      <h2
        onMouseOver={() => handleMouseOver("Heading 2")}
        onMouseOut={() => handleMouseOut("Heading 2")}
      >
        Heading 2
      </h2>

      <div
        onMouseOver={() => handleMouseOver("div")}
        onMouseOut={() => handleMouseOut("div")}
      >
        Div Element
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "100px" }}>Time</th>
            <th style={{ width: "100px" }}>Event Name</th>
            <th style={{ width: "100px", textAlign: "center" }}>Tag Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td
                style={{ color: "green" }}
              >
                {item.Time}
              </td>
              <td style={{  color: "red" }}>
                {item.Event}
              </td>
              <td style={{ textAlign: "center" }}>
                {item.Tag}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;