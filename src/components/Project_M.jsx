import React from 'react'
import MockUps from '../assets/image.jpg'

export default function Project_M() {
     
    const data = [
        'Project and Milestone tracking',
        'Task management with SMS/email notification',
        '24/7 online service & Support.',
        'Billing/invoicing transparent management.',
        'Discuss board for project management',
        'HR/payroll & Complete Office management',
        'Cloud base & Robust technology'
    ]

  return (
    <div className='h-auto my-20 gap-y-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] justify-items-center gap-x-10  px-4 sm:px-16 max-w-screen-2xl w-full m-auto'>

        <div className='w-full max-w-xl'>
           <img src={MockUps} alt="appleFrame" className='w-full object-contain h-auto' />
        </div>

        <div className='max-w-full space-y-5'>

            <h2 className='text-[1.7rem] font-semibold'>OUR PROJECT MANAGEMENT</h2>

            <div className='w-28 h-[0.1rem] bg-blue-300'></div>

            <ul className='list-disc space-y-3 pl-5 text-gray-600'>
             {data.map((content,index) => (   
                <li key={index}>{content}</li>
            ))}
            </ul>
           
           <ul className='flex gap-x-5'>
            <li><button className='border-2 border-red-600 text-red-600 px-3 font-medium py-1 rounded-md hover:bg-red-600 hover:text-white'>STAFF</button></li>
            <li><button className='border-2 border-blue-600 text-blue-600 px-3 font-medium py-1 rounded-md hover:bg-blue-600 hover:text-white' >INTERN</button></li>
            <li><button className='border-2 border-green-600 text-green-600 px-3 font-medium py-1 rounded-md hover:bg-green-600 hover:text-white'>CLIENT</button></li>
           </ul>

        </div>
      
    </div>
  )
}
