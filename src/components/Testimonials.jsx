import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center text-center mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-0 ">
        <h1 className="text-4xl font-bold md:text-5xl  mb-4">Testimonials</h1>
        <p className="mb-7 lg:mb-20 w-full text-lg font-medium px-3">
          Our core values are the heart of all that I do. They are intergrated
          into my daily work life in order to help me remember that our clients
          always come first, the last thank you should always come from me.
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-16 md:flex-row flex-col w-full">
          <div className="flex items-center bg-[#EBEBEB] flex-col w-80 md:w-96 h-[35rem] rounded-xl shadow-lg shadow-gray-400 border-black">
            <img
              alt="Buronbek Mirzasalimov"
              src="/testimonial1.jpg"
              className="rounded-full h-auto w-40 md:w-48 mt-10"
            />
            <h2 className="font-bold text-xl mt-5"> Buronbek Mirzasalimov</h2>
            <p className="font-medium text-gray-400 md:text-sm">
              University of Stirling & former
              <br /> Uzbekistan U19s
            </p>
            <div className="flex mt-2 mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <p className="px-5">
              "What makes Deep Skill Training so different is the variability in
              the training, the exercises we trained felt more than just drills
              and the purpose of each was well explained plus the feedback at
              the end was really useful."
            </p>
          </div>
          <div className="flex items-center bg-[#EBEBEB] flex-col w-80 md:w-96 h-[35rem] rounded-xl shadow-lg shadow-gray-400 border-black">
            <img
              alt="Aaron Ashley"
              src="/testimonial2.png"
              className="rounded-full h-auto w-40 md:w-48 mt-10"
            />
            <h2 className="font-bold text-xl mt-5"> Aaron Ashley</h2>
            <p className="font-medium text-gray-400 md:text-sm">
              Central Ajax (Semi Pro) & player of
              <br /> the season @ Nechells Athletic
            </p>
            <div className="flex mt-2 mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
            <p className="px-5">
              “Well executed and explained session plans is what really stood
              out for me with Deep Skill Training, the customised aspect is what
              made me be able to trust and see progress in my development.”
            </p>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
