import React from 'react'

export default function Sale() {
  return (
    <section className='w-full h-[100vh] bg-black relative'>
      <div className='h-full'>
        <div className="
        w-[550px] h-[350px] bg-[#8355e4] flex flex-col items-center gap-2 justify-between p-5 rounded-[20px] shadow-xl shadow-gray-600 absolute top-24 left-[280px] z-10 lg:w-[450px] md:left-[100px] md:top-36 sm:left-[50px] smm:top-[170px] smm:w-[300px] smm:h-[300px]">
            <p className="text-white text-2xl font-normal">THIS WEEK'S DEALS</p>
            <h2 className='text-white text-[104px] font-bold'>10%</h2>
            <h3 className='text-white text-[30px] font-bold'>off all games</h3>
        </div>
        <div>
          <div className='w-[400px] h-[500px] bg-[url(./photos/Kira.webp)] bg-center bg-cover bg-no-repeat shadow-lg shadow-gray-600 absolute top-16 left-[200px] rounded-3xl
           xl:left-[80px] lg:left-[10px] smm:top-[150px] smm:w-[200px] smm:h-[300px]'></div>
          <div className='w-[350px] h-[500px] bg-[url(./photos/Dead.webp)] bg-center bg-cover bg-no-repeat shadow-lg shadow-gray-600 rounded-3xl absolute top-[230px] left-[600px] xl:left-[480px] lg:left-[380px] smm:top-[340px] smm:w-[200px] smm:left-[150px] smm:h-[300px]'></div>
          <div className='w-[400px] h-[500px] bg-[url(./photos/Chronosplit.webp)] bg-center bg-cover bg-no-repeat shadow-lg shadow-gray-600 rounded-3xl absolute top-[120px] left-[800px] xl:left-[680px] lg:left-[580px] md:left-[200px] smm:top-[300px] smm:left-[35px] smm:w-[200px] smm:h-[300px]'></div>
        </div>
      </div>
    </section>
  )
}
