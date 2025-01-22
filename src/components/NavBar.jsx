import React, {useState, useEffect} from 'react'
import { IoMenu } from "react-icons/io5"
import Logo from "../assets/Tech Nova.png"
import {Link, useLocation} from 'react-router-dom'

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false)
  const [sideMenu ,setSideMenu] = useState(false)

  const Location = useLocation()
  
  const handleSideMenu = () => {
       
    setSideMenu(!sideMenu)

  }
    
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
    {
      PageName:'Home',
      Path: '/'
    },
    {
      PageName:'Services',
      Path: '/Services'
    },
    {
      PageName:'Portfolio',
      Path: '/Portfolio'
    },
    {
      PageName:'About Us',
      Path: '/AboutUs'
    },
    {
      PageName:'Contact',
      Path: '/ContactUs'
    },
  ]

  return (
    <div className={`flex justify-between px-4 sm:px-16 xl:px-0 xl:justify-evenly items-center gap-x-10 h-16 bg-black fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-0 lg:top-[3.5rem]'}`}>

      <IoMenu className='text-white text-[2rem] block xl:hidden cursor-pointer hover:text-blue-400' onClick={handleSideMenu}/> 

      <div className={`absolute bg-[#171717] min-h-screen w-[15rem] md:w-[19rem] h-full top-16 left-0 transition-all duration-300 ${sideMenu ? 'translate-x-0' : '-translate-x-full'}`}>
      <ul className='py-10 text-white text-[1.1rem]'>
        {Links.map((link,index) => (
        <li className={`px-4 py-5 hover:bg-black hover:text-blue-400 sm:px-8 ${Location.pathname === link.PageName ? 'text-blue-400' : ''}`} key={index}><Link to={link.Path} className='font-medium'>{link.PageName}</Link></li>
      ))}
      </ul>
      </div>  


      <div>
      <img src={Logo} alt="Tech Nova" className=' w-[6.5rem] sm:w-[7.5rem] md:w-[8rem] cursor-pointer'/>
      </div>

      <ul className='hidden xl:flex gap-x-14 text-white pl-16'>
        {Links.map((link,index) => (
        <li key={index}><Link to={link.Path} className={`font-semibold hover:text-blue-400 ${Location.pathname === link.Path ?'text-blue-400':''}`}>{link.PageName}</Link></li>
      ))}
      </ul>
      
      <div className='flex items-center gap-x-10'>
        <button className='hidden xl:block border-2 border-white rounded-lg py-1.5 px-3 text-[#ffffff] font-medium text-base hover:bg-blue-500'>16th Anniversery</button>
       <div className='flex items-center gap-x-14 xl:gap-x-10'>
        </div>
      </div>

    </div>
  )
}
