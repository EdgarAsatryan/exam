import React from 'react'

export default function Category() {
  return (
    <section className='w-full h-screen bg-[#222222]'>
      <div className='w-[80%] h-full flex flex-col justify-between items-start'>
        <div className=''>
            <h2 className='text-white text-[44px] font-bold ml-36 mt-8'>SHOP BY CATEGORY</h2>
        </div>
        <div className='w-full h-full flex items-center justify-center gap-[50px] ml-28'>
            <div className='flex flex-col items-center gap-3'>
                <div className='w-[300px] h-[350px] bg-[url(./photos/Cosoles.webp)] bg-center bg-cover bg-no-repeat rounded-2xl transform hover:scale-105 duration-700 cursor-pointer'></div>
                <p className='text-white text-2xl font-normal'>Consoles</p>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <div className='w-[300px] h-[350px] bg-[url(./photos/Accessories.jpeg)] bg-center bg-cover bg-no-repeat rounded-2xl transform hover:scale-105 duration-700 cursor-pointer'></div>
                <p className='text-white text-2xl font-normal'>Accessories</p>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <div className='w-[300px] h-[350px] bg-[url(./photos/Controllers.png)] bg-center bg-cover bg-no-repeat rounded-2xl transform hover:scale-105 duration-700 cursor-pointer'></div>
                <p className='text-white text-2xl font-normal'>Controllers</p>
              </div>
        </div>
      </div>
    </section>
  )
}
