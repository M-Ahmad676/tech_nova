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
    contactVia: 'Office 123,Main Street Plaza,DownTown City'
  },

]

export default function ContactUs() {
  return (
    <div>
       <InfoBar/>
        <NavBar/>
       
    <div className='h-[110vh] mt-24 flex flex-col justify-center gap-y-10 max-w-screen-2xl mx-auto'>

{/* Contact Details */}

    {/* <div className='pb-28 px-3'>
      <div className='pb-10 text-center'>
        <h1 className='text-[2rem] sm:text-[2.5rem] text-blue-500 font-bold '>Contact Us</h1>
        <div className='w-[14rem] border-b-[4px] border-blue-400 m-auto mb-5 rounded-xl'></div>
        <h3 className='text-gray-500 font-medium text-sm sm:text-base'>If You Have Any Query, Feel Free To Contact Us</h3>
      </div>
    <div className=' flex justify-evenly w-full flex-wrap gap-y-8 md:gap-y-0 '>
      {contact_data.map((data,index) => (
        <div key={index} className='flex gap-x-3 items-center max-w-[30rem] min-[729px]:max-w-[22rem] w-full h-auto shadow-md px-5 py-3 shadow-gray-300 rounded-lg'>
          
          <div className='w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] bg-blue-500 text-[1.2rem] sm:text-[1.5rem] text-white rounded-full flex items-center justify-center flex-wrap'>
           {data.icon}
          </div>
          <div className='flex-1'>
            <h4 className='text-base sm:text-base text-gray-400 font-medium'>{data.heading}</h4>
            <p className='text-blue-500 font-bold text-sm sm:text-[1.1rem] break-words'>{data.contactVia}</p>
          </div>

        </div>
        ))}
    </div>
        </div> */}
   <div className='text-center lg:text-start px-[9rem]'> 
    <div className='flex items-center gap-x-3 gap-y-2 flex-col-reverse lg:flex-row justify-center lg:justify-normal '>
     <div className='h-[2.5px] bg-blue-500 w-[5rem] rounded-md'></div>
     <h4 className='text-blue-500 text-[1.4rem] font-medium'>Contact Us</h4>
    </div>     
    <h1 className='text-[2rem] sm:text-[2.5rem] font-medium'>Let's Get in Touch </h1>
  
    </div>

   {/* Contact Form */}
         
        <div className='flex justify-evenly items-center pb-10'>
            <form  className='max-w-[40rem] w-[30rem] rounded-xl  space-y-10 mx-5'>
              
              
              <input type="text" name="Name" className='border-b-[1px] border-gray-400 w-full px-1 py-2 focus:outline-none' placeholder='Name'/>
              <br />

              <input type="email" name="Email"   className='border-b-[1px] border-gray-400 px- py-2 w-full focus:outline-none' placeholder='Email Address'/>
              <br />

              <textarea type="text" name="Name" className='border-b-[1px] border-gray-400 px- py-2 w-full focus:outline-none' placeholder='Message' rows={5}/>
              
              <div>
              <button className='bg-blue-500 text-white w-full rounded-md py-2.5 font-medium hover:bg-blue-400'>Send Message</button>
              </div>
            </form>

          <div className='hidden lg:block'>
            <img src="/Service icons/ContactUsVector.jpg" alt="ContactUs" className='max-w-[40rem] w-full'/>
          </div>


        </div>
        </div>
        <Footer/>
        <Bottom_bar/>
      
    </div>
  )
}
