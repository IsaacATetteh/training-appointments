import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="/heroimage.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl uppercase">
              Developing your skill set, the tailored way
            </h2>

            <div className="flex flex-col md:flex-row md:justify-evenly mt-5">
              <div className="flex">
                <Image
                  src="/tick.svg"
                  alt="tick"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <p>1 to 1</p>
              </div>
              <div className="flex">
                <Image
                  src="/tick.svg"
                  alt="tick"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <p>Two player sessions</p>
              </div>
              <div className="flex">
                <Image
                  src="/tick.svg"
                  alt="tick"
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <p>Small groups</p>
              </div>
            </div>
            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
