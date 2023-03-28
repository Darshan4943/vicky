import React from 'react';
import styles from './Aboutus.module.css';
import darshan from './image.jpg';

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={darshan} alt="Company" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h1>About Us</h1>
        <p>“There is no greater thing you can do with your life and your work than follow your passions in a way that serves the world and you."</p>
      </div>
    </div>
  );
}

export default About