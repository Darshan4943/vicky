import React from 'react'
import styles from './Signup.module.css'
function SignUp() {
  return (
    <div className={styles.container}>
      <form>
        <h2>Register Here</h2>
            <label for='FirstName'>First Name</label>
            <input id='FirstName' type="text" placeholder='Enter your First-Name'/>
            <label for='LastName' >Last Name</label>
            <input id='LastName' type="text" placeholder='Enter your Last-Name'/>
            <label for='email'>Your Email</label>
        <input id='email' type="email" placeholder='Enter your Email'/>
        <label for="password">Password</label>
        <input id="password" type="password" placeholder='Enter your Password'/>
        <button>SignUp</button>
      </form>
    </div>
  )
}

export default SignUp