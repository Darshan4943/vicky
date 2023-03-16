import React from 'react'
  import './App.css'
  
  function Task1(props) {
    return(
      <div className='container'>
      <img src={props.image} alt="logo" />
      <button onClick={props.handleChange}>{props.BtnName}</button>
    </div>
    )
  }
  
  export default Task1