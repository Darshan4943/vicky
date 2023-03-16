import React, { useState } from 'react'
import img1 from './images/img1.avif';
import img2 from './images/img2.avif';
import img3 from './images/img3.avif';
import img4 from './images/img4.avif';
import img5 from './images/img5.avif';
import img6 from './images/img6.avif';

import Task1 from './task1';
import './App.css'


function App() {

  let Img=[img1,img2,img3,img4,img5,img6]
  const [Count ,setCount] =useState(0)
  

  function handleChange() {
    if((Img.length-1)===Count){
        return setCount(0)
    }else{
      return setCount(Count+1)
    }
  
  }
  return (
    <>
    
      <Task1 handleChange={handleChange} BtnName="Change Image" image={Img[Count]}/>
    
    </>
    )
}

export default App