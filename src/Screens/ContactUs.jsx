import React from 'react'
import InfoBar from '../components/Info_bar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Bottom_bar from '../components/Bottom_bar'
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const contact_data = [
    
  {
    icon:<FaPhoneAlt/>,
    heading:'Call Us',
    contactVia: '+012 345 6789'
  },
  {
    icon:<IoMail/>,
    heading:'Email to get Free Quote',
    contactVia: 'info@example.com'
  },
  {
    icon:<FaLocationDot/>,
    heading:'Visit our Office',
    contactVia: 'Office 123,Main Street Plaza,DownTown City,Country'
  },

]

export default function ContactUs() {
  return (
    <div>
       <InfoBar/>
        <NavBar/>
       
    <div className='h-[130vh] mt-24 flex flex-col justify-center'>

{/* Contact Details */}

    <div className='pb-28'>
      <div className='pb-10 text-center'>
        <h1 className='text-[2.5rem] text-blue-500 font-bold'>Contact Us</h1>
        <div className='w-[14rem] border-b-[4px] border-blue-400 m-auto mb-5 rounded-xl'></div>
        <h3 className='text-gray-500 font-medium'>If You Have Any Query, Feel Free To Contact Us</h3>
      </div>
    <div className=' flex justify-evenly w-full flex-wrap'>
      {contact_data.map((data,index) => (
        <div key={index} className='flex gap-x-3 items-center max-w-[22rem] w-full h-auto'>
          
          <div className='w-[4rem] h-[4rem] bg-blue-500 text-[1.5rem] text-white rounded-full flex items-center justify-center flex-wrap'>
           {data.icon}
          </div>
          <div className='flex-1'>
            <h4 className='text-[1.2rem] text-gray-400 font-medium'>{data.heading}</h4>
            <p className='text-blue-500 font-bold text-[1.1rem] break-words'>{data.contactVia}</p>
          </div>

        </div>
        ))}
    </div>
        </div>


   {/* Contact Form */}

        <div className='flex justify-evenly items-center max-w-screen-2xl'>
            <form  className='border-[1.5px] border-gray-300 max-w-[40rem] w-[30rem] rounded-xl p-10 space-y-10'>
              
              <div className='w-full space-y-1'>
              <h2 className='text-[1.4rem] font-medium text-gray-500'>Get in Touch with Us</h2>
              <div className='w-[14rem] border-b-2 border-blue-400'></div>
              </div>
              
              <input type="text" name="Name" className='border-b-[1px] border-gray-400 w-full px-1 py-2 focus:outline-none' placeholder='Name'/>
              <br />

              <input type="email" name="Email"   className='border-b-[1px] border-gray-400 px- py-2 w-full focus:outline-none' placeholder='Email Address'/>
              <br />

              <input type="text" name="Name" className='border-b-[1px] border-gray-400 px- py-2 w-full focus:outline-none' placeholder='Message'/>
              
              <div>
              <button className='bg-blue-500 text-white w-full rounded-md py-2.5 font-medium hover:bg-blue-400'>Send Message</button>
              </div>
            </form>

          <div>
            <img src="/Service icons/ContactUs.jpg" alt="ContactUs" className='max-w-[40rem]'/>
          </div>


        </div>
        </div>
        <Footer/>
        <Bottom_bar/>
      
    </div>
  )
}
