import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ProjectCards() {

    const Projects = [

        {
         thumbnail: '/Service icons/Project1.png',
         title: 'Iris Engine • Video Game Store',
         description: 'Developed a modern and dynamic video game store platform designed to provide users with a seamless browsing experience. Built using React JS and Tailwind CSS, the site features an intuitive layout, responsive design, and visually appealing aesthetics tailored to gaming enthusiasts.',
         technologies: 'React Js, Tailwind CSS, Figma',
        }
        ,
        {
          thumbnail: '/Service icons/Project2.png',
          title: 'UroVision • Kidney Stone Detection System',
          description: 'UroVision is an advanced kidney stone detection system featuring a mobile app for patients and a web app for doctors.',
          technologies: 'React Js, React Native, Tailwind CSS, FireBase, NodeJS, Figma',
         }
         ,
         {
          thumbnail: '/Service icons/Project3.png',
          title: 'DevSphere • Business Profile Site',
          description: 'DevSphere is a modern portfolio website designed for software houses, built using React JS and Tailwind CSS. It features an intuitive layout, smooth navigation, and a fully responsive design, showcasing projects and services.',
          technologies: 'React Js, Tailwind CSS',
         },
         {
          thumbnail: '/Service icons/Project 4.png',
          title: 'GEAR BOX • Auto Part Store',
          description: 'GearBox is a sleek and user-friendly online auto parts store designed for seamless shopping experiences. Built with modern UI/UX principles, it features a clean layout, intuitive navigation, and responsive design, ensuring accessibility across all devices.',
          technologies: 'React Js, Tailwind CSS, Figma',
         }

    ]

  return (
   <div className='grid grid-cols-1 min-[950px]:grid-cols-[1fr_1fr] gap-x-10 h-auto justify-items-center '>  
  {Projects.map((project,index) => (
    <div key={index} className='min-[950px]:max-w-[40rem] w-full'>

       <div className='shadow-md shadow-gray-400 rounded-xl transition-all duration-300 ease-in-out hover:scale-[1.02]'>
        <LazyLoadImage src={project.thumbnail} alt={project.title} className='object-cover w-full h-full rounded-xl' effect='blur' />
       </div>
       <div className='py-7 space-y-2 h-auto min-[550px]:h-[15rem]'>
          <h1 className='text-[1.5rem] sm:text-[1.7rem] font-bold'>{project.title}</h1>
          <p className='text-gray-600'>{project.description}</p>
       </div> 
    </div>
    ))}
    </div>
  )
}


