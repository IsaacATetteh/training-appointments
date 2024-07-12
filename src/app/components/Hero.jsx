import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="/heroimage.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="lg:py-24">
            <h2 className="text-3xl lg:text-5xl font-extrabold sm:text-4xl uppercase">
              Developing your <span className="underline">deep skill,</span> the
              tailored way.
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
            <a
              href="#"
              className="mt-8 inline-block rounded bg-[#38b6ff] px-12 py-3 text-sm font-medium transition hover:bg-[#6fcaff] focus:outline-none focus:ring focus:ring-yellow-400 text-white"
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
