import React from "react";

const Partnerships = () => {
  return (
    <section className="bg-black text-white">
      <div className="flex  flex-col   items-center mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
        <header className="text-center">
          <h2 className="text-xl font-bold  sm:text-3xl">Partnerships</h2>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-28 lg:grid-cols-2 justify-center items-center   ">
          <li className="w-72">
            <a href="#" className="group relative block">
              <img
                src="/partner1.png"
                alt=""
                className="aspect-square w-72 object-contain transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6"></div>
            </a>
          </li>
          <li className="w-72">
            <a href="#" className="group relative block">
              <img
                src="/partner1.png"
                alt=""
                className="aspect-square w-72 object-contain transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6"></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Partnerships;
