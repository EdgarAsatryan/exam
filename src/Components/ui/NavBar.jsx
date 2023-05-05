import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
export default function NavBar() {

  return (
    <header className="w-[full] h-[80px] flex justify-center items-center bg-[#281b3d]">
        <nav className='w-[80%] h-full flex justify-between items-center'>
        <div className="flex gap-3 justify-center items-center">
            <div className='w-[70px] h-[70px] bg-[url(./photos/logo.jpeg)] bg-center bg-no-repeat bg-cover rounded-[100%]'></div>
            <NavLink to="/" className='font-bold text-2xl text-white'>ARCADE</NavLink>
        </div>
            <ul className='flex gap-7 items-center justify-center'>
                <li><NavLink to="/" className='text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300'>Home</NavLink></li>
                
                <li><NavLink to="/products" className='text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300 relative'>Products</NavLink></li>

                <li><NavLink to="/onSale" className='text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300'>On Sale</NavLink></li>

                <li><NavLink to="/contactUs" className='text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300'>Contact Us</NavLink></li>

                <li><NavLink to="/cart" className='text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300'><FaShoppingCart className='text-2xl'/></NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
