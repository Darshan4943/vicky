import React, {useState} from 'react'
 
export default function App2(){
  const [count,setCount]= useState(0)

  function handleIncrement(){
      return setCount(count+1)

  }

  function handleDecrement(){
      return setCount(count-1)
  }
  const width={width:100, margin:20}
  const style={ width:100}
  
  return(
    <>
    <h1>{count}</h1>
   
    <button style ={style} onClick={handleIncrement}>Increment</button>
   
    <button style ={width}onClick={handleDecrement}>Decrement</button>
    
    </>
    )
}