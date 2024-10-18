/*
1)Routing 
Routing in React is typically handled using a library called React Router. This library allows you to create a single-page application with navigation without the page refreshing as the user navigates
Single Page Applications (SPAs):
SPAs are web applications that load a single HTML page and dynamically update the content as the user interacts with the app. This approach provides a smoother user experience because it doesn’t require full page reloads for each interaction1.
Client-Side Bundle:
This refers to the collection of JavaScript, CSS, and other assets that are sent to the client’s browser. In the context of SPAs, the client-side bundle includes all the necessary code to handle routing, rendering, and other functionalities directly in the browser1.
Client-Side Routing:
Client-side routing is the process of handling route changes within the browser using JavaScript. Instead of making a request to the server for each new page, the application intercepts the URL changes and dynamically updates the content. This is a key feature of SPAs, allowing for faster navigation and a more seamless user experience


import {BrowserRouter, Routes,Route} from 'react-router-dom'
import  Landing  from './components/Landing'
import Dashboard from './components/Dashboard'

//creating a button for client side  routing
function App() {
  return (
    <div>
      <div>
        <button onClick={()=>{
window.location.href = "/";//this is not ideal way because it makes enitire page hard relaod which is not ideal for client side routing
        }}>Landing page</button>
              <button onClick={()=>{
window.location.href = "/dashboard";
        }}>Dashboard</button>
      </div>
   <BrowserRouter>
<Routes>
  <Route path="/dashboard" element={<Dashboard />}/>
   <Route path="/" element={<Landing />}/>
</Routes>
   </BrowserRouter>
   </div>
  )
} 

export default App


// best solution is use to use navigate hook for client side routing so that we don,t refectch landing page or dashboard page
provided by react router dom
this is right way to do navigation so that we don,t fetch index.html index.js.indes.css again and again
while using usenaviagte() hook make sure we use it inside <BrowerRouter> component

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button on Click={()=>{
    navigate("/");
        }}>Landing page</button>
              <button onClick={()=>{
 navigate("/");
        }}>Dashboard</button>
      </div>
   <BrowserRouter>
<Routes>
  <Route path="/dashboard" element={<Dashboard />}/>
   <Route path="/" element={<Landing />}/>
</Routes>
   </BrowserRouter>
   </div>
  )
} 
  this is wrong way of this doing it as useNavigate hook is not used inside the <BrowserRouter/>
  
function App() {
  return (
    <div>
   <BrowserRouter>
   <Appbar />
<Routes>
  <Route path="/dashboard" element={<Dashboard />}/>
   <Route path="/" element={<Landing />}/>
</Routes>
   </BrowserRouter>
   </div>
  )
} 
function Appbar(){
  const navigate = useNavigate();
return(
  <div>
  <button onClick={()=>{
navigate("/");
  }}>Landing page</button>
        <button onClick={()=>{
navigate("/dashboard");
  }}>Dashboard</button>
</div>
)
}
this is the right way to do client side routing

//lazy loading
Lazy loading in React is a technique that helps improve the performance of your application by loading components only when they are needed. This can significantly reduce the initial load time of your app, especially if you have large or complex components.

Here’s a quick overview of how to implement lazy loading in React:

React.lazy(): This function allows you to render a dynamic import as a regular component. It helps in code-splitting, which is central to lazy loading.
React.Suspense: This component lets you specify a loading indicator (fallback) while the lazy-loaded component is being fetched.moslty for asynchronous data fetching

Improved Performance: By loading components only when necessary, you can reduce the initial load time of your application.
Better User Experience: Users see a loading indicator instead of a blank screen while waiting for components to load.


The difference between export const and export default in JavaScript (and React) lies in how they are used and imported.

export const
Named Export: You can have multiple named exports in a single file.
Import Syntax: When importing, you need to use the exact name of the export and wrap it in curly braces.
JavaScript

// File: myModule.js
export const myFunction = () => { /* ... /* };//
export const myVariable = 42;

// // Importing
// import { myFunction, myVariable } from './myModule';
// export default
// Default Export: You can have only one default export per file.
// Import Syntax: When importing, you can choose any name for the default export, and no curly braces are needed.
// JavaScript

// // File: myModule.js
// const myFunction = () => { /* ... */ //};
// export default myFunction;

