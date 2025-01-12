import React, {useState, useEffect} from 'react'
import { IoSearch } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md"
import { IoMenu } from "react-icons/io5"
import Logo from "../assets/Logo.png"

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false)

    
  useEffect(() => {
       
    const handleScroll = ()=>{
      
      if(window.scrollY > 0){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
     
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])
  

  const Links = [
    'Home','Services','Portfolio','Updates','Software','Contact'
  ]

  return (
    <div className={`flex justify-between px-4 sm:px-16 xl:px-0 xl:justify-evenly items-center gap-x-10 h-16 bg-black fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-0 lg:top-[3.5rem]'}`}>

      <IoMenu className='text-white text-[2rem] block xl:hidden cursor-pointer hover:text-cyan-400'/> 

      <div className='pl-5 sm:pl-20 xl:pl-0'>
      <img src={Logo} alt="Tech Nova" className=' w-[12rem] sm:w-[14rem] xl:w-[15rem] cursor-pointer'/>
      </div>

      <ul className='hidden xl:flex gap-x-14 text-white'>
        {Links.map((link,index) => (
        <li><a href='/' className='font-semibold hover:text-blue-500'>{link}</a></li>
      ))}
      </ul>
      
      <div className='flex items-center gap-x-14'>
        <button className='hidden xl:block border-2 border-white rounded-lg py-1.5 px-3 text-[#ffffff] font-medium text-base hover:bg-blue-500'>16th Anniversery</button>
       <div className='flex items-center gap-x-14 xl:gap-x-10'>
        <IoSearch className=' hidden sm:block text-[1.7rem] text-white cursor-pointer'/>
        <MdAccountCircle className='text-[2rem] text-white cursor-pointer'/>
        </div>
      </div>

    </div>
  )
}
