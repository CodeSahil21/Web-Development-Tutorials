import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
// it won't re render the component :becasue react doesnot look at variable as a state variable
//we use above hook to define a state 
//first thing to do when you create dynamic website ie define 
//state and component
// let state ={
//   count:0
// }
function App() {
  const [count,setCount] = useState(0);//[1,2]
 return(
  //<button Onclick="buttonpresss()">:here in react we cannot write it like this because it is not html it xml
  //<button onClick={onClickHandelr} :this is the correct wat or we can either write function inside it we don't need to give () this beacsue underthehood it knows it has to call onclickhandelr
  <div>
<CustomButton count={count} setCount={setCount}></CustomButton>
  </div>
 )
 //why are we wrapping state.count under curly braces
 // whenever you want to render any javascript dyanmic variable or  component you have wrap it inside the curly braces
}
function CustomButton(props){
  function onClickHandelr(){
    //count = count+1;// not write to set state va~riable
    props.setCount(count + 1);
      }
  return<button onClick={onClickHandelr}>
  Counter{props.count}
  </button>
}
export default App
