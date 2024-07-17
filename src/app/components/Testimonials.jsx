import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";
const Testimonials = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-center text-4xl font-bold md:text-5xl mb-10 md:mb-20">
          Testimonials:
        </h1>
        <div className="md:grid grid-cols-2 grid-rows-2 border-0 border-black w-full gap-y-10">
          <div className="flex items-center text-center h-96 border-0 border-red-500">
            <article className="space-y-4 text-lg">
              <h3 className="text-3xl md:text-4xl font-semibold">
                Buronbek Mirzasalimov
              </h3>
              <p className="font-semibold text-gray-500">
                University of Stirling & former Uzbekistan U19s
              </p>

              <p className="text-md md:text-lg">
                "What makes Deep Skill Training so different is the variability
                in the training, the exercises we trained felt more than just
                drills and the purpose of each was well explained plus the
                feedback at the end was really useful."
              </p>
            </article>
          </div>
          <div className="flex justify-center items-center  border-0 border-red-500">
            <img
              alt="Buronbek Mirzasalimov"
              src="/testimonial1.jpg"
              className="rounded-md h-96 w-96"
            />
          </div>
          <div className="flex items-center text-center h-96 border-0 border-red-500">
            <article className="space-y-4 text-lg">
              <h3 className="text-4xl font-semibold">Aaron Ashley</h3>
              <p className="font-semibold text-gray-500">
                Semi Pro (Step 6) - Central Ajax
              </p>

              <p className="text-md md:text-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
            </article>
          </div>
          <div className="flex justify-center items-center  border-0 border-red-500">
            <img
              alt="Buronbek Mirzasalimov"
              src="/testimonial2.png"
              className="rounded-md h-96 w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
