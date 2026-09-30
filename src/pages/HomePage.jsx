import { useEffect, useState } from "react";
import Birthday from "../assets/birthday.jpg";

function HomePage() {

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[120px]" />

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-[100px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/5 blur-[100px]" />

      </div>


      {/* ================= STARS ================= */}

      <div className="pointer-events-none absolute inset-0">

        <span className="absolute left-[10%] top-[15%] animate-pulse text-2xl text-yellow-400">
          ✦
        </span>

        <span className="absolute left-[25%] top-[70%] animate-pulse text-xl text-yellow-300">
          ✧
        </span>

        <span className="absolute right-[15%] top-[20%] animate-pulse text-3xl text-yellow-400">
          ✦
        </span>

        <span className="absolute right-[25%] top-[70%] animate-pulse text-xl text-yellow-300">
          ✧
        </span>

        <span className="absolute left-[50%] top-[10%] animate-pulse text-lg text-white">
          ✦
        </span>

        <span className="absolute bottom-[15%] right-[10%] animate-pulse text-2xl text-white">
          ✧
        </span>

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">

        {/* ================= BIRTHDAY SECTION ================= */}

        <section className="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">


          {/* ================= LEFT CONTENT ================= */}

          <div className="text-center lg:text-left">

            <div className="mb-5 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/5 px-5 py-2">

              <span className="text-sm font-medium tracking-widest text-yellow-300">
                🎉 TODAY IS YOUR SPECIAL DAY
              </span>

            </div>


            <h1
              className="
                text-center
                font-[Playfair_Display]
                text-5xl
                font-black
                leading-[0.95]
                tracking-tight
                text-white
                drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-9xl
              "
            >
              HAPPY

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-yellow-200
                  via-yellow-400
                  to-pink-400
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_30px_rgba(250,204,21,0.35)]
                  tracking-wide
                "
              >
                BIRTHDAY JAADU
              </span>

            </h1>


            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">

              • Happy Birthday, Many! Wishing you a phenomenal day packed with non-stop laughter, love, and all your absolute favorite things!

              • Cheers to you on your special day, Many! May this new year of life bring you endless happiness, exciting new opportunities, and massive success.

              • Have the happiest of birthdays, Many! You deserve a celebration as bright, fun, and wonderful as you are.

            </p>


            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">

              <button className="rounded-xl bg-yellow-400 px-7 py-3 font-bold text-black shadow-lg shadow-yellow-400/20 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300">

                Make a WISH ✨

              </button>


              <button className="rounded-xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-yellow-400/40 hover:bg-white/10">

                CELEBRATE

              </button>

            </div>

          </div>


          {/* ================= RIGHT IMAGE ================= */}

          <div className="flex justify-center">

            <div className="group relative">

              {/* Glow */}

              <div className="absolute -inset-4 rounded-[2rem] bg-yellow-400/20 opacity-50 blur-3xl transition duration-700 group-hover:opacity-80" />


              {/* Image Card */}

              <div className="relative h-[430px] w-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md transition duration-700 group-hover:-translate-y-3 group-hover:rotate-1 group-hover:shadow-[0_25px_80px_rgba(250,204,21,0.2)] sm:h-[500px] sm:w-[370px]">

                <img
                  src={Birthday}
                  alt="Birthday Cake"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                    group-hover:brightness-110
                  "
                />


                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />


                {/* Image bottom text */}

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
                    my Attudid
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Today is very Special day for you Enjoy in life ✨
                  </h2>

                </div>


                {/* Heart */}

                <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl backdrop-blur-md transition duration-300 group-hover:scale-110">
                  ❤️
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <div className="absolute bottom-5 left-0 right-0 z-20 text-center">

        <p className="text-xs tracking-[0.25em] text-gray-600">
          MADE WITH ❤️ FOR A SPECIAL DAY
        </p>

      </div>

    </div>
  );
}

export default HomePage;