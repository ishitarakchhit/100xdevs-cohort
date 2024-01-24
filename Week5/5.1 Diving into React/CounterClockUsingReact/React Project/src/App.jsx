// React doesn't consider this a state variable
// let state = {
//   count: 0
// }
//Therefore we have to use useState
import { useState } from "react";



function App() {
  const [count, setCount] = useState(0);

  function onClickHandler(){
    setCount(count + 1);
  }

  return (
    <div>
      <CustomButton count={count} setCount={setCount} ></CustomButton>    
    </div>
  )
} 

function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count+1);
  }

  return <button onClick = {onClickHandler}>
  Counter {props.count}                                           {/* {} contains things which are dynamic */}
  </button>

}

export default App
