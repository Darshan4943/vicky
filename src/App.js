import * as React from "react";
import Select from "react-select"


export default function App() {

    const [value,setValue]=React.useState(null)
  const options=[
    {value:"CHOCOLATE",label:"Chocolate"},
    {value:"CANDY",label:"Candy"},
    {value:"ICE-CREAME",label:"Ice Cream"},
    {value:"BURGER",label:"Burger"}
    
  ]
  return (
    <div style={{margin:20,width:200}}>
       <Select 
       options={options} 
       defaultValue={value} 
       placeholder="Select your Snack" 
       onChange={setValue} 
       isMulti
       isSearchable
       noOptionsMessage={()=>"No Snacks Found"}
      
       styles={{
        clearIndicator:()=>({
          color:"red"
        })
       }}
       />
    </div>
  );
}