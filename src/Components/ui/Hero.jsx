import React from 'react'

export default function Hero() {
  return (
    <section className='w-full h-screen flex justify-center items-center bg-[url(./photos/image.jpg)] bg-cover bg-center bg-no-repeat'>
        <div className='w-[80%] h-full flex  items-center relative'>
            <div className='w-[60%] h-[60%] bg-[#8355e4] rounded-[30px] flex flex-col gap-5 justify-center p-[70px] z-10 absolute left-2 top-30  shadow-2xl'>
                <h3 className='text-white text-2xl font-normal'>Power up your game</h3>
                <h2 className='text-white text-[44px] font-bold'>CYBER KID <br/> INFINITE</h2>
                <h3 className='text-white text-2xl font-normal'>Now Available on PC & Console</h3>
                <button className='w-[120px] h-[40px] bg-white p-2 flex justify-center items-center rounded-3xl  text-[#8355e4] font-semibold'>Buy Now</button>
            </div>
            <div className='w-[42%] h-[90%] rounded-3xl bg-[url(./photos/Cyber.webp)] bg-cover bg-center bg-no-repeat absolute right-20 -bottom-16 shadow-2xl'>
            </div>
        </div>
    </section>
    )
}
