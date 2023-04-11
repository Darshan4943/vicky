import React, { useEffect, useState } from "react"
import "./Table4.css"
const Table4 = () => {
  const [data, setdata] = useState([])
  const [isvisible, setvisible] = useState(false)
  const url="https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data))
  }, [])

  function handleClick(id) {
    setdata((prevData) => prevData.filter((item, i) => i !== id))
  }
  function handleChange(e) {
    setvisible(e.target.checked)
  }

  return (
    <div>
      <label >
        Show Table
        <input type="checkbox" onChange={handleChange} value={isvisible}></input>
      </label>
      {isvisible && (
        <table>
          <thead>
            <tr>
              <th style={{ width: "150px" }}>User Id</th>
              <th style={{ width: "300px" }}>User Name</th>
              <th style={{ width: "300px" }}>Email</th>
              <th style={{ width: "150px", textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                   
                    textAlign: "center",
                  }}
                >
                  {item.id}
                </td>
                <td
                  style={{
                    
                    textAlign: "center",
                   
                  }}
                >
                  {item.name}
                </td>
                <td
                  style={{
                   
                    textAlign: "center",
                   
                  }}
                >
                  {item.email}
                </td>
                <td style={{ textAlign: "center" }}>
                  <button style={{ backgroundColor:'tomato'}} onClick={() => handleClick(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table4