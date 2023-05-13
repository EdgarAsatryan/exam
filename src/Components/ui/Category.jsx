import React from 'react'
import { Link } from 'react-router-dom'

export default function Category({handleFilter, filter}) {
  return (
    <section className='w-full h-auto pt-10 pb-7 bg-[#222222]'>
      <div className='w-[80%] h-full  flex flex-col justify-between items-start sm:justify-start md:w-[60%]'>
        <div className=''>
            <h2 className='text-white text-[44px] font-bold ml-[150px] mt-6 mb-5 sm:ml-[50px]'>SHOP BY CATEGORY</h2>
        </div>
        <div className='w-full h-full  flex items-center justify-center gap-[50px] ml-28 md:ml-10 '>
               <Link to="/products" className='w-full h-full flex items-center justify-center gap-[50px] ml-28 xl:flex-wrap'>
              <div className='flex flex-col items-center gap-3' onClick={() => handleFilter("Consoles")}>
                <div className='w-[300px] h-[350px] bg-[url(./photos/Cosoles.webp)] bg-center bg-cover bg-no-repeat rounded-2xl transform hover:scale-105 duration-700 cursor-pointer'></div>
                <p className='text-white text-2xl font-normal'>Consoles</p>
              </div>
              <div className='flex flex-col items-center gap-3' onClick={() => handleFilter("Accessories")}>
                <div className='w-[300px] h-[350px] bg-[url(./photos/Accessories.jpeg)] bg-center bg-cover bg-no-repeat rounded-2xl transform hover:scale-105 duration-700 cursor-pointer'></div>
                <p className='text-white text-2xl font-normal'>Accessories</p>
              </div>
              <div className='flex flex-col items-center gap-3' onClick={() => handleFilter("Controllers")}>
                <div className='w-[300px] h-[350px] bg-[url(./photos/Controllers.png)] bg-center bg-cover bg-no-repeat rounded-2xl transform hover:scale-105 duration-700 cursor-pointer'></div>
                <p className='text-white text-2xl font-normal'>Controllers</p>
              </div>
              </Link>
        </div>
      </div>
    </section>
  )
}
