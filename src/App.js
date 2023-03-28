import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/AboutUs'
import Login from './components/Login'
import Navbar from './components/Navbar'
import SignUp from './components/Signup'
import './style.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App