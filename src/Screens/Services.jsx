import React from "react";
import Cover from "../components/Cover";
import ServiceCards from "../components/ServiceCards";

export default function Services() {
  return (
    <div>
      <div className="mt-36 sm:mt-10 overflow-hidden">
        <Cover
          title="Innovative Solutions, Tailored for You"
          subheading="Your Vision, Our Expertise"
          description="From custom software development to cutting-edge UI/UX design, we transform ideas into reality. Whether you're a startup or an enterprise, our expert team delivers scalable, secure, and high-performance solutions tailored to your unique business needs."
          image="/Service icons/Services.jpg"
          imageSize="max-w-[35rem]"
        />
      </div>
      <div className="min-h-screen py-10 max-w-screen-2xl mx-auto">
        <div className="w-full text-center m-auto">
          <h1 className="text-[2.1rem] sm:text-[2.5rem] font-bold bg-custom-gradient2 bg-clip-text text-transparent">
            Our Services
          </h1>
          <div className="h-[4px] bg-blue-400 w-[16rem] rounded-md m-auto"></div>
        </div>

        <div className="h-auto py-20 flex justify-center items-center px-5">
          <ServiceCards />
        </div>
      </div>
    </div>
  );
}