// // Importing
// import myFunction from './myModule';
// Key Differences
// Number of Exports:
// export const: Multiple named exports per file.
// export default: Only one default export per file.
// Import Syntax:
// export const: Requires curly braces and exact names.
// export default: No curly braces needed, and you can name the import anything.
// Use Cases:
// Use export const when you have multiple items to export from a module.
// Use export default when you want to export a single main item from a module.

// import React, { lazy, Suspense } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css'
// // Lazy load the components
// const Landing = lazy(() => import('./components/Landing'));
// const Dashboard = lazy(() => import('./components/Dashboard'));


// function App() {
//   return (
//     <div>
//    <BrowserRouter>
//    <Appbar />
// <Routes>
//   <Route path="/dashboard" element={<Suspense fallback={"loading..."}>{<Dashboard />}</Suspense>}/>
//    <Route path="/" element={<Suspense fallback={"loading..."}>{<Landing />}</Suspense>}/>
// </Routes>
//    </BrowserRouter>
//    </div>
//   )
// } 
// function Appbar(){
//   const navigate = useNavigate();
// return(
//   <div>
//   <button onClick={()=>{
// navigate("/");
//   }}>Landing page</button>
//         <button onClick={()=>{
// navigate("/dashboard");
//   }}>Dashboard</button>
// </div>
// )
// }

// export default App


/*
//prop drilling
Prop drilling in React refers to the process of passing data from a parent component down to deeply nested child components through multiple intermediary components, 
even if those intermediary components do not need the data themselves. This can lead to several issues, such as increased complexity, 
difficulty in maintaining the code, and potential performance problems


Challenges of Prop Drilling
Increased Complexity: As the component tree grows, managing the flow of props becomes more challenging and can clutter the codebase.
Maintenance Issues: Changes in the data structure or the need to pass additional props can require updates to multiple components.
Performance Concerns: Unnecessary re-renders can occur if intermediary components are updated due to prop changes they don’t actually use.
Solutions to Prop Drilling
To avoid prop drilling, you can use state management solutions like:

Context API: Provides a way to pass data through the component tree without having to pass props down manually at every level.
Redux: A state management library that helps manage the state of your application in a centralized store.
React Query: For managing server state and caching.

The React Context API is a powerful feature that allows you to share data across your component tree without having to pass props down manually at every level. This can help you avoid prop drilling and make your code cleaner and more maintainable.

How Context API Works
The Context API consists of three main components:

Context: Created using React.createContext(), it holds the data you want to share.
Provider: A component that wraps your application or part of it and provides the context value to its children.
Consumer: A component that subscribes to the context and uses the provided value.

Steps Explained:
Create a Context: const MyContext = createContext();
Provide the Context Value: Wrap your component tree with MyContext.Provider and pass the value you want to share.
Consume the Context Value: Use useContext(MyContext) in any component to access the context value.
Benefits of Using Context API
Avoid Prop Drilling: You can pass data directly to deeply nested components without passing props through every level.
Centralized State Management: Useful for managing global state like user authentication, themes, or settings.
Improved Code Readability: Makes your code cleaner and easier to maintain.
When to Use Context API
When you have data that needs to be accessed by many components at different levels of your component tree.

function App() {
  const [count ,setCount] = useState(0);
  //wrap anyone that wants to use the teleportedvalue inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}/>
      </CountContext.Provider>
   </div>
  )
} 
 function Count({setCount}){
  return(
    <div>
      <CountRenderer/>
      <Buttons setCount={setCount}/>
    </div>
    
  )

 }
 function CountRenderer(){
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
 }
 function Buttons({setCount}){
  const count = useContext(CountContext);
return(
  <div>
    <button onClick={()=>{
    setCount(count+1);
    }}>Increase</button>

<button onClick={()=>{
setCount(count-1);
}}>Decrease</button>

  </div>
)
 }











*/