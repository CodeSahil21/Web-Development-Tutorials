import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  CreateTodo  from './components/createTodo';
import  {Todos}  from './components/todos';






function App() {

  const [todos, setTodos] = useState([]);

  fetch('http://localhost:3000/todo')
  .then(async function(response){
    const data = await response.json();
    setTodos(data.todos);
  })


  return (
    <div>
      < CreateTodo />
      < Todos todos={todos}></Todos>
    </div>
  )
}

export default App