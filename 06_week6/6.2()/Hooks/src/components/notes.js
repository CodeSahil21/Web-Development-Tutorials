/*
1)useState
Let’s you describe the state of your app
Whenever state updates, it triggers a re-render
which finally results in a DOM update

2)useEffect
the useEffect hook in React is a powerful tool that allows you to perform side effects in your function components. 
Side effects can include tasks like fetching data, directly manipulating the DOM, or setting up timers.

Here’s a basic overview of how useEffect works:

Syntax
JavaScript

useEffect(() => {
  // Your side effect code here
}, [dependencies(conditions)]);

Side Effects: These are operations that affect something outside the scope of the function being executed. Common side effects include:
Fetching data from an API
Subscribing to a service
Manually changing the DOM
Dependencies: The second argument to useEffect is an array of dependencies. The effect will only re-run if one of these dependencies changes.
If you pass an empty array [], the effect runs only once after the initial render.
If you omit the array, the effect runs after every render.
If you include variables in the array, the effect runs whenever any of those variables change.
it is something we don't have to   run during every re renders
dependency array : when should the callback run and it takes state variable as input and 
whenever state variable changes it gets callback
we cannot make outer function async rather we can wrap async function inside 

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
axios.get("https://sum-server.100xdevs.com/todos")
.then(function(response){
  setTodos(response.data.todos)
})
  },[]);
  return (
    <div>
      {todos.map(todo => <Todo title={todo.title} description={todo.description}/>)}
    </div>
  )
}

function Todo({title,description}){
return(
<div>
  <h1>{title}</h1>
  {description}
</div>
)
}

function App() {
  const [selectedId,setSelectedId]  = useState([1]);
  return (
    <div>
      <button onClick={function(){
        setSelectedId(1);
      }}>1</button>

      <button onClick={function(){
        setSelectedId(2);
      }}>2</button>

      <button onClick={function(){
        setSelectedId(3);
      }}>3</button>

      <button onClick={function(){
        setSelectedId(4);
      }}>4</button>

      <Todo id={selectedId}/>
    </div>
  )
}

function Todo({id}){
  const [todo,setTodo] = useState({});

  //implement effect here
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(function(response){
      setTodo(response.data.todo)
    })
      },[id]);//it will only render again after i pass id as dependency

return(
<div>
  id:{id}
  <h1>{todo.title}</h1>
  <h4>{todo.description}</h4>
</div>
)

3)useMemo
The useMemo hook in React is a powerful tool for optimizing performance by memoizing the result of an expensive computation. 
This means that React will remember the result of the function call and reuse it when the dependencies haven’t changed,
 rather than recalculating it on every render.

 When to Use useMemo
You should consider using useMemo in scenarios where:

You have expensive computations that don’t need to be recalculated on every render.
You want to optimize rendering performance by avoiding unnecessary recalculations.
You need to manage derived data efficiently.
Benefits of useMemo
Avoids Unnecessary Recalculations: By memoizing the result, useMemo prevents the function from running on every render unless its dependencies change.
Optimizes Rendering Performance: Helps in making your application faster by reducing the number of computations.
Enhances User Experience: By improving performance, it can lead to a smoother and more responsive user interface.
Syntax
The syntax for useMemo is straightforward:

JavaScript

const memoizedValue = useMemo(() => {
  // Function that returns a value
}, [dependencies]);

example
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);


  let count = useMemo(()=>{
    let finaCount = 0;
    for (let i = 0; i <= inputValue; i++) {
      finaCount = finaCount+i;
      
    }
    return finaCount;
  },[inputValue])// it helps in avoiding extra re renders

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);// e.target.value retrieves the current value entered by the user in the input field
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}


4)useCallback

The useCallback hook in React is used to memoize callback functions, 
which helps to optimize performance by preventing unnecessary re-creations of functions on every render. 
This is particularly useful when passing callbacks to child components that rely on referential equality to prevent unnecessary re-renders.

When to Use useCallback
You should consider using useCallback in scenarios where:

You have functions that are passed as props to child components.
You want to prevent unnecessary re-renders of child components.
You need to optimize performance by memoizing functions.
Benefits of useCallback
Prevents Unnecessary Re-renders: Helps in preventing child components from re-rendering unless necessary.
Optimizes Performance: Reduces the number of function re-creations, leading to better performance.
Improves Code Efficiency: Makes your code more efficient by caching functions.


referential equality
Referential equality is a concept in programming that determines whether two references point to the same object in memory. In JavaScript, this is particularly important when dealing with objects and arrays, as it affects how comparisons are made and how React handles re-renders.

Referential Equality Explained
Comparison by Value vs. Comparison by Reference:
Comparison by Value: This is straightforward and applies to primitive types like numbers, strings, and booleans. If two values are the same, they are considered equal.
JavaScript

const a = 1;
const b = 1;
console.log(a === b); // true

Comparison by Reference: This applies to objects and arrays. Two objects are considered equal only if they reference the same location in memory.
JavaScript

const obj1 = { name: 'Alice' };
const obj2 = { name: 'Alice' };
const obj3 = obj1;
console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true
Referential Equality in React:
React uses referential equality to determine whether to re-render components. If a component’s props or state change, React checks if the new values are different from the old ones using referential equality.
For example, if you pass an object as a prop to a child component, React will re-render the child component only if the reference to the object changes.
Use of useCallback and useMemo:
Hooks like useCallback and useMemo help maintain referential equality by memoizing functions and values. This prevents unnecessary re-renders by ensuring that the same reference is used unless dependencies change.
JavaScript

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

Practical Example
Consider a scenario where you have a parent component passing a callback function to a child component:

JavaScript

import React, { useState, useCallback } from 'react';

const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <Child increment={increment} />;
};

const Child = React.memo(({ increment }) => {
  console.log('Child rendered');
  return <button onClick={increment}>Increment</button>;
});
Without useCallback: The increment function would be recreated on every render of the Parent component, causing the Child component to re-render every time.
With useCallback: The increment function is memoized, so it only changes when count changes. This helps maintain referential equality and prevents unnecessary re-renders of the Child component.
Summary
Referential Equality: Determines if two references point to the same object in memory.
Importance in React: Helps React decide whether to re-render components based on changes in props or state.
Optimization: Using hooks like useCallback and useMemo helps maintain referential equality, optimizing performance by preventing unnecessary re-renders



Reconialtion: reconciliation in React refers to the process of efficiently updating the user interface (UI) based on changes in the underlying data or state.
 When React detects changes, it compares the previous UI tree with the new one and updates only the necessary parts, minimizing unnecessary work. 😊
*/
