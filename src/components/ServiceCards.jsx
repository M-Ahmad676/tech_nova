import { div } from 'framer-motion/client';
import React from 'react'

export default function ServiceCards() {

    const Card_Data = [
        {
          title: 'Website Development',
          description:
            'Create stunning, responsive websites tailored to your brand. We ensure seamless user experiences across all devices.',
            image: '/Service icons/Services Images/Web Development.jpg '
        },
        {
          title: 'UI/UX',
          description:
            'Craft visually stunning and user-centric designs that deliver seamless and engaging experiences.',
          image: '/Service icons/Services Images/ui_ux.jpg '
        },
        {
          title: 'App Development',
          description:
            'Build native and cross-platform mobile apps with intuitive designs and cutting-edge functionality.',
             image: '/Service icons/Services Images/MobileApp.jpg '
        },
        {
          title: 'Cloud Services',
          description:
            'Leverage the power of the cloud with scalable solutions for storage, hosting, and application deployment.',
             image: '/Service icons/Services Images/CloudServices.jpg'

        },
        {
          title: 'Digital Marketing',
          description:
            'Boost your online presence with data-driven digital marketing strategies, including SEO, social media, and PPC campaigns.',
             image: '/Service icons/Services Images/digital-marketing.jpg'
        },
        {
          title: 'Startup Solutions',
          description:
            'Empowering startups with end-to-end solutions, from MVP development to scaling your business with innovative technology.',
             image: '/Service icons/Services Images/Startup.jpg'
        },
      ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-7 lg:gap-14 min-[1100px]:grid-cols-3'>
      {Card_Data.map((card, index) => (
        
        <div key={index} className='max-w-[24rem] w-full h-auto rounded-tl-[80px] rounded-br-[80px] shadow-md shadow-gray-400'>

            <div className='w-full h-[16rem]'>
               <img src={card.image} alt={card.title} className='object-cover w-full h-full rounded-tl-[80px]' />
            </div>

            <div className='h-[10rem] p-4 rounded-br-[80px] space-y-2 bg-blue-500  overflow-hidden'>
                <h3 className='text-[1.2rem] font-medium text-white'>{card.title}</h3>
                <p className='text-white'>{card.description}</p>
            </div>
         
        </div>


      ))}  
              
    </div>
  )
}
