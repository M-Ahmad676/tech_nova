import React from 'react'
import TopInfo_Bar from '../components/Info_bar'
import Navbar from '../components/NavBar'
import ProjectCards from '../components/ProjectCards'

export default function Portfolio() {
  return (
    <>
     <TopInfo_Bar/>
     <Navbar/> 
     <div className='max-w-screen-2xl mx-auto h-[120vh] my-44'>

      <div className='flex justify-center items-center gap-x-3'>
      <div className='h-[2.5px] bg-blue-400 w-[6rem] rounded-md'></div>   
      <h1 className='text-[2rem] font-semibold'>Our Projects</h1>
      <div className='h-[2.5px] bg-blue-400 w-[6rem] rounded-md '></div>
      </div>
      
      <ProjectCards/>

     </div>

    </>
  )
}
