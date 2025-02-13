import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="max-w-screen-2xl my-10 mx-auto">
        <div className="flex justify-around items-center flex-col h-auto py-20 lg:flex-row lg:h-[100vh] px-4 sm:px-20">
          <div className="lg:max-w-[50%] w-full">
            <div className="flex items-start sm:items-center gap-x-3 gap-y-2 flex-col-reverse lg:flex-row justify-center lg:justify-normal ">
              <div className="h-[2.5px] bg-blue-500 w-[5rem] rounded-md"></div>
              <h1 className="text-[2rem] sm:text-[2.5rem] font-bold bg-custom-gradient2 bg-clip-text text-transparent">
                About Us
              </h1>
            </div>
            <p className="py-5 leading-8 text-gray-700">
              Welcome to **Tech Nova**, where innovation meets excellence in
              software development. We are a cutting-edge software house
              dedicated to crafting modern, scalable, and efficient digital
              solutions for businesses of all sizes. At Tech Nova, our team of
              passionate developers, designers, and strategists works tirelessly
              to transform ideas into impactful technology. We specialize in web
              development, mobile apps, UI/UX design, and cloud-based solutions,
              ensuring that each project is tailored to meet your unique needs.
              Founded on the principles of creativity and collaboration, Tech
              Nova thrives on solving complex challenges with simple yet
              effective solutions. Our mission is to empower businesses to
              embrace the future of technology with confidence, unlocking their
              full potential in an ever-evolving digital landscape. Why choose
              Tech Nova? Because we don’t just build software – we create
              experiences. We believe in forging long-term partnerships with our
              clients, driven by transparency, trust, and a shared vision for
              success. Let’s innovate together. Join us at Tech Nova, and let’s
              shape the future, one line of code at a time.
            </p>
          </div>
          <div className="lg:max-w-[50%] w-full flex justify-center  ">
            <img
              src="/Service icons/AboutUs.jpg"
              alt="About us"
              className="max-w-[35rem] w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
