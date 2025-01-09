import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Info_bar() {

  const infobar_content = [
    {
      text:"Office 123, Main Street Plaza, Downtown City, Country",
      icon: <CiLocationOn/>
    }
    ,
    {
      text:"+123 456 7890", 
      icon:<MdOutlinePhone/>,
    }
    ,
    {
      text:"technova@hotmail.com",
      icon: <IoMailOutline/>
    }
  ]

  const social_icons = [
    <FaFacebookF className='hover:text-blue-600'/>,
    <FaLinkedinIn className='hover:text-blue-500'/>,
    <FaXTwitter className='hover:text-black'/>,
    <FaYoutube className='hover:text-red-600'/>
  ]

  return (
    <div className='hidden lg:flex justify-center items-center gap-x-10 h-14'>
       <ul className='flex gap-x-5'> 
       { infobar_content.map((content,index) => (  
        <li key={index} className='flex items-center gap-x-3 text-xs text-gray-600 hover:text-blue-500 cursor-pointer'><span className='text-[1.1rem]'>{content.icon}</span>{content.text}</li>
        ))
       }
       </ul>
       <ul className='flex gap-x-5'>
       {
        social_icons.map((icons,index) => (
          <li key={index} className='text-gray-500 text-[1.05rem] cursor-pointer'>{icons}</li>
        ))
       }  
        </ul> 
      
    </div>
  )
}
