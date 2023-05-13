import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/Ai';
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
export default function NavBar({cartList}) {
  const [menuBar,setMenuBar] = useState(false)
  function handleBar () {
    setMenuBar(!menuBar)
  }
  return (
    <header className="w-[full] h-[80px] flex justify-center items-center bg-[#281b3d]">
        <nav className='w-[80%] h-full flex justify-between items-center'>
        <div className="flex gap-3 justify-center items-center">
            <div className='w-[70px] h-[70px] bg-[url(./photos/logo.jpeg)] bg-center bg-no-repeat bg-cover rounded-[100%]'></div>
            <NavLink to="/" className='font-bold text-2xl text-white'>ARCADE</NavLink>
        </div>
            <ul className='flex gap-7 items-center justify-center md:gap-0'>
                <li><NavLink to="/" className=' block text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300 md:hidden'>Home</NavLink></li>
                
                <li><NavLink to="/products" className='block text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300 relative md:hidden'>Products</NavLink></li>

                <li><NavLink to="/onSale" className='block text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300 md:hidden'>On Sale</NavLink></li>

                <li><NavLink to="/contactUs" className='block text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300 md:hidden'>Contact Us</NavLink></li>

                <li><NavLink to="/cart" className='block text-white relative text-lg cursor-pointer hover:text-[#7912ff] duration-300 md:hidden'><FaShoppingCart className='text-2xl'/></NavLink>
                </li>
                <li onClick={() => handleBar()} className='hidden md:text-white text-4xl relative md:block '>{menuBar ? <AiOutlineClose/> : <AiOutlineMenu/>}
                  <ul className={menuBar ? 'flex flex-col z-50 justify-evenly items-start h-[200px] text-white absolute top-16': "hidden"}>
                    <li><NavLink to="/" className='hidden text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300 md:block'>Home</NavLink></li>
                    
                    <li><NavLink to="/products" className='hidden text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300 relative md:block'>Products</NavLink></li>

                    <li><NavLink to="/onSale" className='hidden text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300 md:block'>On Sale</NavLink></li>

                    <li><NavLink to="/contactUs" className='hidden text-white text-lg cursor-pointer hover:text-[#7912ff] duration-300 md:block'>Contact</NavLink></li>

                    <li><NavLink to="/cart" className='hidden text-white relative text-lg cursor-pointer hover:text-[#7912ff] duration-300 md:block'><FaShoppingCart className='text-2xl'/></NavLink>
                    </li>
                  </ul>
                </li>
            </ul>
        </nav>
    </header>
  )
}
