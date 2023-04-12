import React, { useState } from "react";
import './form.css'

export default function Form() {
  const [data, setdata] = useState([""]);
  const [finaltotal, setfinaltotal] = useState(0);
  const [options, setoptions] = useState([
    { selects: "", input: "", total: ""},
  ]);
  const [isBill, setisBill] = useState(false);
  const [name, setname] = useState("");
  const currentDate = new Date().toLocaleDateString();

  function handleCustomerName(e) {
    setname(e.target.value);
  }
  function handleClick() {
    setdata((prevdata) => [...prevdata, ""]);
    setoptions([
      ...options,
      { selects: "", input: "", total: "" },
    ]);
  }
  function handleSelectChange(e, index) {
    const temp = [...options];
    temp[index].selects = e.target.value;
    setoptions(temp);
    console.log(options);
  }

  function handleChange(e, index) {
    const temp = [...options];
    temp[index].input = e.target.value;
    setoptions(temp);
  }
  function createBill() {
    var price = 20;
    var sum = 0;
    for (let i = 0; i < options.length; i++) {
      let res;
      
      var temp = [...options];
      res = Number(options[i].input) * price;
      temp[i].total = res;
      sum = sum + Number(temp[i].total);
    }
    setfinaltotal(sum);
    setoptions(temp);
    setisBill(true);
  }
  return (
    <div>
      <label>
        Customer Name
        <input type="text" placeholder ="Name" onChange={handleCustomerName} />
      </label>
      <div>
      {data.map((item, index) => (
        <>
          <hr style={{borderTop:"1px solid black"}}/>
        <div className="box">
         <label>
           Select Product
          <select
            key={index}
            id="mySelect"
            onChange={(event) => handleSelectChange(event, index)}
          >
            
            <option value="Sugar" selected>Sugar</option>
            <option value="Salt" >Salt </option>
            <option value="Oil">Oil</option>
            <option value="Chocolate">Chocolate</option>
          </select>
          </label>
          <label>
            Select Quantity
          <input type="number" placeholder ="Quantity" onChange={(event) => handleChange(event, index)} />
          </label>
          {data.length - 1 === index && (
            <button onClick={handleClick}>Add More Items</button>
          )}
        </div>
        <hr style={{borderTop:"1px solid black"}}/>
        </>
      ))}
       <button onClick={createBill}>Generate Bill</button>
       <hr style={{borderTop:"1px solid black"}}/>
      </div>
      {isBill && (
       
        <table>
          <thead>
            <tr>
              <td style={{ textAlign: "start"}} colSpan="4">Name:{name}</td>
            </tr>
            <tr>
              <td style={{ textAlign: "start"}} colSpan="4">Date:{currentDate}</td>
            </tr>
            <tr>
              <th>Items</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {options.map((item) => (
              <tr>
                <td>{item.selects}</td>
                <td>20</td>
                <td>{item.input}</td>
                <td>{item.total}</td>
              </tr>
            ))}
            <tr>
              <td style={{ textAlign: "end"}} colSpan="3">Total</td>
              <td >{finaltotal}</td>
            </tr>
          </tbody>
        </table>
      )}
     
    </div>
  );
}