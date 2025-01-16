import React, {useState, useEffect} from 'react'
import { IoSearch } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md"
import { IoMenu } from "react-icons/io5"
import Logo from "../assets/Tech Nova.png"

export default function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false)
  const [sideMenu ,setSideMenu] = useState(false)


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
    'Home','Services','Portfolio','Updates','Software','Contact'
  ]

  return (
    <div className={`flex justify-between px-4 sm:px-16 xl:px-0 xl:justify-evenly items-center gap-x-10 h-16 bg-black fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-0 lg:top-[3.5rem]'}`}>

      <IoMenu className='text-white text-[2rem] block xl:hidden cursor-pointer hover:text-cyan-400' onClick={handleSideMenu}/> 

      <div className={`absolute bg-[#171717] min-h-screen w-[15rem] md:w-[19rem] h-full top-16 left-0 transition-all duration-300 ${sideMenu ? 'translate-x-0' : '-translate-x-full'}`}>
      <ul className='py-10 text-white text-[1.1rem]'>
        {Links.map((link,index) => (
        <li className='px-4 py-5 hover:bg-black hover:text-blue-400 sm:px-8' key={index}><a href='/' className='font-medium'>{link}</a></li>
      ))}
      </ul>
      </div>  


      <div className='pl-5 sm:pl-20 xl:pl-0'>
      <img src={Logo} alt="Tech Nova" className=' w-[6.5rem] sm:w-[7.5rem] xl:w-[8rem] cursor-pointer'/>
      </div>

      <ul className='hidden xl:flex gap-x-14 text-white pl-16'>
        {Links.map((link,index) => (
        <li><a href='/' className='font-semibold hover:text-blue-500'>{link}</a></li>
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
