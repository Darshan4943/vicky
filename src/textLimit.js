import React from 'react'
import './limit.css'
export default function Limit() {
    let res=[]
    let result=[]
    function handleChange(event) {
        res=event.target.value
        result=res.split(" ")
        console.log(result.length)
        if(result.length>=100){
            return alert("You have reached Maximum-limit words")
        }
    }
    
  return (
    <div className='container'>
      <input type="text" placeholder='write upto 100 words only' onChange={handleChange}/>
      
    </div>
  )
}

