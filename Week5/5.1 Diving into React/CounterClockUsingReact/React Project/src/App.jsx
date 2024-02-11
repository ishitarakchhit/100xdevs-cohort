// React doesn't consider this a state variable
// let state = {
//   count: 0
// }
//Therefore we have to use useState
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);  

  return (
    <div>
      <CustomButtonComponent count={count} setCount = {setCount}></CustomButtonComponent>
      <CustomButtonComponent count={count} setCount = {setCount}></CustomButtonComponent>
      <CustomButtonComponent count={count} setCount = {setCount}></CustomButtonComponent>
    </div>
  )
} 

//component
function CustomButtonComponent(props){
  
  function onClickHandler(){
    props.setCount(props.count+1);
  }
  return <button onClick = {onClickHandler}> 
  Counter {props.count}
  </button>
}


export default App
