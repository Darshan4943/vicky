import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.main}>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/contact">contact</Link></li>
        
      </ul>
    </div>
  )
}

export default Navbar