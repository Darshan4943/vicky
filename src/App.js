
import './App.css' 
import Head1 from './headOne'
import Head2 from './headTwo'
import Head3 from './headThree'

 
export default function App(){
  return(
    <div className='container'>
      <Head1 data="Register here ..."/>
      <Head2 />
      <Head3 btn="Submit"/>
    </div> 
    
  )
}