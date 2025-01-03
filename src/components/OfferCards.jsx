import React from 'react'
import { IoIosBulb } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { color } from 'framer-motion';

export default function OfferCards() {

    const card_content = [
        {
          icon: <FaMoneyBillWave/>,
          heading:"Flexiable Prices",
          body:'Our pricing plan is created by our clients. Market Competitive',
          color:'bg-purple-400'
          
        },
        {
            icon: <IoIosBulb/>,
            heading:"Quality Work",
            body:'Quality assurance & testing befoe every project delivery.',
             color:'bg-blue-400'
        },
        {
            icon:<FaTrophy/> ,
            heading:"Quick Delivery",
            body:'40 days initial delivery on custom mega projects.',
             color:'bg-green-400'
        
        },          

    ]

  return (
    <div className='h-[60vh] flex justify-evenly items-center w-full bg-[#f6f4f4bb]'>
      
      {card_content.map((content,index) => (
        <div className={`max-w-[20%] w-full text-white p-4 ${content.color} rounded-lg flex flex-col justify-center items-center text-center gap-y-4 h-[17rem]`} key={index}> 
            <span className='text-[3rem]'>{content.icon}</span>
            <h2 className='text-[2rem]'>{content.heading}</h2>
            <p>{content.body}</p>
        </div>
        ))}

      
    </div>
  )
}
