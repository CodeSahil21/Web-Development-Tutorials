
//Flex:use to position elements
/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{display:"flex",justifyContent:"space-between"}}>
      <div style={{background:"red"}}>Hi</div>
      <div style={{background:"green"}}>Hi</div>
      <div style={{background:"blue"}}>Hi</div>
     </div>
    </>
  )
}

export default App
*/

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
     <div style={{display:"flex",justifyContent:"space-between"}}>
      <div style={{background:"red"}}>Hi</div>
      <div style={{background:"green"}}>Hi</div>
      <div style={{background:"blue"}}>Hi</div>
      <div style={{background:"yellow"}}>Hi</div>
     </div>
// suing tailwind
     <div className='flex justify-center'>
      <div className='bg-red-500'>Hi</div>
      <div className='bg-blue-500'>Hi</div>
      <div className='bg-green-500'>Hi</div>
      <div className='bg-yellow-500'>Hi</div>
     </div>
    </>
  )
}

export default App
*/

//GRID : adds responsiveness
/*

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
  
     <div className='grid grid-cols-10 '>
      <div className='bg-red-500 col-span-4'>Hi</div>
      <div className='bg-blue-500 col-span-4'>Hi</div>
      <div className='bg-green-500 col-span-2'>Hi</div>
     </div>
    </>
  )
}

export default App
*/

//responsiveness
/*
sm:640px
md:768px
lg:1024
xl:1280
zxl:1536


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
  
     <div className='bg-red-500 md:bg-blue-500'>
      Hi there
     </div>
    </>
  )
}

export default App
*/