import React from 'react'
import CoverImage from '../assets/cover.jpg'
import {motion} from 'framer-motion'

export default function Cover() {
  return (
    <div className='flex justify-center my-14 lg:my-0'>
     <div className='flex flex-col justify-center gap-y-10 lg:flex-row lg:justify-around items-center h-[92vh] px-5 lg:px-10 max-w-screen-2xl w-full'>
        <div className='text-center lg:text-left lg:pl-16 space-y-2 lg:max-w-[50%] w-full'>
           <motion.h1 
           initial={{ x: '-100vw', opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ type: 'spring', stiffness: 30, duration: 1 }}
           className='text-[3rem] font-bold text-blue-600'>Tech Nova</motion.h1>
           <motion.h4 
            className="text-[1.5rem] font-medium"
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 30, delay: 0.2 }}
           >Innovating the Future of Technology</motion.h4>
           <motion.p 
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 30, delay: 0.4 }}
           className='leading-7 text-gray-600'>At Tech Nova, we strive to provide cutting-edge solutions that empower businesses to grow and innovate. Our expertise in web development, cloud technologies, and digital transformation drives success in a rapidly evolving tech landscape</motion.p>
        </div>
        <div className='flex justify-center items-end lg:max-w-[50%] w-full'>
         <motion.img 
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40, delay: 0.6 }}
         src={CoverImage} alt="Cover" className='max-w-[30rem] w-full' />
        </div>
     </div>
      
    </div>
  )
}
