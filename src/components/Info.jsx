"use client";
import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <section className="flex min-h-screen items-center bg-[#38b6ff] text-white">
      <motion.div
        className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold lg:text-5xl">
            Meet the Coach: <span className="text-black">Richard Holmes</span>
          </h2>
        </motion.div>
        <motion.div
          className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div
            className="relative h-64 overflow-hidden sm:h-80 lg:h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img
              alt=""
              src="/coach.png"
              className="m-auto absolute inset-0 h-64 md:h-72 lg:h-auto md:w-72 lg:w-auto object-cover"
            />
          </motion.div>
          <motion.div
            className="lg:py-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <article className="space-y-4">
              <h4 className="text-3xl text-black font-semibold">Experience</h4>
              <p className="text-lg">
                1 to 1 & small group coaching specialist with 3 years of active
                coaching experience, having trained players as young as 5 years
                old to 32 years old on a 1 to 1 basis. Players trained have
                ranged from professional and representing their nation to
                scholarship athletes at USA division 1 schools and those just
                starting out or playing at a recreational level.
              </p>
              <p>
                Current Stirling Albion Academy Coach working with the U16s,
                U20s and Men’s First Team. Prior experience includes coaching
                the Junior Academy (Ages 9-14) at Dundee United Community Trust
                along with starting out at highly competitive grassroots teams
                at the U18/U13 levels in London.
              </p>
              <h3 className="text-3xl text-black font-semibold">
                Training Philosophy
              </h3>
              <p className="text-lg">
                The best players are the best problem solvers, for this to
                happen our training has to give us constant problems for us to
                solve along with having to adapt to a limitless variety of
                situations rather than training the same repeatable problem over
                and over again. By training with us you will learn that all the
                movements you make are forms of skill and that ‘deep skill’ is
                the ability as well as adaptability to perform in a variety of
                environments. All sessions are in line with this and is tailored
                to activate your ‘deep skill’.
              </p>
            </article>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Info;
