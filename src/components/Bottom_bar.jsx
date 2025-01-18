import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Bottom_bar() {

    const social_icons = [
        <FaFacebookF className='hover:text-blue-600'/>,
        <FaLinkedinIn className='hover:text-blue-500'/>,
        <FaXTwitter className='hover:text-black'/>,
        <FaYoutube className='hover:text-red-600'/>
      ]

  return (
    <div className='bg-black text-gray-400 text-sm flex justify-evenly xl:justify-between flex-col-reverse xl:flex-row px-5 md:px-20 items-center h-[4rem] sm:h-[8rem]'>

        <p className='text-sm'>2024 © CopyRights Tech Nova Software House</p>

        <ul className='hidden sm:flex gap-x-10 text-sm '>
            <li><a href='/' className='hover:text-blue-500'>Career</a></li>
            <li><a href='/' className='hover:text-blue-500'>Services</a></li>
            <li><a href='/' className='hover:text-blue-500'>Terms & Conditions</a></li>
            <li><a href='/' className='hover:text-blue-500'>Contact Us</a></li>
            <li><a href='/' className='hover:text-blue-500'>Portfolio</a></li>
        </ul>

        <ul className='hidden xl:flex gap-x-5'>
       {
        social_icons.map((icons,index) => (
          <li key={index} className='text-gray-500 text-[1.05rem] cursor-pointer'>{icons}</li>
        ))
       }  
        </ul> 

      
    </div>
  )
}
