import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
    <section className='w-full h-screen bg-fixed flex justify-center items-center bg-[url(./photos/background.webp)] bg-cover bg-center bg-no-repeat'>
        <div className='w-[80%] h-full flex  items-center relative'>
            <div className='w-[60%] h-[60%] bg-[#8355e4] rounded-[30px] flex flex-col gap-6 justify-center p-[70px] z-10 absolute left-2 top-30  shadow-2xl sm:gap-4 items-start md:p-2 md:h-[40%]'>
                <h3 className='text-white text-2xl font-normal sm:text-xl '>Power up your game</h3>
                <h2 className='text-white text-[44px] font-bold md:text-3xl text-white; sm:text-2xl'>CYBER KID <br/> INFINITE</h2>
                <h3 className='text-white text-2xl font-normal sm:text-xl'>Now Available on PC & Console</h3>
                <Link to='/products'>
                <button className='w-[120px] h-[40px] bg-white p-2 flex justify-center items-center rounded-3xl  text-[#8355e4] font-semibold sm:w-[100px]'>Buy Now</button>
                </Link>
            </div>
            <div className='w-[42%] h-[90%] rounded-3xl bg-[url(./photos/Cyber.webp)] bg-cover bg-center bg-no-repeat absolute right-20 -bottom-16 shadow-2xl md:h-[45%] md:w-[60%] left-[40%] top-[30.5%]'>
            </div>
        </div>
    </section>
    )
}
