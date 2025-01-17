import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='flex justify-between gap-5 mb-2'>
        <h1 className='font-bold'><span className='text-red-700 font-bold'>PH</span> Tube</h1>
        <button className='rounded-md text-[10px] p-1 bg-slate-400'>Sort by View</button>
        <button className='bg-red-600 text-[10px] h-[20px] w-[50px] rounded-md text-white'>Blog</button>
      </div>
      <hr />
      <div >
        <ul className='flex justify-center gap-3 mt-2'>
          <li className='flex items-center justify-center bg-gray-400 text-[10px] h-[20px] w-[50px] rounded-md'><a href="">All</a></li>
          <li className='bg-gray-400 text-[10px] h-[20px] w-[50px] rounded-md flex items-center justify-center'><a href=""></a>Music</li>
          <li className='bg-gray-400 flex items-center justify-center text-[10px] h-[20px] w-[50px] rounded-md'><a href=""></a>Comedy</li>
          <li className='bg-gray-400 flex items-center justify-center text-[10px] h-[20px] w-[50px] rounded-md'><a href=""></a>Drawing</li>
        </ul>
      </div>
      

      <div>
       <div className='flex gap-2'>
        <div className='mt-2 shadow-md w-[212px] h-[210px]'>
          <img className='w-[210px] h-[150px]' src="https://i.ibb.co/hdtZYbB/enchnting.jpg" alt="" />
          <h1 className='font-bold text-[10px] mb-3  '>Enchanted Harmonies</h1>
          <div className='flex'>
            <img className='rounded-full h-7' src="https://i.ibb.co/jh1q2F3/shopia.jpg" alt="" /> <h3 className='text-[10px] items-center flex ml-1'>Sophia Williams</h3></div>

        </div>
        <div className='mt-2 shadow-md w-[212px] h-[210px]'>
          <img className='w-[210px] h-[150px]' src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="" />
          <h1 className='font-bold text-[10px] mb-3  '>Shape of You</h1>
          <div className='flex'>
            <img className='rounded-full h-7' src="https://i.ibb.co/D9wWRM6/olivia.jpg" alt="" /> <h3 className='text-[10px] items-center flex ml-1'>Olivia Mitchell</h3></div>

        </div>
        <div className='mt-2 shadow-md w-[212px] h-[210px]'>
          <img className='w-[210px] h-[150px]' src="https://i.ibb.co/QPNzYVy/moonlight.jpg" alt="" />
          <h1 className='font-bold text-[10px] mb-3  '>Midnight Serenade</h1>
          <div className='flex'>
            <img className='rounded-full h-7' src="https://i.ibb.co/fDbPv7h/Noha.jpg" alt="" /> <h3 className='text-[10px] items-center flex ml-1'>Noah Walker</h3></div>

        </div>
       </div>
       <div className='flex gap-2'>
        <div className='mt-2 shadow-md w-[212px] h-[210px]'>
          <img className='w-[210px] h-[150px]' src="https://i.ibb.co/NTncwqH/luahg-at-pain.jpg" alt="" />
          <h1 className='font-bold text-[10px] mb-3  '>Laugh at My Pain</h1>
          <div className='flex'>
            <img className='rounded-full h-7' src="https://i.ibb.co/XVHM7NP/kevin.jpg" alt="" /> <h3 className='text-[10px] items-center flex ml-1'>Kevin Hart</h3></div>

        </div>
        <div className='mt-2 shadow-md w-[212px] h-[210px]'>
          <img className='w-[210px] h-[150px]' src="https://i.ibb.co/f9FBQwz/smells.jpg" alt="" />
          <h1 className='font-bold text-[10px] mb-3  '>Smells Like Teen Spirit</h1>
          <div className='flex'>
            <img className='rounded-full h-7' src="https://i.ibb.co/k4tkc42/oliviar-harris.jpg" alt="" /> <h3 className='text-[10px] items-center flex ml-1'>Oliver Harris</h3></div>

        </div>
        <div className='mt-2 shadow-md w-[212px] h-[210px]'>
          <img className='w-[210px] h-[150px]' src="https://i.ibb.co/Yc4p5gD/inside-amy.jpg" alt="" />
          <h1 className='font-bold text-[10px] mb-3  '>Inside Amy Schumer</h1>
          <div className='flex'>
            <img className='rounded-full h-7' src="https://i.ibb.co/YD2mqH7/amy.jpg" alt="" /> <h3 className='text-[10px] items-center flex ml-1'>Amy Schumer</h3></div>

        </div>
       </div>

       <div className='flex gap-2'>
        <div className='mt-2 shadow-md w-[212px] h-[210px]'>
          <img className='w-[210px] h-[150px]' src="https://i.ibb.co/5LRQkKF/stick-and-stones.jpg" alt="" />
          <h1 className='font-bold text-[10px] mb-3  '>Sticks & Stones</h1>
          <div className='flex'>
            <img className='rounded-full h-7' src="https://i.ibb.co/rdTZrCM/dev.jpg" alt="" /> <h3 className='text-[10px] items-center flex ml-1'>Dave Chappelle</h3></div>

        </div>
        <div className='mt-2 shadow-md w-[212px] h-[210px]'>
          <img className='w-[210px] h-[150px]' src="https://i.ibb.co/DRxB1Wm/sunris.jpg" alt="" />
          <h1 className='font-bold text-[10px] mb-3  '>Sunrise Reverie</h1>
          <div className='flex'>
            <img className='rounded-full h-7' src="https://i.ibb.co/YZN9rQZ/tina.jpg" alt="" /> <h3 className='text-[10px] items-center flex ml-1'>Tina Fey</h3></div>

        </div>
        <div className='mt-2 shadow-md w-[212px] h-[210px]'>
          <img className='w-[210px] h-[150px]' src="https://i.ibb.co/xgWL3vQ/kid-gorgeous.jpg" alt="" />
          <h1 className='font-bold text-[10px] mb-3  '>Kid Gorgeous</h1>
          <div className='flex'>
            <img className='rounded-full h-7' src="https://i.ibb.co/xsfkwN2/john.jpg" alt="" /> <h3 className='text-[10px] items-center flex ml-1'>John Mulaney</h3></div>

        </div>
       </div>
      </div>
    </>
  )
}

export default App
