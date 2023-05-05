import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='w-full h-screen flex flex-col justify-center items-center bg-black'>
        <div className='w-[80%] h-full flex justify-between mt-7'>
            <div className="flex gap-3 flex-col">
                <div className='w-[70px] h-[70px] bg-[url(./photos/logo.jpeg)] bg-center bg-no-repeat bg-cover rounded-[100%]'></div>
                <a href="#" className='font-bold text-2xl text-white'>ARCADE</a>
            </div>
            <div>
                <ul className='text-white flex flex-col gap-5'>
                    <li className='font-bold text-xl' >Products</li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Consoles</a></li>
                    <li><a href="#">Controllers</a></li>
                    <li><a href="#">Accessories</a></li>
                </ul>
            </div>
            <div>
                <ul className='text-white flex flex-col gap-5'>
                    <li className='font-bold text-xl'>Store</li>
                    <li>500 Terry Francine Street San Francisco, CA 94158</li>
                    <li>Mon - Fri: 9am - 9pm</li>
                    <li><a href="#">info@mysite.com</a></li>
                    <li>123-456-7890</li>
                </ul>
            </div>
            <div>
                <ul className='text-white flex flex-col gap-5'>
                    <li className='font-bold text-xl'>Policy</li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
        </div>
        <div className='w-[90%] h-[50%] border-t border-gray-500 flex justify-between '>
            <div className='flex flex-col gap-3'>
                <p className='text-white font-bold text-xl ml-2 mt-3'>Payment Methods</p>
                <div className='flex gap-10 ml-2'>
                    <img className='w-[50px] h-[30px] mt-3' src="./photos/Visa.webp" alt="" />
                    <img className='w-[50px] h-[30px] mt-3' src="./photos/Master Card.webp" alt="" />
                    <img className='w-[50px] h-[30px] mt-3' src="./photos/American Express.webp" alt="" />
                    <img className='w-[50px] h-[30px] mt-3' src="./photos/JCB.webp" alt="" />
                    <img className='w-[50px] h-[30px] mt-3' src="./photos/Discover.webp" alt="" />
                    <img className='w-[50px] h-[30px] mt-3' src="./photos/China Union Pay.webp" alt="" />
                    <img className='w-[50px] h-[30px] mt-3' src="./photos/Diners.webp" alt="" />
                    <img className='w-[50px] h-[30px] mt-3' src="./photos/PayPal.webp" alt="" />
                </div>
            </div>
            <div className='flex flex-col gap-5 mr-10 items-center '>
            <p className='text-white font-bold text-xl ml-2 mt-3'>Join the Community</p>
            <div className='flex gap-7'>
                <FaFacebookF className='text-white text-2xl'/>
                <FaInstagram className='text-white text-2xl'/>
                <FaYoutube className='text-white text-2xl'/>
                <FaTiktok className='text-white text-2xl'/>
            </div>
            </div>
        </div>
    </footer>
  )
}
