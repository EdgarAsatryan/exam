import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className='w-full h-screen bg-[url(./photos/cave1.webp)] relative bg-center bg-cover bg-no-repeat'>
      <div className='flex items-center justify-center relative  w-full h-full'>
        <p className='text-white text-[120px] top-[27%] left-[27%] font-bold mb-[150px] absolute'>Where Page ?</p>
        <p className='text-xl font-bold text-white absolute left-[32%] top-[55%]'>ERROR 404</p>
      <div className='w-[50%] bottom-0 h-[60%] bg-[url(./photos/caveman.webp)] absolute bg-center bg-no-repeat bg-cover'></div>
      <Link to="/">
        <button className='border-yellow-500 border-b-4 pb-1 text-white text-2xl font-bold absolute top-[85%] left-[63%]'>Take Me Home</button>
      </Link>
      </div>
    </section>
  )
}
