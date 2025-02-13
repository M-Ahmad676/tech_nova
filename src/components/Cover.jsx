import React from 'react'
import {motion} from 'framer-motion'

export default function Cover({title, subheading ,description, image ,TitleclassName, imageSize}) {
  return (
    <div className='flex justify-center my-14 lg:my-0'>
     <div className='flex flex-col justify-center gap-y-10 lg:flex-row lg:justify-around items-center h-[92vh] px-5 lg:px-10 max-w-screen-2xl w-full'>
        <div className='text-left lg:pl-16 space-y-2 lg:max-w-[50%] w-full'>
           <motion.h1 
           initial={{ x: '-100vw', opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ type: 'spring', stiffness: 30, duration: 1 }}
           className={`text-[2.1rem] min-[500px]:text-[3rem] font-bold bg-custom-gradient2 bg-clip-text text-transparent ${TitleclassName || ''}`}>{title}</motion.h1>
           <motion.h4 
            className="text-[1.5rem] min-[500px]:text-[2rem] font-medium"
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 30, delay: 0.2 }}
           >{subheading}</motion.h4>
           <motion.p 
            initial={{ x: '-100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 30, delay: 0.4 }}
           className=' leading-7 text-gray-600'>{description}</motion.p>
        </div>
        <div className='flex justify-center items-end lg:max-w-[50%] w-full'>
         <motion.img 
          initial={{ x: '100vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 40, delay: 0.6 }}
         src={image} alt="Cover" className={`${imageSize || 'max-w-[30rem]'} w-full`} />
        </div>
     </div>
      
    </div>
  )
}
