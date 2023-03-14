import React,{useState} from 'react';


import './App.css'



function App(){
  const [input, setInput] = useState([])
  const [count, setCount] = useState(0)
 
  let result 
  function handleTodo(event){
    return(
      result=event.target.value
    )
  }

  
  function submitTodo(){
    setCount(count+1)
      return setInput([...input,result])
  
  }
  
  
  function handleDelete(abc){
    const result=input.filter((num)=>num!==abc)
    setCount(count-1)
      return  setInput(result)
  
  }
  const handleComplete = (id) => { 
    setInput(input => input.map(num => {
      if (num === id) {
        return (
          <span style={{textDecoration:"line-through"}}>
            {num}  
          </span>
        )
      }
       else {
        return num;
      }
    }));
    setCount(count-1)
  };

  return(
    <div className='container'>
        <div className='box'>
          <h1 >Pending Tasks - {(count)}</h1>
            <div className='box-inside'>
              {input.map((num)=>(
                <p key={num}>{num}
                  <span>
                    <button className='btn-cmplte' onClick={() => handleComplete(num)}>Complete</button>
                    <button className='btn-delete' onClick={() => handleDelete(num)}>Dlt</button>
                  </span>
                </p>))}
            </div>
          <input onChange={handleTodo}/>
          <button onClick={submitTodo}>Submit</button>
        </div>
    </div>
  )
}


export default App;