import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function OurClientsSlider() {
    const clients = [
        'https://www.eziline.com/wp-content/uploads/1310-13.png',
        'https://www.eziline.com/wp-content/uploads/135-13.png',
        'https://www.eziline.com/wp-content/uploads/133-13-1.png',
        'https://www.eziline.com/wp-content/uploads/dasdasda.png',
        'https://www.eziline.com/wp-content/uploads/Artboard-3-copy-4.png',
        'https://www.eziline.com/wp-content/uploads/Artboard-3.png',
        'https://www.eziline.com/wp-content/uploads/dsadasdassa.png',
        'https://www.eziline.com/wp-content/uploads/ezitech.png',
        'https://www.eziline.com/wp-content/uploads/Artboard-3-copy-11.png',
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <div className="h-[70vh] flex flex-col justify-center max-w-screen-2xl w-full px-10 2xl:px-32 gap-y-14">
            <div>
            <h3 className="text-[2rem] font-semibold">Our Clients</h3>
            <p className='text-gray-600'>trusted by companies and organizations around the world</p>
            <div className='w-28 h-[0.1rem] bg-blue-300 my-5'></div>
            </div>
            <div>
                <Slider {...settings}>
                    {clients.map((company, index) => (
                        <div key={index} className="ml-20">
                            <img
                                src={company}
                                alt={`Client ${index + 1}`}
                                className=" w-[55%] object-contain"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
