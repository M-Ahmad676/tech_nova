import React from 'react'
import { IoSearch } from "react-icons/io5";
import Logo from "../assets/Logo.png"

export default function NavBar() {

  const Links = [
    'Home','Services','Portfolio','Updates','Software','Login','Contact'
  ]

  return (
    <div className='flex justify-evenly items-center gap-x-10 h-16 bg-black'>
      
      <div>
      <img src={Logo} alt="Tech Nova" className='w-[15rem] cursor-pointer'/>
      </div>

      <ul className='flex gap-x-14 text-white'>
        {Links.map((link,index) => (
        <li><a href='/' className='font-semibold hover:text-blue-500'>{link}</a></li>
      ))}
      </ul>
      
      <div className='flex items-center gap-x-14'>
        <button className='border-2 border-white rounded-lg py-2 px-3 text-[#ffffff] font-medium hover:bg-blue-500'>16th Anniversery</button>
        <IoSearch className='text-[1.5rem] text-white cursor-pointer'/>

      </div>

    </div>
  )
}
