// import './App.css'
// import { networkAtom, jobsAtom, notificationsAtom, messagingAtom } from './component/Atoms/atoms'
// import { RecoilRoot, useRecoilValue } from 'recoil'

// function App() {
//     return(
//       <div>
//         <RecoilRoot>
//           <MainApp/>
//         </RecoilRoot>
//       </div>
//     )
// }
// function MainApp(){
//   const networkCount =  useRecoilValue(networkAtom); 
//   const jobsAtomCount = useRecoilValue(jobsAtom);
//   const messageCount =  useRecoilValue(messagingAtom)
//   const notificationAtomCount = useRecoilValue(notificationsAtom);


//   return (
//    <div>
// <button>Home</button>
 
// <button>My network({networkCount >=100 ? "99+":networkCount})</button>
// <button>jobs({jobsAtomCount})</button>
// <button>Messaging({messageCount})</button>
// <button>Notification({notificationAtomCount})</button>

// <button>Me</button>

//    </div>
//   )
// }

// export default App
// exmaple useRecoilState()
/*
Global State Management: When you need to manage state that is shared across multiple components, useRecoilState can be used to create and update global state. For example, you can create an atom to hold user authentication status and use useRecoilState to read and update this status from different components.
Derived State: You can use useRecoilState with selectors to manage derived state. Selectors can compute derived state based on atoms or other selectors. For instance, you might have an atom for temperature in Fahrenheit and a selector to convert it to Celsius. Using useRecoilState, you can read and update both the atom and the selector.
Form State Management: Managing form state can be simplified with useRecoilState. Each form field can be represented by an atom, and useRecoilState can be used to read and update the field values. This approach ensures that the form state is centralized and easily accessible.
Asynchronous Data Handling: When dealing with asynchronous data, you can use useRecoilState to manage the state of the data. For example, you can create an atom to hold the data fetched from an API and use useRecoilState to update the atom once the data is fetched

import './App.css'
import { networkAtom, jobsAtom, notificationsAtom, messagingAtom } from './component/Atoms/atoms'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'

function App() {
    return(
      <div>
        <RecoilRoot>
          <MainApp/>
        </RecoilRoot>
      </div>
    )
}
function MainApp(){
  const networkCount =  useRecoilValue(networkAtom); 
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messageCount =  useRecoilValue(messagingAtom)
  const[ notificationAtomCount,setnotificationCount  ]= useRecoilState(notificationsAtom);


  return (
   <div>
<button>Home</button>
 
<button>My network({networkCount >=100 ? "99+":networkCount})</button>
<button>jobs({jobsAtomCount})</button>
<button>Messaging({messageCount})</button>
<button onClick={()=>{
  setnotificationCount(notificationAtomCount=>notificationAtomCount+1)
}}>Notification({notificationAtomCount})</button>

<button>Me</button>

   </div>
  )
}

export default App



//Usecase of useSetRecoilState
The useSetRecoilState hook in Recoil is used to update the value of a Recoil state (atom or writable selector) without subscribing to it. This is particularly useful when you want to update the state without causing the component to re-render when the state changes. Here are some common use cases:

Event Handlers: When you need to update the state in response to user actions, such as button clicks or form submissions, useSetRecoilState can be used to update the state without re-rendering the component.
Background Tasks: For tasks that run in the background, such as fetching data from an API or processing data, useSetRecoilState can be used to update the state once the task is complete.
Global State Updates: When you need to update global state from a component that doesn’t need to read the state, useSetRecoilState is ideal. For example, you might have a component that logs out a user and needs to update the authentication state.


import './App.css'
import { networkAtom, jobsAtom, notificationsAtom, messagingAtom } from './component/Atoms/atoms'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

function App() {
    return(
      <div>
        <RecoilRoot>
          <MainApp/>
        </RecoilRoot>
      </div>
    )
}
function MainApp(){
  const networkCount =  useRecoilValue(networkAtom); 
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messageCount =  useRecoilValue(messagingAtom)
  const notificationAtomCount= useRecoilValue(notificationsAtom);


  return (
   <div>
<button>Home</button>
 
<button>My network({networkCount >=100 ? "99+":networkCount})</button>
<button>jobs({jobsAtomCount})</button>
<button>Messaging({messageCount})</button>
<button>Notification({notificationAtomCount})</button>

<Buttonupdater/>

   </div>
  )
}
function Buttonupdater(){
  const setnotificationCount = useSetRecoilState(notificationsAtom);
  return (
    <div>
      <button onClick={()=>{
  setnotificationCount(notificationAtomCount=>notificationAtomCount+1)
}}>Me</button>

    </div>
  )
}


//selector
import { atom,selector } from "recoil";
export const networkAtom = atom({
    key:"networkAtom",
    default:102
});
export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
});
export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:12
});
export const messagingAtom = atom({
    key:"messagingAtom",
    default:0
});
 export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get}) =>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messageAtomCount = get(messagingAtom);
        return networkAtomCount +jobsAtomCount+notificationsAtomCount+messageAtomCount;
    }
 })

 import './App.css'
import { networkAtom, jobsAtom, notificationsAtom, messagingAtom, totalNotificationSelector } from './component/Atoms/atoms'
import { RecoilRoot, useRecoilValue } from 'recoil'

function App() {
    return(
      <div>
        <RecoilRoot>
          <MainApp/>
        </RecoilRoot>
      </div>
    )
}
function MainApp(){
  const networkCount =  useRecoilValue(networkAtom); 
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messageAtomCount =  useRecoilValue(messagingAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const totalNotifications = useRecoilValue(totalNotificationSelector);


  return (
   <div>
<button>Home</button>
 
<button>My network({networkCount >=100 ? "99+":networkCount})</button>
<button>jobs({jobsAtomCount})</button>
<button>Messaging({messageAtomCount})</button>
<button>Notification({notificationsAtomCount})</button>

<button>Me({totalNotifications})</button>

   </div>
  )
}

export default App
*/