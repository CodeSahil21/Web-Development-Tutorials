import React,{  useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
// cd week-6-experiments

function App() {
  const [todos,setTodos] = useState([]);
 
  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
      })
    },10000)
   
  },[]); 
  return(
    <div>
      {todos.map(todo=> <Todo key={todo.id}  title={todo.title} description={todo.description}/>)}
    </div>
  )
 
}
function Todo({title,description}){
  return(  <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>);

}


export default App