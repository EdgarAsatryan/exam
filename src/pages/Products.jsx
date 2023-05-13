import React, { useEffect, useState } from 'react'
import {AiOutlineArrowUp} from "react-icons/Ai"
import {AiOutlineArrowDown} from "react-icons/Ai"
import dataBase from '../DataBase/DataBase'

export default function Products({filter,handleFilter,setFilter,addToCart}) {

  const [arrowDirection,setArrowDirection] = useState(true)
  const [category,setCategory] = useState(true)
  const [price,setPrice] = useState(false)
  const [products, setProducts] = useState([...dataBase]);
  const [priceFrom,setPriceFrom] = useState(0)
  const [priceTo,setPriceTo] = useState(2000)


  function handleChangeDirection() {
    setArrowDirection(!arrowDirection)
  }
  function handleChangeCategory() {
    setCategory(!category)
  }
  function handleChangePrice() {
    setPrice(!price)
  }

  const sortPrice = () => {
    setProducts([...dataBase]);
  };
  const sortPriceByFromLowToHigh = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };
  const sortPriceByFromHighToLow = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  return ( 
    <div className='w-full h-auto pb-16 bg-black flex items-center justify-center'>
      <div className='w-[80%] h-full flex flex-col gap-9'>
        <div><h2 className='text-white text-[80px] font-bold'>SHOP ALL</h2></div>
        <div className='flex  lg:flex-col'>
          <div className='flex flex-col gap-5'>
            <div>
              <h2 className='text-white text-3xl border-b-2 border-gray-600 w-[250px] pb-4'>Filter by</h2>
            </div>
            <div className='flex flex-col gap-5 border-b-2 border-gray-600 pb-4 w-[250px]'>
              <div className='flex justify-between items-center w-[250px] '>
                <button onClick={handleChangeCategory} className='text-white text-2xl flex justify-between items-center w-[250px]'><span>Category</span><span>{category ? "+" : "-"}</span></button>
              </div>
              <ul className={category ? 'hidden' : 'flex flex-col gap-3'}>
                <li onClick={() => handleFilter('')}><a href="#" className="text-white text-xl">All</a></li>
                <li onClick={() => handleFilter("Consoles")}><a href="#" className="text-white text-xl">Consoles</a></li>
                <li onClick={() => handleFilter("Games")}><a href="#" className="text-white text-xl">Games</a></li>
                <li onClick={() => handleFilter("Controllers")}><a href="#" className="text-white text-xl">Controllers</a></li>
                <li onClick={() => handleFilter("Accessories")}><a href="#" className="text-white text-xl">Accessories</a></li>
              </ul>
            </div>
            <div className={price ? 'flex flex-col gap-5 border-b-2 border-gray-600 pb-4 w-[250px]' : 'flex flex-col gap-5 border-b-2 border-gray-600 w-[250px]'}>
              <div className='flex justify-between items-center w-[250px] '>
                <button onClick={handleChangePrice} className='text-white text-2xl flex justify-between items-center w-[250px]'><span>Price</span><span>{price ? "-" : "+"}</span>
                </button>
              </div>
                <div className={price ? "flex justify-evenly" : "hidden"}>
                  <input className={price ? "p-2 w-[100px] h-[30px] border-2 border-white bg-black text-white text-xl" : "hidden"} value={priceFrom > 0 && priceFrom } onChange={(e) => setPriceFrom(e.target.value)} placeholder='From' type="number" />
                  <input className={price ? "p-2 w-[100px] h-[30px] border-2 border-white bg-black text-white text-xl" : "hidden"} value={priceTo <= 1200 && priceTo} onChange={(e) => setPriceTo(e.target.value)} placeholder='To' type="number" />
                </div>
              <div className={price ? 'hidden' : 'flex flex-col gap-3'}></div>
            </div>
              <button className= {filter.length > 0 || priceFrom > 0 || priceTo < 2000 ? "text-white text-xl flex gap-2"  : 'hidden'} onClick={() => {setFilter(""),setPriceFrom(0),setPriceTo(2000)} }><span>Clear Filters</span><span>X</span></button>
          </div>
          <div className='flex flex-col w-[100%] items-end gap-5'>
          <div className='w-[40.3%] flex lg:self-start lg:w-[200%]'>
              <div className={arrowDirection ? 'hidden' : 'w-[82%] h-auto p-2 bg-black rounded-lg block text-white'}>
              <ul className='text-white text-xl flex flex-col gap-2 w-[500px] '>
                  <li><button onClick={sortPrice}>Sort By</button></li>
                  <li><button onClick={sortPriceByFromHighToLow}>Price (high to low)</button></li>
                  <li><button onClick={sortPriceByFromLowToHigh}>Price (low to high)</button></li>
                </ul>
              </div>
            </div>
            <button onClick={handleChangeDirection} className='flex lg:self-start justify-between items-center p-4 w-[250px] h-[40px] text-white border-2'>
                <span className='text-[20px]'>Sort By</span>
                <span>{arrowDirection ? <AiOutlineArrowDown className='text-[22px]'/> : <AiOutlineArrowUp className='text-[22px]'/>}</span>
              </button>
            <div className='w-[100%] grid grid-cols-3 gap-6 md:grid-cols-2 smm:grid-cols-1'>
            {
              products?.filter((item) => filter.length > 0 ? item.category === filter : item)?.filter((item) =>  item.price >= priceFrom && item.price <= priceTo)?.map((val) => {
                  return (
                    <div key={val.id} className='flex flex-col items-center gap-3'>
                    <img className='transform hover:scale-105 w-[200px] h-[200px]' src={val.images} alt="" />
                    <span className='text-xl text-gray-200 uppercase ml-1'>{val.title}</span>
                    <div className='flex gap-3 text-white'>
                      <span className='text-xl'>{val.sale > 0 ? <del>{"$"+val.price}</del> : "$"+val.price}</span>
                      <span className='text-xl'>{val.sale > 0 ? "$"+val.sale : null}</span>
                    </div>
                    <button onClick={() => addToCart(val)} className='w-[120px] h-[40px] bg-[#8355e4] p-2 flex justify-center items-center rounded-3xl  text-white font-semibold'>Add To Chart</button>
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