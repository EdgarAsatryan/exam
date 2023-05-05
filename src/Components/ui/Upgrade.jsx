import React, { useState } from 'react'
import dataBase from '../../DataBase/DataBase'
import {AiOutlineArrowLeft} from "react-icons/Ai"
import {AiOutlineArrowRight} from "react-icons/Ai"
export default function Upgrade() {

  const [slide,setSlide] = useState(0)

  let arr = []
  dataBase?.map((value) => {
      value.category === "Accessories" && arr.push(value)
  })
  function handleRight() {
    setSlide(slide > arr.length - 5 ? 0 : slide + 1)
    console.log(slide);
  }
  function handleLeft() {
    setSlide(slide > 0 ? slide - 1 : arr.length - 4)
    console.log(slide);
  }

  return (
    <section className='w-full h-[120vh] bg-black flex flex-col justify-center items-center p-[100px]'>
    <div className='w-[90%] h-full flex justify-between mt-24'>
        <h2 className='text-white text-[40px] font-bold'>UPGRADE YOUR GEAR</h2>
        <button className='w-[120px] h-[40px] bg-white p-2 flex justify-center items-center rounded-3xl  text-[#8355e4] font-semibold'>View All</button>
    </div>
    <div className='flex gap-4 mt-10'>
    <button className='' onClick={handleLeft}><AiOutlineArrowLeft className='text-white text-[40px] mr-5'/></button>
      <div className=' flex w-[300px] h-[450px] flex-col items-center overflow-hidden justify-between'>
        <div className='overflow-hidden'>
        <img className='w-[250px] h-[250px] duration-500 transform hover:scale-105' src={arr[slide].images} alt="" />
        </div>
        <h2 className='text-white text-[30px] w-[250px] text-center'>{arr[slide].title}</h2>
        <div className='flex gap-3 text-white'>
          <span className='text-xl'>{arr[slide].sale > 0 ? <del>{"$"+arr[slide].price}</del> : "$"+arr[slide].price}</span>
          <span className='text-xl'>{arr[slide].sale > 0 ? "$"+arr[slide].sale : null}</span>
        </div>
        <button className='w-[120px] h-[40px] bg-[#8355e4] p-2 flex justify-center items-center rounded-3xl  text-white font-semibold'>Add To Chart</button>
      </div>
      <div className=' flex w-[300px] h-[450px] flex-col items-center overflow-hidden justify-between'>
        <div className='overflow-hidden'>
        <img className='w-[250px] h-[250px] duration-500 transform hover:scale-105' src={arr[slide+1].images} alt="" />
        </div>
        <h2 className='text-white text-[30px] w-[250px] text-center'>{arr[slide+1].title}</h2>
        <div className='flex gap-3 text-white'>
          <span className='text-xl'>{arr[slide+1].sale > 0 ? <del>{"$"+arr[slide+1].price}</del> : "$"+arr[slide+1].price}</span>
          <span className='text-xl'>{arr[slide+1].sale > 0 ? "$"+arr[slide+1].sale : null}</span>
        </div>
        <button className='w-[120px] h-[40px] bg-[#8355e4] p-2 flex justify-center items-center rounded-3xl  text-white font-semibold'>Add To Chart</button>
      </div>
      <div className=' flex w-[300px] h-[450px] flex-col items-center overflow-hidden justify-between'>
        <div className='overflow-hidden'>
        <img className='w-[250px] h-[250px] duration-500 transform hover:scale-105' src={arr[slide+2].images} alt="" />
        </div>
        <h2 className='text-white text-[30px] w-[250px] text-center'>{arr[slide+2].title}</h2>
        <div className='flex gap-3 text-white'>
          <span className='text-xl'>{arr[slide+2].sale > 0 ? <del>{"$"+arr[slide+2].price}</del> : "$"+arr[slide+2].price}</span>
          <span className='text-xl'>{arr[slide+2].sale > 0 ? "$"+arr[slide+2].sale : null}</span>
        </div>
        <button className='w-[120px] h-[40px] bg-[#8355e4] p-2 flex justify-center items-center rounded-3xl  text-white font-semibold'>Add To Chart</button>
      </div>
      <div className=' flex w-[300px] h-[450px] flex-col items-center overflow-hidden justify-between'>
        <div className='overflow-hidden'>
        <img className='w-[250px] h-[250px] duration-500 transform hover:scale-105' src={arr[slide+3].images} alt="" />
        </div>
        <h2 className='text-white text-[30px] w-[250px] text-center'>{arr[slide+3].title}</h2>
        <div className='flex gap-3 text-white'>
          <span className='text-xl'>{arr[slide+3].sale > 0 ? <del>{"$"+arr[slide+3].price}</del> : "$"+arr[slide+3].price}</span>
          <span className='text-xl'>{arr[slide+3].sale > 0 ? "$"+arr[slide+3].sale : null}</span>
        </div>
        <button className='w-[120px] h-[40px] bg-[#8355e4] p-2 flex justify-center items-center rounded-3xl  text-white font-semibold'>Add To Chart</button>
      </div>
    <button  onClick={handleRight}><AiOutlineArrowRight className='text-white text-[40px] ml-5'/></button>
    </div>
    </section>
  )
}
