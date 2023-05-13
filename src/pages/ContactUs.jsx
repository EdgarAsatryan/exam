import React from 'react'

export default function ContactUs() {
  return (
    <div className='w-full h-auto pb-16 bg-black flex items-center justify-center'>
      <div className='w-[80%] h-full flex flex-col gap-9'>
        <div><h2 className='text-white text-[80px] font-bold'>NEED A HAND?</h2></div>
        <div className='w-full flex gap-3 md:flex-col md:gap-6'>
        <div className='w-[100%] flex flex-col gap-9 '>
        <div><p className='text-white text-3xl'>Contact Us</p></div>
        <div className='flex flex-col gap-7'>
          <ul className='flex flex-col gap-5 text-white text-2xl'>
            <li>info@mysite.com</li>
            <li>123-456-7890</li>
            <li className='w-[300px]'>500 Terry Francine Street San Francisco, CA 94158</li>
          </ul>
        <div><iframe className='w-[70%] h-[300px] md:w-[70%]' src="https://www.google.com/maps/d/embed?mid=1epcK_3XhnFZfFn1KqFhhWr3sQO8&ehbc=2E312F" width="640" height="480"></iframe></div>
        </div>
        </div>
        <div>
        <form className='flex flex-col gap-5'>
          <div className='flex gap-4 smm:flex-col'>
            <input required placeholder='Name' className='w-[150px] h-[30px] p-2 text-lg' type="text" />
            <input required placeholder='SureName' className='w-[150px] h-[30px] p-2 text-lg' type="text" />
          </div>
          <div className='flex gap-4 smm:flex-col'>
          <input required placeholder='Email' className='w-[150px] h-[30px] p-2 text-lg' type="email" />
          <input required placeholder='Phone' className='w-[150px] h-[30px] p-2 text-lg' type="number" />
          </div>
          <textarea className='p-2 text-xl w-[100%] h-[200px] md:w-[60%]'  name="" id="" cols="30" rows="10"></textarea>
          <button className='w-[120px] h-[40px] bg-[#8355e4] p-2 flex justify-center items-center rounded-3xl self-center  text-white font-semibold md:self-start'>Submit</button>
        </form>
        </div>
        </div>
      </div>
    </div>
  )
}



