import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="">
      <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-0 ">
        <h1 className="text-center text-4xl font-bold md:text-5xl mb-7">
          Testimonials
        </h1>{" "}
        <div
          className="w-full h-px max-w-6xl mx-auto mb-20"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
          }}
        ></div>
        <div className="flex flex-col md:grid grid-cols-3 gap-6 border-0 border-black w-full">
          <div className="flex justify-center items-center border-0 border-red-500">
            <img
              alt="Buronbek Mirzasalimov"
              src="/testimonial1.jpg"
              className="rounded-md h-auto w-72 md:w-96"
            />
          </div>
          <div className="col-span-2 flex items-center border-0 border-red-500">
            <article className="space-y-4 text-lg text-center">
              <h4 className="text-3xl md:text-4xl font-bold ">
                Buronbek Mirzasalimov
              </h4>
              <p className="font-semibold text-[#38b6ff] md:text-2xl">
                University of Stirling & former Uzbekistan U19s
              </p>
              <p className="text-sm md:text-xl font-medium ">
                "What makes Deep Skill Training so different is the variability
                in the training, the exercises we trained felt more than just
                drills and the purpose of each was well explained plus the
                feedback at the end was really useful."
              </p>
            </article>
          </div>
          <div className="flex justify-center items-center border-0 border-red-500">
            <img
              alt="Aaron Ashley"
              src="/testimonial2.png"
              className="rounded-md h-auto w-72 md:w-96"
            />
          </div>
          <div className="col-span-2 flex items-center border-0 border-red-500">
            <article className="space-y-4 text-lg text-center">
              <h4 className="text-3xl md:text-4xl font-bold ">Aaron Ashley</h4>
              <p className="font-semibold text-[#38b6ff] md:text-2xl">
                Central Ajax (Semi Pro), former Bromley Academy & player of the
                season @ Nechells Athletic
              </p>
              <p className="text-[16px] md:text-xl font-medium ">
                “Well executed and explained session plans is what really stood
                out for me with Deep Skill Training, the customised aspect is
                what made me be able to trust and see progress in my
                development.”
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
