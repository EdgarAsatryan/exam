import React from 'react'

export default function Sale() {
  return (
    <section className='w-full h-[115vh] bg-black relative'>
        <div className="w-[550px] h-[350px] bg-[#8355e4] flex flex-col items-center gap-2 justify-between p-5 rounded-[20px] shadow-xl shadow-gray-600 absolute top-24 left-[280px] z-10">
            <p className="text-white text-2xl font-normal">THIS WEEK'S DEALS</p>
            <h2 className='text-white text-[104px] font-bold'>10%</h2>
            <h3 className='text-white text-[30px] font-bold'>off all games</h3>
            <button className='w-[120px] h-[40px] bg-white p-2 flex justify-center items-center rounded-3xl  text-[#8355e4] font-semibold'>Shop Now</button>
        </div>
        <div>
          <div className='w-[400px] h-[500px] bg-[url(./photos/Kira.webp)] bg-center bg-cover bg-no-repeat shadow-lg shadow-gray-600 absolute top-16 left-[200px] rounded-3xl'></div>
          <div className='w-[350px] h-[500px] bg-[url(./photos/Dead.webp)] bg-center bg-cover bg-no-repeat shadow-lg shadow-gray-600 rounded-3xl absolute top-[230px] left-[600px] '></div>
          <div className='w-[400px] h-[500px] bg-[url(./photos/Chronosplit.webp)] bg-center bg-cover bg-no-repeat shadow-lg shadow-gray-600 absolute right-[230px] top-[120px] rounded-3xl'></div>
        </div>
    </section>
  )
}
