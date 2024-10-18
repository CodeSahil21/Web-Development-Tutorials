import { useState } from 'react'


function App() {
  //usestate we add todos which a in which first object contais the and todos and setTodos is use update the or insertnew todos
  const [todos, setTodos] = useState([
    {
    title : "Go to gym ",
    description: "Go to gym from 7 to 9",
    completed:false
  },{
    title : "Study DSA ",
    description: "study DSA from 9-100",
    completed:true

  }
  ]);
  function addTodo(){
    //it is a syntax where we use ...todos (spread) to update newtodos into the already existing todos
    setTodos([...todos,{
  title:"new Todo",
  description:"description of new todo"
    }])
  }
  //here we stringify(basically convert it into String) the todos
 return(
 
    //  {JSON.stringify(todos)}
  
  <div>
    <button onClick={addTodo}>Add a random todo</button>
  
  {/* <Todo title={todos[0].title} description={todos[0].description}/>
  <Todo title={todos[1].title} description={todos[1].description}/> */}
 

{todos.map(function(todo){
  return <Todo title={todo.title} description={todo.description}/>

  
})}
 </div>
 )  
}
function Todo(props){
 
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>

}
export default App
