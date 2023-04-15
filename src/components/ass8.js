import React, { useState } from "react";


export default function Ass8() {
  const [value, setValue] = useState([]);
  const [editvalue, setEditValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  function handleChange(e) {
    setEditValue(e.target.value);
  }

  function handleClick() {
    setValue((prevvalue) => [...prevvalue, editvalue]);
    setEditValue("");
  }

  function handleEditClick(index) {
    setEditValue(value[index]);
    setSelectedIndex(index);
  }

  function handleSaveClick() {
    if (selectedIndex !== null) {
      const temp = [...value];
      temp[selectedIndex] = editvalue;
      setValue(temp);
      setEditValue("");
      setSelectedIndex(null);
    }
  }
  function handleDelete(index) {
    let temp = value.filter((item, id) => id !== index);
    setValue(temp);
  }
  return (
    <div className="container">
      <div className="main">
        <h1>Notes</h1>
        <div className="main1">
          <input onChange={handleChange} value={editvalue} />
          <button onClick={handleClick}>add</button>
        </div>
        {selectedIndex !== null && (
          <button onClick={handleSaveClick}>Save</button>
        )}
        {value.map((item, index) => (
          <div key={index} className="items">
            <p>{item}</p>
            <div className="btn">
              <button onClick={() => handleEditClick(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}