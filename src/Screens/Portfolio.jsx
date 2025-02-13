import React from 'react'
import ProjectCards from '../components/ProjectCards'

export default function Portfolio() {
  return (
    <>
     <div className='max-w-screen-2xl mx-auto mt-44 mb-10 '>
      <div className='px-4 sm:px-10'>  
      <div className='max-w-[40rem] w-full pb-20 px-0 min-[1490px]:px-8 space-y-4'> 
      <div className='flex justify-start items-center gap-x-3'>
      <div className='h-[2.5px] bg-custom-gradient2 w-[4rem] rounded-md'></div>   
      <h1 className='text-[2rem] sm:text-[2.5rem] font-bold bg-custom-gradient2 bg-clip-text text-transparent'>Our Projects</h1>
      </div>
      <p className='leading-6 text-gray-700'>At Tech Nova, we pride ourselves on delivering innovative and user-centric solutions across various industries.Our projects showcase a commitment to intuitive design, seamless functionality, and cutting-edge technology. With a strong emphasis on responsive design and user-friendly interfaces, we deliver platforms that enhance user experiences across a variety of industries. Whether it's healthcare, e-commerce, or creative portfolios, our work reflects a dedication to excellence and innovation.</p>
      </div>
      <ProjectCards/>
      </div>
     </div>
    </>
  )
}
