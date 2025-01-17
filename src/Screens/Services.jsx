import React from 'react'
import NavBar from '../components/NavBar'
import InfoBar from '../components/Info_bar'
import Cover from '../components/Cover'
import Footer from '../components/Footer'
import BottomBar from '../components/Bottom_bar'

export default function Services() {
  return (
    <div>
        <InfoBar/>
        <NavBar/>
        <Cover 
        title="Innovative Solutions, Tailored for You" 
        subheading="Your Vision, Our Expertise"
        description="From custom software development to cutting-edge UI/UX design, we transform ideas into reality. Whether you're a startup or an enterprise, our expert team delivers scalable, secure, and high-performance solutions tailored to your unique business needs."
        image='/Service icons/Services.jpg'
        imageSize = 'max-w-[35rem]'
        />
        <div className='h-[100vh] py-10 max-w-screen-2xl'>
          <div className='w-full text-center m-auto'>
          <h1 className='text-[2.5rem] font-medium'>Our Services</h1>
          <div className='h-[2.5px] bg-blue-400 w-[16rem] rounded-md m-auto'></div>
          </div>
        </div>
        <Footer/>
        <BottomBar/>
    </div>
  )
}
