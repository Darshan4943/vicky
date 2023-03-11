
import React, {useState} from 'react'

export default function App3() {

  const[data,setData]= useState("Amit")

  const handleChange=()=>{
    
    setData(data==="Amit" ? "Rajan" : "Amit" )
  }
  return (
   <>
   <h3> My Name is {data}</h3>
   <button onClick={handleChange}>Change Name</button>
   </> 

  )
}