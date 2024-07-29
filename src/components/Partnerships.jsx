import React from "react";

const Partnerships = () => {
  return (
    <section className="border-t-2">
      <div className="flex  flex-col   items-center mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
        <header className="text-center">
          <h2 className="text-xl font-bold sm:text-3xl md:text-4xl">
            Partnerships
          </h2>
        </header>
        <ul className=" grid grid-cols-2 justify-center items-center">
          <li className="w-40 md:w-64">
            <a className="group relative block">
              <img
                src="/VX3.png"
                alt=""
                className="aspect-square w-40 md:w-64 object-contain transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6"></div>
            </a>
          </li>
          <li className="w-40 md:w-64">
            <a className="group relative block">
              <img
                src="/GRIPWORX.png"
                alt=""
                className="aspect-square w-40 md:w-64 object-contain transition duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6"></div>
            </a>
          </li>
        </ul>
        <p className="text-xs text-gray-500">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Partnerships;
