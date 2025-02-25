import React from 'react'
import Cover from '../components/Cover'
import About from '../components/About'
import Project_M from '../components/Project_M'
import Services from '../components/Service'
import Methodoloy from '../components/LifeCycle'
import OfferSection from '../components/OfferCards'
import OurClientSection from '../components/OurClientsSlider'
import CoverImage from '../assets/cover.jpg'

export default function LandingPage() {
  return (
    <div className='overflow-hidden'>
     <Cover
     title="Tech Nova"
     subheading="Innovating the Future of Technology"
     description="At Tech Nova, we strive to provide cutting-edge solutions that empower businesses to grow and innovate. Our expertise in web development, cloud technologies, and digital transformation drives success in a rapidly evolving tech landscape"
     image={CoverImage}
     TitleclassName='text-[2.3rem] min-[500px]:text-[3.5rem] font-bold text-[#004FF2]'
     />
     <About/>
     <Project_M/>
     <Services/>
     <Methodoloy/>
     <OfferSection/>
     <OurClientSection/>
    </div>
  )
}
