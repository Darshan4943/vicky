import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact" className={styles.navLink}>
            Contact Us
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/task" className={styles.navLink}>
            Task
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
