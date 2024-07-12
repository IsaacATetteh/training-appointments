import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";
const Testimonials = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold pb-10">Testimonials:</h2>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8 border-0 h-[350px]">
          <div className="">
            <article className="space-y-4 ">
              <h3 className="text-4xl font-semibold">Buronbek Mirzasalimov</h3>
              <p className="text-lg">
                University of Stirling & former Uzbekistan U19s
              </p>

              <p>
                "What makes Deep Skill Training so different is the variability
                in the training, the exercises we trained felt more than just
                drills and the purpose of each was well explained plus the
                feedback at the end was really useful."
              </p>
            </article>
          </div>
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt=""
              src="/testimonial1.jpg"
              className="absolute inset-0 h-full w-full object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8 border-0 h-[350px]">
          <div className="">
            <article className="space-y-4 ">
              <h3 className="text-4xl font-semibold">Buronbek Mirzasalimov</h3>
              <p className="text-lg">
                University of Stirling & former Uzbekistan U19s
              </p>

              <p>
                "What makes Deep Skill Training so different is the variability
                in the training, the exercises we trained felt more than just
                drills and the purpose of each was well explained plus the
                feedback at the end was really useful."
              </p>
            </article>
          </div>
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt=""
              src="/testimonial1.jpg"
              className="absolute inset-0 h-full w-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
