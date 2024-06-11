import React from "react";

const Info = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold sm:text-5xl">Meet the coach</h2>
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
            <article className="space-y-4 text-gray-600">
              <h4 className="text-3xl">Experience</h4>
              <p>
                Youth coaching specialist, currently coaching the Junior Academy
                (Ages 9 to 14) at Dundee United Community Trust alongside
                coaching at Box Soccer Training Perth (Ages 5 to 15) and Soccer
                Stars Academy Alloa (Ages 3 to 9). Prior experience includes
                head coaching highly competitive grassroots clubs in London at
                the U18 & U13 level.
              </p>
              <h3 className="text-3xl">Session Plan Example</h3>
              <p>
                Fun and engaging sessions all with a twist. I use warm-ups to
                set the tone of the session. Alongside this, I typically train
                fundamentals in hidden ways that the player may not realise by
                using themes/concepts for my session plans, this is important as
                a big chunk of football is based on effortless decision making.
                That's why this plan aims to encourage players to perform skills
                in a more natural manner while drastically improving their
                confidence as they believe in the training they have done. This
                concept is known as ‘deep skill’ and each session is highly
                tailored to activating that player’s ‘deep skill’.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
