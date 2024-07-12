import React from "react";

const Info = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold sm:text-5xl">Meet the Coach:</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt=""
              src="/coach.jpg"
              className="rounded-md absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="lg:py-16">
            <article className="space-y-4 text-white">
              <h4 className="text-3xl">Experience</h4>
              <p>
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
              <h3 className="text-3xl">Training Philosophy</h3>
              <p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
