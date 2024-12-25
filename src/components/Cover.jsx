import React from 'react'
import CoverImage from '../assets/cover.jpg'
import {motion} from 'framer-motion'

export default function Cover() {
  return (
    <div className='flex justify-center'>
     <div className='grid grid-cols-2 items-center h-[84vh] px-10'>
        <div className='pl-16 space-y-2'>
           <motion.h1 
           initial={{ x: '-100vw', opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ type: 'spring', stiffness: 230, duration: 0.8 }}
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
        <div className='flex justify-center'>
         <motion.img 
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40, delay: 0.6 }}
         src={CoverImage} alt="Cover" className='max-w-[35rem] w-full' />
        </div>
     </div>
      
    </div>
  )
}
