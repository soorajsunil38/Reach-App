import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function AddCount(){
    setCount(count + 1)
  }

  function DeCount(){
    if(count > 0){
    setCount(count - 1)
    }
  }

  function Incfiv(){
    setCount(count + 5)
  }

  return(
    <div className='flex flex-col h-screen bg-slate-700 justify-center items-center'>
      <div className=" bg-slate-400 text-center p-8 shadow-2xl rounded-lg">
        <h1 className='font-bold text-2xl'>Count: {count}</h1><br></br>
        <button onClick={AddCount} className='h-10 w-32 rounded-full bg-teal-900 text-white hover:bg-teal-800'>Increment</button>&nbsp;&nbsp;
        <button onClick={DeCount} className='h-10 w-32 rounded-full  bg-teal-900 text-white hover:bg-teal-800'>Decrement</button>&nbsp;&nbsp;
        <button onClick={Incfiv} className='h-10 w-32 rounded-full  bg-teal-900 text-white hover:bg-teal-800'>Increment 5</button>
      </div>
    </div>
  )
}

export default App
