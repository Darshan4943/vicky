import React from 'react'
import styles from './Login.module.css'
function Login() {
   
  return (
    <div className={styles.container}>
      <form>
        <h2>Login Here</h2>
              <label for='email'>Your Email</label>
        <input id='email' type="email" placeholder='Enter your Email'/>
        <label for="password">Password</label>
        <input id="password" type="password" placeholder='Enter your Password'/>
       
        <button>Login</button>
        </form>

    </div>
  )
}

export default Login