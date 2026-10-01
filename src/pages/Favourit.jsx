import React, { useState } from "react";

import MountainImage from "../assets/Image1.jpg";
import SunsetImage from "../assets/Image2.jpg";

function Favourit() {
  const [activeCard, setActiveCard] = useState(null);

  const interests = [
    {
      icon: "🏔️",
      title: "Mountains",
      short: "Where everything feels peaceful.",
      description:
        "She loves mountains because they bring a different kind of peace. The quiet surroundings, fresh air, beautiful views and endless sky make everything feel calm. Sometimes, just sitting somewhere between the mountains and enjoying the silence can make the whole world feel a little more beautiful.",
      image: MountainImage,
    },
    {
      icon: "🌧️",
      title: "Rain",
      short: "Getting drenched and enjoying the moment.",
      description:
        "Rain has its own kind of magic. She loves those moments when the sky turns grey, the rain starts falling and everything suddenly feels peaceful. Getting a little drenched, listening to the sound of raindrops and enjoying the weather makes an ordinary day feel special.",
    },
    {
      icon: "☕",
      title: "Chai",
      short: "A perfect cup on a rainy evening.",
      description:
        "A simple cup of chai can make a normal evening feel unforgettable. Especially when it is raining outside, sitting peacefully with a warm cup of tea feels like a little escape from the world. Sometimes happiness really can be found in the smallest things.",
    },
    {
      icon: "🖤",
      title: "Black Clothes",
      short: "Simple. Classy. Beautiful.",
      description:
        "Black has a different kind of beauty. It is simple, elegant and timeless. She loves black clothes because they can look classy without trying too hard. There is something about black that makes a simple outfit feel confident, beautiful and special.",
    },
    {
      icon: "🎧",
      title: "Music",
      short: "A little escape from the world.",
      description:
        "Music can change the mood without saying a single word. She loves listening to music when she wants to relax, think, smile or simply escape from everything for a while. Sometimes one song can bring back a memory or create a completely new feeling.",
    },
    {
      icon: "🌅",
      title: "Sunsets",
      short: "Beautiful moments worth remembering.",
      description:
        "There is something beautiful about watching the sun slowly disappear into the sky. The changing colors, peaceful atmosphere and quiet moment make sunsets unforgettable. Some moments are not meant to be rushed; they are meant to be enjoyed slowly and remembered forever.",
      image: SunsetImage,
    },
    {
      icon: "🚗",
      title: "Long Drives",
      short: "Good music, open roads, no destination.",
      description:
        "Long drives are not always about reaching somewhere. Sometimes they are about enjoying the road, listening to good music, watching the views and forgetting about everything for a while. An open road, peaceful weather and the right song can create the perfect moment.",
    },
    {
      icon: "🌌",
      title: "Night Sky",
      short: "Quiet nights and endless thoughts.",
      description:
        "The night sky has a special kind of silence. Looking at the stars, watching the moon and simply sitting quietly can make everything feel peaceful. It is the perfect time for endless thoughts, dreams and beautiful little conversations with yourself.",
    },
    {
      icon: "🌿",
      title: "Nature",
      short: "Peace, fresh air and beautiful views.",
      description:
        "Nature has a way of making everything feel lighter. Green trees, fresh air, flowers, open skies and peaceful surroundings create a feeling that is difficult to explain. Sometimes being close to nature is all you need to forget the noise of the world.",
    },
    {
      icon: "💕",
      title: "Little Things",
      short: "Because small moments can mean everything.",
      description:
        "Sometimes the smallest things create the biggest memories. A simple message, a cup of chai, a beautiful sunset, a random smile, a favorite song or a peaceful evening can become something worth remembering. Life becomes beautiful when we learn to appreciate these little moments.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#05020d] px-4 py-16 text-white sm:px-6 lg:px-10">

      {/* Heading */}
      <div className="mx-auto mb-14 max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-pink-300">
          ✦ Little Things About Her ✦
        </p>

        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Things She{" "}
          <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-200 bg-clip-text text-transparent">
            Loves ❤️
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
          Some things are simple, but they become beautiful when they are
          connected with someone special.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((item, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={item.title}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() =>
                setActiveCard(isActive ? null : index)
              }
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-700 cursor-pointer
                ${
                  isActive
                    ? "min-h-[430px] -translate-y-2 border-pink-400/40 shadow-[0_20px_60px_rgba(236,72,153,0.25)]"
                    : "min-h-[250px] hover:-translate-y-2 hover:border-pink-300/30"
                }
              `}
            >
              {/* Background Image */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700
                    ${
                      isActive
                        ? "scale-110 opacity-35"
                        : "scale-100 opacity-0 group-hover:opacity-20"
                    }
                  `}
                />
              )}

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/95" />

              {/* Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl transition-all duration-700 group-hover:bg-pink-500/30" />

              {/* Card Content */}
              <div className="relative z-10 flex h-full min-h-[250px] flex-col justify-between p-6 sm:p-7">

                {/* Top */}
                <div>
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-4xl shadow-xl backdrop-blur-md transition-all duration-500
                      ${
                        isActive
                          ? "scale-110 rotate-3"
                          : "group-hover:scale-110"
                      }
                    `}
                  >
                    {item.icon}
                  </div>

                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm font-medium leading-6 text-pink-200 sm:text-base">
                    {item.short}
                  </p>
                </div>

                {/* Expanded Description */}
                <div
                  className={`overflow-hidden transition-all duration-700
                    ${
                      isActive
                        ? "mt-7 max-h-[220px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="border-t border-white/10 pt-5">
                    <p className="text-sm leading-7 text-white/75 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {isActive ? "Opened ❤️" : "Hover / Tap"}
                  </span>

                  <span
                    className={`text-xl transition-transform duration-500 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Message */}
      <div className="mx-auto mt-16 max-w-3xl text-center">
        <div className="mb-5 text-3xl">💕 ✨ 🌸 ✨ 💕</div>

        <p className="text-lg italic leading-8 text-white/70 sm:text-xl">
          "Sometimes you don't need something extraordinary.
          <br />
          You just need the little things that make your heart happy."
        </p>
      </div>
    </div>
  );
}

export default Favourit;