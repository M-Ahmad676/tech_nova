import React, {useRef} from 'react'
import vector from '../assets/sdlc.png'
import {motion, useInView} from 'framer-motion'

export default function LifeCycle() {

    const screenRef = useRef(null)

    const inView = useInView(screenRef, {once:true, threshold: 0.2})

  return (
    <div className='flex h-auto py-16 gap-y-5 lg:gap-y-0 lg:py-0 lg:h-[70vh] justify-around flex-wrap items-center'>
        <div ref={screenRef} className='px-12 sm:px-0'>
            <h3 className='text-[1.6rem] min-[500px]:text-[2rem] font-semibold'>Software Development Life Cycle</h3>
            <p className='text-gray-600 text-sm min-[500px]:text-base'>We use Agile / Scrum Methodology</p>

            <div className='w-28 h-[0.1rem] bg-blue-300 my-5'></div>

            <ul className='space-y-3 list-disc pl-5 text-gray-700 italic text-base min-[500px]:text-[1.1rem] font-semibold'>
                <motion.li
                initial={{x:'-100vw', opacity:0}}
                animate={inView ? {x:0 , opacity:1} : {}}
                transition={{type:'spring', stiffness:30, delay:0.8}}
                >Planning</motion.li>
                <motion.li
                initial={{x:'-100vw', opacity:0}}
                animate={inView ? {x:0 , opacity:1} : {}}
                transition={{type:'spring', stiffness:30, delay:0.7}}
                >Designing</motion.li>
                <motion.li
                initial={{x:'-100vw', opacity:0}}
                animate={inView ? {x:0 , opacity:1} : {}}
                transition={{type:'spring', stiffness:30, delay:0.6}}>Defining</motion.li>
                <motion.li
                initial={{x:'-100vw', opacity:0}}
                animate={inView ? {x:0 , opacity:1} : {}}
                transition={{type:'spring', stiffness:30, delay:0.5}}>Building</motion.li>
                <motion.li
                initial={{x:'-100vw', opacity:0}}
                animate={inView ? {x:0 , opacity:1} : {}}
                transition={{type:'spring', stiffness:30, delay:0.4}}>Testing</motion.li>
                <motion.li
                initial={{x:'-100vw', opacity:0}}
                animate={inView ? {x:0 , opacity:1} : {}}
                transition={{type:'spring', stiffness:30, delay:0.3}}>Deployment</motion.li>
                <motion.li
                initial={{x:'-100vw', opacity:0}}
                animate={inView ? {x:0 , opacity:1} : {}}
                transition={{type:'spring', stiffness:30, delay:0.2}}>Maintenance</motion.li>
            </ul>
              
        </div>

        <div>
          <img src={vector} alt="Vector" className='max-w-[20rem] sm:max-w-[24rem] lg:max-w-[30rem] w-full'/>
        </div>
       
    </div>
  )
}
