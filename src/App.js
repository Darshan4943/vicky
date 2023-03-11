import React, { Fragment,useState} from 'react'

import './App.css'
export default function App(){

  const [input,setInput]= useState([])
  let result


  function handleChange(event){
    return(result=event.target.value)
  }

  function handleSubmit(){
    return setInput([...input,result])
  }

  const margin={margin:20}
  
  return(
    <Fragment>
      <input onChange={handleChange}/>
      
      <button style={margin} onClick={handleSubmit}>Add</button>
      
      {input.map((number)=>(<p>{number}</p>))}
      <br/>
      
    </Fragment>
   

    
    )
}