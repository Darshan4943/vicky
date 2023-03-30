import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './aboutUs'
import Login from './login'
import Navbar from './navbar'
import Register from './register'
import Home from './home.js'
import './style.css'


const Main = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main