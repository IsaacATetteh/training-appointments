import React from "react";

const Pricing = () => {
  return (
    <div className="flex mx-auto justify-center max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-4 md:gap-8">
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              1 to 1<span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-gray-700">Technical focus</p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl mr-2 font-bold text-gray-900 sm:text-4xl">
                £25
              </strong>

              <span className="text-sm font-medium text-gray-700">1 hour</span>
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl mr-2 font-bold text-gray-900 sm:text-4xl">
                £40
              </strong>

              <span className="text-sm font-medium text-gray-700">2 hours</span>
            </p>

            <a
              className="mt-4 block rounded border border-indigo-300 bg-indigo-300 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-300 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="#"
            >
              Request Now
            </a>
          </div>
        </div>
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Small Group <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">2-6 players</p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl mr-2 font-bold text-gray-900 sm:text-4xl">
                £45
              </strong>

              <span className="text-sm font-medium text-gray-700">1 hour</span>
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl mr-2 font-bold text-gray-900 sm:text-4xl">
                £80
              </strong>

              <span className="text-sm font-medium text-gray-700">2 hours</span>
            </p>

            <a
              className="mt-4 block rounded border border-indigo-300 bg-indigo-300 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-300 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="#"
            >
              Request Now
            </a>
          </div>
        </div>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8 border-0">
            <h2 className="text-lg font-medium text-gray-900">
              Bundle <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Four 1 to 1 sessions picked at your convineince<br></br> (1 hour
              long each)
            </p>

            <p className="mt-2 sm:mt-4 sm:mb-0 md:mb-[30px]">
              <strong className="text-3xl mr-2 font-bold text-gray-900 sm:text-4xl">
                £90
              </strong>
            </p>

            <a
              className="mt-4 block rounded border border-indigo-300 bg-indigo-300 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-300 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="#"
            >
              Request Now
            </a>
          </div>
        </div>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Referals
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700"></p>
          </div>

          <div className="p-6 sm:px-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
