"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
        <div className=" grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-32 md:h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="/test.png"
              className="my-auto absolute inset-0 h-auto w-auto object-cover"
            />
          </div>
          <div className="lg:py-24">
            <h2 className="text-3xl lg:text-5xl font-extrabold sm:text-4xl uppercase md:h-36 h-28">
              Developing your <span className="underline">deep skill,</span>{" "}
              <TypeAnimation
                sequence={["the tailored way", 3000, "your way", 3000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              <div className="flex">
                <Image
                  src="/tick.png"
                  alt="tick"
                  width={23}
                  height={16}
                  className="mr-2"
                />
                <p>1 to 1</p>
              </div>
              <div className="flex">
                <Image
                  src="/tick.png"
                  alt="tick"
                  width={23}
                  height={16}
                  className="mr-2"
                />
                <p>Small groups</p>
              </div>
              <div className="flex w-52 border-0 border-black">
                <Image
                  src="/tick.png"
                  alt="tick"
                  width={23}
                  height={16}
                  className="mr-2"
                />
                <p>Goalkeepers</p>
              </div>
              <div className="flex">
                <Image
                  src="/tick.png"
                  alt="tick"
                  width={23}
                  height={16}
                  className="mr-2"
                />
                <p>UEFA Qualified</p>
              </div>
              <div className="flex">
                <Image
                  src="/tick.png"
                  alt="tick"
                  width={23}
                  height={16}
                  className="mr-2"
                />
                <p>PVG Certified</p>
              </div>

              <div className="flex">
                <Image
                  src="/tick.png"
                  alt="tick"
                  width={23}
                  height={16}
                  className="mr-2"
                />
                <p>First Aid Trained</p>
              </div>
            </div>
            <button className="mt-4 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:bg-[#62c0f7] px-8 py-2 bg-[#38B6FF] rounded-md text-white font-light transition duration-200 ease-linear">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
