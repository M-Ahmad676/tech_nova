import React, {useState, useEffect} from 'react'
import { IoMenu } from "react-icons/io5"
import Logo from "../assets/tech-nova.png"
import {Link, useLocation} from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { PiUsersThreeFill } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";
import { useNavigate } from 'react-router-dom';


export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false)
  const [sideMenu ,setSideMenu] = useState(false)
  const navigate = useNavigate()
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

  const handleQuote = () =>{
       navigate('/ContactUs')
  }
  

  const Links = [
    {
      PageName:'Home',
      Path: '/',
      icon: <IoHome/>
    },
    {
      PageName:'Services',
      Path: '/Services',
      icon: <MdOutlineMiscellaneousServices/>
    },
    {
      PageName:'Portfolio',
      Path: '/Portfolio',
      icon: <AiOutlineProject/>
    },
    {
      PageName:'About Us',
      Path: '/AboutUs',
      icon: <PiUsersThreeFill/>
    },
    {
      PageName:'Contact',
      Path: '/ContactUs',
      icon: <SiMinutemailer/>
    },
  ]

  return (
    <div className={`flex justify-between px-4 sm:px-16 xl:px-0 xl:justify-around  items-center gap-x-10 h-16 bg-black fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-0 lg:top-[3.5rem]'}`}>

      <IoMenu className='text-white text-[1.7rem] sm:text-[2rem] block xl:hidden cursor-pointer hover:text-blue-400' onClick={handleSideMenu}/> 
    {/* Side Bar */}
      <div className={`absolute bg-[#171717] min-h-screen w-[15rem] md:w-[19rem] h-full top-16 left-0 transition-all duration-300 ${sideMenu ? 'translate-x-0' : '-translate-x-full'}`}>
      <ul className='py-10 text-white text-[0.9rem] sm:text-[1.1rem]'>
        {Links.map((link,index) => (
        <Link to={link.Path} key={index} className={`px-4 py-5 sm:px-8 flex items-center gap-x-5 hover:bg-black ${Location.pathname === link.Path ? 'bg-black ' : ''}`}>
        <span className='text-[1.2rem]'>{link.icon}</span>
        <span className='font-medium'>{link.PageName}</span>
        </Link>
      ))}
      </ul>
      </div>  

   {/* Logo */}
      <div>
      <img src={Logo} alt="Tech Nova" className=' w-[7.5rem] md:w-[10rem] cursor-pointer'/>
      </div>

   {/* NavBar */}
      <ul className='hidden xl:flex gap-x-14 text-white'>
        {Links.map((link,index) => (
        <li key={index}><Link to={link.Path} className={`font-semibold hover:text-blue-400 ${Location.pathname === link.Path ?'text-blue-400':''}`}>{link.PageName}</Link></li>
      ))}
      </ul>
      
      <div className='flex items-center gap-x-10'>
        <button className='hidden xl:block border-2 border-white rounded-lg py-1.5 px-3 text-[#ffffff] font-medium text-base hover:bg-blue-500' onClick={handleQuote}>Get a Quote</button>
       <div className='flex items-center gap-x-14 xl:gap-x-10'>
        </div>
      </div>

    </div>
  )
}
