import React, {useRef} from 'react'
import background from '../assets/About_Bg.png'
import LaptopFrame from '../assets/Laptop_Mockup.png'
import { motion, useInView } from 'framer-motion'

export default function About() {

    const textContentRef = useRef(null)

    const inView = useInView(textContentRef, {once:true, threshold:0.2})

  return (
    <>
    <div 
    className='h-[90vh] flex flex-wrap justify-around items-center bg-responsive-left'
     style={{
        backgroundImage:`url(${background})`,
        backgroundSize: 'cover',  
        backgroundRepeat: 'no-repeat',
        opacity: '0.9',
    }}
    >
       <div
       ref={textContentRef}
       className='max-w-[50%] w-full pl-16'
       >
        <motion.h2 
        initial={{x:'-100vw', opacity: 0}}
        animate = { inView ? {x: 0, opacity: 1} :{}}
        transition={{type:'spring', stiffness:30, duration:0.8}}
        className='text-[2rem] font-semibold pb-6'>About <span className='font-bold bg-clip-text text-transparent bg-text-gradient'>Tech Nova</span></motion.h2>
        <motion.ul 
         initial={{x:'-100vw', opacity: 0}}
         animate = {inView ? {x: 0, opacity: 1} : {}}
         transition={{type:'spring', stiffness:30, duration:0.8}}
        className='list-disc px-4 space-y-3 text-gray-700'>
            <li>Nova Tech is an independent Pakistan Based company</li>
            <li>Operating Since 2007 – NovaTech has been in profit since the beginning</li>
            <li className='leading-9'>We are website Specialists ( web design / dynamic web solution / <br/> graphics design  / Multimedia Development )</li>
            <li>A close-knit team of 350+ designers</li>
            <li>Programmers</li>
            <li>System Analyst and marketing executives</li>
        </motion.ul>

       </div>

       <div className='flex justify-center '> 
        <div className='relative'>  
        <img src={LaptopFrame} alt="LaptopFrame" className='max-w-[28rem] xl:max-w-[34rem]'/>

        <iframe  
        className='absolute top-[6.8rem] xl:top-[8.3rem] left-[13%] w-[73.9%] h-[47.5%]'
        width="560" height="315" 
        src="https://www.youtube.com/embed/xcJtL7QggTI?si=Kmzf1XXiKR6hKtCM" 
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>

       </div>
        </div>
    </div>
    </>
  )
}
