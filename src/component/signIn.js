import React from 'react'

export default function SignIn(props) {
    
  return (
    <>
    
      <label for='email'>Your Email</label>
        <input id='email' type="email" placeholder='Enter your Email'/>
        <label for="password">Password</label>
        <input id="password" type="password" placeholder='Enter your Password'/>
        {!props.isSignUp && 
          <div className='mid'>
            <label htmlFor="checkbox"
                    style={{marginRight:'0px',marginBottom:"1px"}}>
              <input
                type="checkbox"
                id="checkbox"
                style={{width: 'fit-content'}}
              />
              Remember me!
            </label>
          <button>forgot password?</button>
        </div>}
    </>
  )
}


