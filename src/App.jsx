import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <div className='flex justify-between gap-5'>
        <h1 className='font-bold'><span className='text-red-700 font-bold'>PH</span> Tube</h1>
        <button className='rounded-md text-[10px] p-1 bg-slate-400'>Sort by View</button>
        <button className='bg-red-600 text-[10px] h-[20px] w-[50px] rounded-md'>Blog</button>
      </div>
      <div >
        <ul className='flex justify-center gap-3 mt-2'>
          <li className='flex items-center justify-center bg-gray-400 text-[10px] h-[20px] w-[50px] rounded-md'><a href="">All</a></li>
          <li className='bg-gray-400 text-[10px] h-[20px] w-[50px] rounded-md flex items-center justify-center'><a href=""></a>Music</li>
          <li className='bg-gray-400 flex items-center justify-center text-[10px] h-[20px] w-[50px] rounded-md'><a href=""></a>Comedy</li>
          <li className='bg-gray-400 flex items-center justify-center text-[10px] h-[20px] w-[50px] rounded-md'><a href=""></a>Drawing</li>
        </ul>
      </div>
    </>
  )
}

export default App
