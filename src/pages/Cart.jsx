import React from 'react'
import { useState } from 'react'

export default function Cart({cartList, addToCart, handleDecrementQuantity}) {
  const [cnty, setCnty] = useState(1)
  return (
    <section className='bg-black w-full min-h-screen flex flex-col pb-4 justify-center items-center'>
      <div className='w-[80%] min-h-[90%]'>
        <div className='flex felx-col gap-2'>
          <p className='text-white text-2xl border-b-2 border-gray-500 w-full pb-2'>My cart</p>
        </div>
        {
          cartList.length === 0 ?
          <div className='min-h-full flex items-center justify-center'>
            <p className='text-white text-3xl'>CART IS EMPTY</p>
          </div>
          :
          <div className='w-[100%] grid grid-cols-3 gap-6 pt-6 pb-6 min-height-full sm:grid-cols-2 smm:grid-cols-1'>
            {
            cartList?.map(val => {
              return (
                <div key={Math.random()*200} className='flex flex-col items-center gap-3'>
                  <img className='transform hover:scale-105 w-[100px] h-[100px]' src={val.images} alt="" />
                  <div className='flex flex-col gap-3 items-center justify-center'>
                  <span className='text-xl text-gray-200 uppercase ml-1'>{val.title}</span>
                  <div className='flex gap-3 text-white'>
                    <span className='text-xl'>{val.sale > 0 ? <del>{"$" + val.price}</del> : "$" + val.price}</span>
                    <span className='text-xl'>{val.sale > 0 ? "$" + val.sale : null}</span>
                  </div>
                  <div key={Math.random()*200}>
                    <button className='text-white text-2xl border-white border-2 w-[100px] flex justify-around'><span onClick={() => handleDecrementQuantity(val)}>-</span>{val?.quantity}<span onClick={() => addToCart(val)}>+</span></button>
                  </div>
                  </div>
                </div>
              )
            })
            }
          </div>
        }
        <div className='flex felx-col gap-2 '>
          <p className='text-white text-2xl border-b-2 border-gray-500 w-full'></p>
        </div>
        <div className='flex flex-col gap-4 items-center justify-center mt-5'>
          <p className='text-white text-3xl'>$
            {
              cartList.reduce((sum,aggr) => {
                return aggr.sale > 0 ? sum += (aggr.sale)*aggr.quantity : sum += (aggr.price)*aggr.quantity 
              },0)
            }
          </p>
          <button className='w-[130px] h-[50px] bg-[#8355e4] p-2 flex justify-center items-center rounded-3xl text-2xl  text-white font-semibold'>Checkout</button>
        </div>
      </div>
    </section>
  )
}
