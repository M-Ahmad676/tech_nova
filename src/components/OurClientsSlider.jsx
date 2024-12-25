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
    };

    return (
        <div className="h-[70vh] flex flex-col justify-center px-36 gap-y-14">
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
                                className="w-[10rem] h-auto object-contain"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
