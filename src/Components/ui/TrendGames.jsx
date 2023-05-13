import React, { useState } from 'react'
import dataBase from '../../DataBase/DataBase'
import {AiOutlineArrowLeft} from "react-icons/Ai"
import {AiOutlineArrowRight} from "react-icons/Ai"
import { Link } from 'react-router-dom'
export default function TrendGames({handleFilter,addToCart}) {

  const [slide,setSlide] = useState(0)

  let arr = []
  console.log(arr);
  dataBase?.map((value) => {
      value.category === "Games" && arr.push(value)
  })
  function handleRight() {
    setSlide(slide > arr.length - 4 ? 0 : slide + 1)
    console.log(slide);
  }
  function handleLeft() {
    setSlide(slide > 0 ? slide - 1 : arr.length - 3)
    console.log(slide);
  }

  return (
    <section className='w-full h-auto bg-black flex flex-col justify-center items-center p-[100px]'>
    <div className='w-[90%] h-full flex justify-between mt-24'>
        <h2 className='text-white text-[40px] font-bold sm:mr-5 smm:text-[22px] smm:mr-5'>TRENDING GAMES</h2>
        <Link to="/products">
        <button onClick={() => handleFilter("Games")} className='w-[120px] h-[40px] bg-white p-2 flex justify-center items-center rounded-3xl  text-[#8355e4] font-semibold'>View All</button>
        </Link>
    </div>
    <div className='flex mt-10'>
    <button className='' onClick={handleLeft}><AiOutlineArrowLeft className='text-white text-[40px]'/></button>
      <div className=' flex w-[300px] h-[450px] flex-col items-center overflow-hidden justify-between'>
        <div className='overflow-hidden'>
        <img className='w-[250px] h-[250px] duration-500 transform hover:scale-105' src={arr[slide].images} alt="" />
        </div>
        <h2 className='text-white text-[30px] w-[250px] text-center'>{arr[slide].title}</h2>
        <div className='flex gap-3 text-white'>
          <span className='text-xl'>{arr[slide].sale > 0 ? <del>{"$"+arr[slide].price}</del> : "$"+arr[slide].price}</span>
          <span className='text-xl'>{arr[slide].sale > 0 ? "$"+arr[slide].sale : null}</span>
        </div>
        <button onClick={() => addToCart(arr[slide])} className='w-[120px] h-[40px] bg-[#8355e4] p-2 flex justify-center items-center rounded-3xl  text-white font-semibold'>Add To Chart</button>
      </div>
      <div className=' flex w-[300px] h-[450px] flex-col items-center overflow-hidden justify-between md:hidden'>
        <div className='overflow-hidden'>
        <img className='w-[250px] h-[250px] duration-500 transform hover:scale-105' src={arr[slide+1].images} alt="" />
        </div>
        <h2 className='text-white text-[30px] w-[250px] text-center'>{arr[slide+1].title}</h2>
        <div className='flex gap-3 text-white'>
          <span className='text-xl'>{arr[slide+1].sale > 0 ? <del>{"$"+arr[slide+1].price}</del> : "$"+arr[slide+1].price}</span>
          <span className='text-xl'>{arr[slide+1].sale > 0 ? "$"+arr[slide+1].sale : null}</span>
        </div>
        <button onClick={() => addToCart(arr[slide+1])} className='w-[120px] h-[40px] bg-[#8355e4] p-2 flex justify-center items-center rounded-3xl  text-white font-semibold'>Add To Chart</button>
      </div>
      <div className=' flex w-[300px] h-[450px] flex-col items-center overflow-hidden justify-between lg:hidden'>
        <div className='overflow-hidden'>
        <img className='w-[250px] h-[250px] duration-500 transform hover:scale-105' src={arr[slide+2].images} alt="" />
        </div>
        <h2 className='text-white text-[30px] w-[250px] text-center'>{arr[slide+2].title}</h2>
        <div className='flex gap-3 text-white'>
          <span className='text-xl'>{arr[slide+2].sale > 0 ? <del>{"$"+arr[slide+2].price}</del> : "$"+arr[slide+2].price}</span>
          <span className='text-xl'>{arr[slide+2].sale > 0 ? "$"+arr[slide+2].sale : null}</span>
        </div>
        <button onClick={() => addToCart(arr[slide+2])} className='w-[120px] h-[40px] bg-[#8355e4] p-2 flex justify-center items-center rounded-3xl  text-white font-semibold'>Add To Chart</button>
      </div>
    <button  onClick={handleRight}><AiOutlineArrowRight className='text-white text-[40px]'/></button>
    </div>
    </section>
  )
}
