

function Head_one(){
  return(
  <h1> Register here...</h1>
  )
}

function Head_two(){
  return(
       <>
       
       <input type="text" placeholder="mobile ..." /> 
      
      
        <input type="text" placeholder="password ..." /> 
        
      </>
  )
}




export default function Chall() {
  return (
    <div className='containe'>
       <Head_one/>
       <Head_two/>
       
      <button>Submit</button>
    </div>
  );
}
