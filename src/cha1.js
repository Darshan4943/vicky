
function Head_one(){
  return(
  <h1> I am Heading one...from first component</h1>
  )
}

function Head_two(){
  return(
  <h2> I am Heading two...from second component</h2>
  )
}

function Head_three(){
  return(
  <h3> I am Heading three...from third component</h3>
  )
}



export default function Chall() {
  return (
    <>
       <Head_one/>
       <Head_two/>
       <Head_three/>
       <button>Click Me!!</button>
    </>
  );
}
