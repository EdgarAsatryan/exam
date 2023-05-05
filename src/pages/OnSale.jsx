import React, { useEffect, useState } from 'react'
import {AiOutlineArrowUp} from "react-icons/Ai"
import {AiOutlineArrowDown} from "react-icons/Ai"
import dataBase from '../DataBase/DataBase'
export default function OnSale() {

  const [arrowDirection,setArrowDirection] = useState(true)
  const [category,setCategory] = useState(true)
  const [price,setPrice] = useState(true)
  const [filter,setFilter] = useState('')
  function handleChangeDirection() {
    setArrowDirection(!arrowDirection)

  }
  function handleChangeCategory() {
    setCategory(!category)
  }
  function handleChangePrice() {
    setPrice(!price)
  }
  function handleFilter(e) {
    setFilter(e)
  }
  const [users, setUsers] = useState([])
  useEffect(()=>{
    setUsers(dataBase)
  },[])

  return ( 
    <div className='w-full h-auto pb-16 bg-black flex items-center justify-center'>
      <div className='w-[80%] h-full flex flex-col gap-9'>
        <div><h2 className='text-white text-[80px] font-bold'>ON SALE</h2></div>
        <div className='flex'>
          <div className='flex flex-col gap-5'>
            <div>
              <h2 className='text-white text-3xl border-b-2 border-gray-600 w-[250px] pb-4'>Filter by</h2>
            </div>
            <div className='flex flex-col gap-5 border-b-2 border-gray-600 pb-4 w-[250px]'>
              <div className='flex justify-between items-center w-[250px] '>
                <button onClick={handleChangeCategory} className='text-white text-2xl flex justify-between items-center w-[250px]'><span>Category</span><span>{category ? "+" : "-"}</span></button>
              </div>
              <ul className={category ? 'hidden' : 'flex flex-col gap-3'}>
                <li onClick={() => handleFilter("")}><a href="#" className="text-white text-xl">All</a></li>
                <li onClick={() => handleFilter("Accessories")}><a href="#" className="text-white text-xl">Accessories</a></li>
                <li onClick={() => handleFilter("Controllers")}><a href="#" className="text-white text-xl">Controllers</a></li>
                <li onClick={() => handleFilter("Games")}><a href="#" className="text-white text-xl">Games</a></li>
                <li onClick={() => handleFilter("Consoles")}><a href="#" className="text-white text-xl">Consoles</a></li>
              </ul>
            </div>
            <div className='flex flex-col gap-5 border-b-2 border-gray-600 pb-4 w-[250px]'>
              <div className='flex justify-between items-center w-[250px] '>
                <button onClick={handleChangePrice} className='text-white text-2xl flex justify-between items-center w-[250px]'><span>Price</span><span>{price ? "+" : "-"}</span></button>
              </div>
              <div className={price ? 'hidden' : 'flex flex-col gap-3'}></div>
            </div>
            <button className= {filter.length <= 0  ? 'text-white text-xl hidden' : "text-white text-xl flex gap-2"} onClick={() => setFilter("") }><span>Clear Filters</span><span>X</span></button>
          </div>
          <div className='flex flex-col w-[100%] items-end gap-5'>
            <div className='w-[32.3%]'>
              <div className={arrowDirection ? 'text-white text-xl hidden' : 'w-[82%] h-auto p-2 bg-black rounded-lg block text-white'}>
              <ul className='text-white text-xl flex flex-col gap-2'>
                  <li>Newest</li>
                  <li>Price (high to low)</li>
                  <li>Price (low to high)</li>
                </ul>
              </div>
              <button onClick={handleChangeDirection} className='flex justify-between items-center p-4 w-[250px] h-[40px] text-white border-2'>
                <span className='text-[20px]'>Sort By</span>
                <span>{arrowDirection ? <AiOutlineArrowDown className='text-[22px]'/> : <AiOutlineArrowUp className='text-[22px]'/>}</span>
              </button>
            </div>
            <div className='w-[100%] grid grid-cols-3 gap-6'>
            {
              users?.filter((item) => filter.length > 0 ? item.category === filter : item)?.map((val) => {
                  return (
                    <div key={val.id} className='flex flex-col items-center gap-3'>
                    <img className='transform hover:scale-105 w-[200px] h-[200px]' src={val.images} alt="" />
                    <span className='text-xl text-gray-200 uppercase ml-1'>{val.title}</span>
                    <div className='flex gap-3 text-white'>
                      <span className='text-xl'>{val.sale > 0 ? <del>{"$"+val.price}</del> : "$"+val.price}</span>
                      <span className='text-xl'>{val.sale > 0 ? "$"+val.sale : null}</span>
                    </div>
                    <button className='w-[120px] h-[40px] bg-[#8355e4] p-2 flex justify-center items-center rounded-3xl  text-white font-semibold'>Add To Chart</button>
                    </div>
                  ) 
              })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
