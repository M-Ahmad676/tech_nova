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
    className='flex items-center h-[90vh] bg-responsive-left'
     style={{
        backgroundImage:`url(${background})`,
        backgroundSize: 'cover',  
        backgroundRepeat: 'no-repeat',
        opacity: '0.9',
    }}
    >
      <div className=' flex flex-wrap justify-around items-center max-w-screen-2xl w-full h-full m-auto'>
      <div
       ref={textContentRef}
       className='px-5'
       >
        <motion.h2 
        initial={{x:'-100vw', opacity: 0}}
        animate = { inView ? {x: 0, opacity: 1} :{}}
        transition={{type:'spring', stiffness:30, duration:0.8}}
        className='text-[2rem] font-semibold pb-6'>About <span className='font-bold bg-clip-text text-transparent bg-text-gradient'>Tech Nova</span></motion.h2>
        <ul 
        className='list-disc px-4 space-y-3 text-gray-700'>
            <motion.li
            initial={{x:'-100vw', opacity:0}}
            animate={inView ? {x:0 , opacity:1} : {}}
            transition={{type:'spring', stiffness:30, delay:0.2}}
            >Nova Tech is an independent Pakistan Based company</motion.li>
            <motion.li
            initial={{x:'-100vw', opacity:0}}
            animate={inView ? {x:0 , opacity:1} : {}}
            transition={{type:'spring', stiffness:30, delay:0.3}}
            >Operating Since 2007 – NovaTech has been in profit since the beginning</motion.li>
            <motion.li 
            initial={{x:'-100vw', opacity:0}}
            animate={inView ? {x:0 , opacity:1} : {}}
            transition={{type:'spring', stiffness:30, delay:0.4}}
            className='leading-9'>We are website Specialists ( web design / dynamic web solution / <br/> graphics design  / Multimedia Development )</motion.li>
            <motion.li
            initial={{x:'-100vw', opacity:0}}
            animate={inView ? {x:0 , opacity:1} : {}}
            transition={{type:'spring', stiffness:30, delay:0.5}}>A close-knit team of 350+ designers</motion.li>
            <motion.li
            initial={{x:'-100vw', opacity:0}}
            animate={inView ? {x:0 , opacity:1} : {}}
            transition={{type:'spring', stiffness:30, delay:0.6}}>Programmers</motion.li>
            <motion.li
            initial={{x:'-100vw', opacity:0}}
            animate={inView ? {x:0 , opacity:1} : {}}
            transition={{type:'spring', stiffness:30, delay:0.7}}>System Analyst and marketing executives</motion.li>
        </ul>

       </div>

       <div className='flex justify-center'> 
        <div className='relative '>  
        <img src={LaptopFrame} alt="LaptopFrame" className='w-full max-w-[22rem] min-[500px]:max-w-[28rem] xl:max-w-[34rem]'/>

        <iframe  
        className='absolute top-[0.7rem] min-[500px]:top-[0.9rem] xl:top-[1.2rem] left-[13%] w-[73.9%] h-[81.5%]'
        width="560" height="615" 
        src="https://www.youtube.com/embed/xcJtL7QggTI?si=Kmzf1XXiKR6hKtCM" 
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>

       </div>
        </div>
        </div>
    </div>
    </>
  )
}
