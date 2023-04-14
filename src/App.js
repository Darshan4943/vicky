
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/contact'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
