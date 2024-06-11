import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import Image from "next/image";
const ContactDetails = () => {
  return (
    <section className="mb-10">
      <div className="   mx-auto px-4 py-8 border-0 border-black sm:px-6 sm:py-12 lg:px-14 lg:py-10 bg-indigo-100 text-gray-700 min-h-80 text-center">
        <h1 className="uppercase text-4xl font-semibold">Testimonials</h1>
        <div className="flex  items-center flex-col md:flex-row">
          <div className="w-3/4 md:w-1/2 align-middle h-48 ">
            <div className="flex justify-center">
              <ul className="flex flex-col border-0 border-black mt-8 space-y-1 text-sm text-gray-700">
                <div className="flex text-left">
                  <p
                    className="text-[20px]
              "
                  >
                    Great first session. Well constructed and tailored to our
                    requirements. Excellent communications before, during and
                    after - open to constructive feedback and ways to
                    accommodate future sessions. Will definitely be back for
                    future coaching.{" "}
                    <span className="font-semibold">- Angus, Parent</span>
                  </p>
                </div>
              </ul>
            </div>
          </div>
          <div className="w-3/4 md:w-1/2 align-middle h-48 border-black">
            <div className="flex justify-center">
              <ul className="flex flex-col border-0 border-black mt-8 space-y-1 text-sm text-gray-700">
                <div className="flex text-left">
                  <p
                    className="text-[20px]
              "
                  >
                    Logan loved his session, was exactly what he needs. Looking
                    forward to next week already.
                    <span className=" ml-2 font-semibold">
                      - Stuart, Parent
                    </span>
                  </p>
                </div>
              </ul>
            </div>
          </div>
          <div className="w-3/4 md:w-1/2 align-middle h-48 border-black">
            <div className="flex justify-center">
              <ul className="flex flex-col border-0 border-black mt-8 space-y-1 text-sm text-gray-700">
                <div className="flex text-left">
                  <p
                    className="text-[20px]
              "
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <span className="font-semibold ml-2">- Lorem, Player</span>
                  </p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
