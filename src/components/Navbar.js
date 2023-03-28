import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.main}>
      <ul>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">SignUp</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar