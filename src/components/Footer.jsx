import React from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import Logo from "../assets/Tech Nova.png"

export default function Footer() {
  const posts = [
    {
      icon: <BsFillCalendarEventFill />,
      heading: "16th anniversery",
      date: "Feburary 4,2024",
    },
    {
      icon: <BsFillCalendarEventFill />,
      heading: "Presidential Award won by Tech Nova",
      date: "Feburary 4,2024",
    },
    {
      icon: <BsFillCalendarEventFill />,
      heading: "Tech Nova Exhibition at LEAP 2024",
      date: "Feburary 7,2024",
    },
  ];

  const contacts = [
    {
      branch: "PK Office",
      address: "304-G, Amna Plaza Pesh Rd Rawalpindi",
    },
    {
      branch: "US Office",
      address: "16192 Coastal Highway Lewes, DE",
    },
    {
      branch: "UK Office",
      address: "Intl. House, 776-778 Barking Rd London",
    },
    {
      branch: "FR Office",
      address: "5 avenue Pierre Salvi 95500 Gonesse Paris",
    },
  ];

  return (
    <div className="h-auto py-16 xl:h-[80vh] bg-[#131313] flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9 xl:flex w-full justify-evenly px-5 gap-y-12">
      <div className="max-w-[25rem] m-auto xl:m-0 w-full space-y-4">
        <h4 className="text-white text-[1.2rem] sm:text-[1.5rem] font-bold">ABOUT</h4>
        <img src={Logo} alt="tech Nova" className="w-[8rem]" />
        <p className="text-gray-300 text-sm leading-6">
          Tech House Having 100+ Quality Products and Innovations at national
          and international markets. Rated as Best Software House in Region
        </p>
      </div>

      <div className="max-w-[25rem] col-start-1 m-auto xl:m-0 w-full">
        <h4 className="text-white text-[1.2rem] sm:text-[1.5rem] font-bold pb-8">
          RECENT POSTS
        </h4>
        <div className="w-full space-y-10 ">
          {posts.map((post, index) => (
            <div key={index} className="group">
              <div className="flex items-center gap-x-7">
                <div className="bg-gray-700 rounded-full w-[3rem] h-[3rem] flex items-center justify-center">
                  <span className="text-gray-400 text-[1.3rem] sm:text-[1.7rem]">
                    {post.icon}
                  </span>
                </div>
                <div className="space-y-3">
                  <a
                    href="/"
                    className="text-white cursor-pointer group-hover:text-blue-500"
                  >
                    {post.heading}
                  </a>
                  <p className="text-gray-400 text-xs">{post.date}</p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-500 my-5"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[25rem] text-sm m-auto xl:m-0 h-full w-full">
        <h4 className="text-white  text-[1.2rem] sm:text-[1.5rem] font-bold pb-8">CONTACTS</h4>
        <ul className="space-y-2">
        {contacts.map((office,index) => (
          <li key={index} className="text-gray-400"><span className="font-bold text-white">{office.branch}:</span> {office.address}</li>
        ))}
        </ul>
       
       <ul className="pt-10 text-gray-400 space-y-2">
        <li>Ph: +92 51 5491184 / +92 51 8772888</li>
        <li>Email : info@technova.com</li>
       </ul>
      </div>
      </div>
    </div>
  );
}
