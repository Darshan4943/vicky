import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Npm from "./List/npm"
import List from "./List/list"
import { RecoilRoot } from "recoil"
const App = () => {
  return (
    <BrowserRouter>
       <RecoilRoot>
      <Routes>
        <Route path='/' element={<Npm/>} />
        <Route path='/list' element={<List/>} />
        
      </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App