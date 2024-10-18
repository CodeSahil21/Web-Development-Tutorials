/*
//jsx element must have one parent element in below case it is div tag other withot parent element it will show error
//<React.Fragment> :  prefer <></>

<>
    <Header title="Sahil1"></Header>
    <Header title="sahil2"></Header>
  </>
  //react :creates dynamic websites(a websites whoes content changes constantly) in a easy ways
  //dom updates which is known as Re-Render
  //rule of dynamic websites is to minimize  Re renders : beacuse we don't want static things to re render
  //so we optimize in way where we only need to re render components which are required

  //
*/

/*
function App() {
  const [title,setTitle] = useState("My name is Sahil");
  function updateTitle(){
    setTitle("my name is " + Math.random());
   
  }
  
  return (
    <Fragment>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="sahil2"></Header>
    </Fragment>
   
  )
}
A re-render means that
1. React did some work to calculate what all should update in this component
2. The component actually got called (you can put a log to confirm this)
3. The inspector shows you a bounding box around the component
It happens when
1. A state variable that is being used inside a component changes
2. A parent component re-render triggers all children re-rendering

You want to minimise the number of re-renders to make a highly optimal react app
The more the components that are getting re-rendered, the worse
*/


/*
//Solution
1)push the state down:
function App() {
  return (
    <Fragment>
      <HeaderWithButton/>
      <Header title="Sahil2"></Header>
      <Header title="sahil2"></Header>
    </Fragment>
   
  )
}
function HeaderWithButton(){
  const [title,setTitle] = useState("My name is Sahil");
  function updateTitle(){
    setTitle("my name is " + Math.random());
  }
  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
  </div>
}

2)use React.memo
function App() {
  const [title,setTitle] = useState("my name is harkikat");
  function updateTitle(){
    setTitle("my name is "+ Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="sahil2"></Header>
      <Header title="sahil2"></Header>
      <Header title="sahil2"></Header>
      <Header title="sahil2"></Header>
    </div>
  )
}
const Header  = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
});
it will only change if it has dynamic variable
*/

/*KEY:
let counter = 4;
function App() {
  const [todos,setTodos] = useState([{
    id:1,
    title:" gym",
    description:"go to gym today"
  },{
    id:2,
    title:"study",
    description:"study  today"
  },{
    id:3,
    title:"sleep",
    description:"sleep today"
  }]);
 function addTodo(){
  setTodos([...todos,{
    id:counter++,
    title: Math.random(),
    description: Math.random()
  }]);
}
          //{ {todos.map(todo=> <Todo title={todo.title} description={todo.description}/>)} }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
   {todos.map(function(todo){
    return <Todo key={todo.id} title={todo.title} description={todo.description}/>
   })}
    </div>
  )
}
  
function Todo({title,description}){
return<div>
  <h1>
    {title}
  </h1>
  <h5>
    {description}
  </h5>
</div>
}
In React, the key prop is essential when rendering lists of elements. It helps React identify which items have changed, been added, or removed, ensuring efficient updates to the UI. Here are some key points about using key in React:

Unique Identifier: Each key should be unique among siblings. This helps React distinguish between different elements in a list.
Stability: Keys should be stable, meaning they should not change over time. Using unique IDs from your data is a good practice.
Performance: Properly using keys can improve the performance of your application by minimizing unnecessary re-renders.
*/

/*
wrapper components
function App() {
function App() {
  return(
    <div>
      <CardWrapper children={<TextComponent/>}/>
      <CardWrapper children={<TextComponent/>}/>
      <CardWrapper>
        <div>
          hi there
        </div>
      </CardWrapper>
    </div>
  )
 
}
function CardWrapper({children}) {
  //create a div which has border(hint:the way to create a border is border : "2px solid black")
  //and inside the div ,renders the prop
  return <div style={{border: "2px solid black"}}>
{children}
  </div>
}
function TextComponent(){
  return<div>
    hi there
  </div>

}

What is a Wrapper Component?
A wrapper component is a React component that wraps other components or elements, 
providing a common structure or additional functionality. This pattern is useful for creating reusable UI elements, 
such as layout containers, modals, or cards.
*/

/*
function App() {
  useEffect(()=>{
    alert("hi")
  },[])
  return(
    <div>
      hi there
    </div>
  )
 
}
The useEffect hook in React is a powerful tool that allows you to perform side effects in your functional components. 
Side effects are operations that affect something outside the scope of the function being executed, 
such as fetching data, updating the DOM, or setting up subscriptions.

Basic Syntax
The useEffect hook takes two arguments:

A function that contains the side effect logic.
An optional dependency array that determines when the effect should run.
useEffect(() => {
  // Side effect logic here
}, [dependencies]);
Common Use Cases
Fetching Data: You can use useEffect to fetch data from an API when the component mounts.
Subscriptions: Set up subscriptions to external data sources or event listeners.
Updating the DOM: Directly manipulate the DOM or perform animations.
:mount mean first time it get  render
*/