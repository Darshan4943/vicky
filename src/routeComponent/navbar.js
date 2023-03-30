import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.main}>
      <ul>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/Register">Register</NavLink></li>
        
      </ul>
    </div>
  )
}

export default Navbar