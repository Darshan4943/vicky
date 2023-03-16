import React ,{useState} from 'react'
import SignIn from './component/signIn';
import SignUp from './component/signUp';
import './loginForm.css';

export default function LoginForm() {
    const [isSignUp, setisSignUp] = useState(false)

  return (
    <div className='container'>
    
      {isSignUp && <SignUp />}
      <SignIn isSignUp={isSignUp}/>

        <button type='submit' style={{width:'240px', height:"25px", backgroundColor:"rgb(85, 16, 214)",color:"white", borderRadius:"5px"}}>
          {isSignUp ? "Register" : "Login"}
          </button>

        <div className='lower'>
          <p>{!isSignUp ? "Don't have an account?":"Already have an account?"} <button onClick={()=>setisSignUp(!isSignUp)}>{isSignUp ? "Login" : "SignUp"}</button></p>
         
        </div>

    </div>
  )
}

 