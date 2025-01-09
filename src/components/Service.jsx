import React from 'react'
import Phone_Mockup from '../assets/App_Mockup.png'

export default function Service() {

    const serviceRight = [
        {
            title:'Website Development',
            description: "Developing a website is fun and anyone can do this but very few understand how to build websites.",
            icon: '/Service icons/website.png'
        },
        {
            title:'Web App Development',
            description:"Web applications have been changing the ways of business operates across the globe.",
            icon: '/Service icons/web_dev.png'
        },
        {
            title:'Mobile App Development',
            description: "In this modern Era, business should not ignore to have a business mobile app",
            icon: '/Service icons/mobile.png'
        },

    ]

    const serviceLeft = [
        
        {
            title:'Cloud Services',
            description: "Modernize your workflow and improve your application’s performance by migrating to the Cloud.",
            icon: '/Service icons/cloud_service.png'
        },
        {
            title:'Digital Marketing',
            description: "Are you looking for ways to make your pitch inspirational to social media audiences?",
            icon: '/Service icons/marketing.png'
        },
        {
            title:'Startup Solutions',
            description: "We help entrepreneurs turn their vision into reality. And guide them throughout their business life cycle",
            icon: '/Service icons/startup.png'
        },


    ]



  return (
    <div className='h-[90vh] bg-custom-gradient flex justify-evenly items-center'>

        <div className='flex flex-col justify-evenly h-full'>   {/* Left Service */}
          
          {serviceLeft.map((service, index) => (
            
            <div className='flex items-center justify-between max-w-[25rem]' key={index}>
                <div className='text-white max-w-[75%] space-y-2 text-right'>
                <h3 className='text-[1.3rem] font-bold'>{service.title}</h3>
                <p className='text-sm font-medium'>{service.description}</p>
                </div>
                <div className='max-w-[25%]'>
                    <div className='bg-white rounded-full p-2 w-full'>
                    <img src={service.icon} alt={service.title} className='w-[3.5rem]'/>
                    </div>
                </div>
            </div>


          ))}


        </div>

        <div>  {/* Mobile Frame */}
        
        <img src={Phone_Mockup} alt="phone" className='max-w-[15rem]' />

        </div>

        <div className='flex flex-col justify-evenly h-full'> {/* Right Services */}

        {serviceRight.map((service, index) => (
            
            <div className='flex items-center justify-between max-w-[25rem]' key={index}>
                <div className='max-w-[25%]'>
                    <div className='bg-white rounded-full p-2 w-full'>
                    <img src={service.icon} alt={service.title} className='w-[3.5rem]'/>
                    </div>
                </div>
                <div className='text-white max-w-[75%] space-y-2 text-left'>
                <h3 className='text-[1.3rem] font-bold'>{service.title}</h3>
                <p className='text-sm font-medium'>{service.description}</p>
                </div>
            </div>
          ))}
      

        </div>
      
    </div>
  )
}
