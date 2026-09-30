import { useEffect, useState } from "react";

function HeartPage() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHearts = [];

    for (let i = 0; i < 80; i++) {
      createHearts.push({
        id: i,

        left: Math.random() * 100,
        top: Math.random() * 100,

        size: 15 + Math.random() * 45,

        duration: 3 + Math.random() * 5,

        delay: Math.random() * 5,

        opacity: 0.2 + Math.random() * 0.7,
      });
    }

    setHearts(createHearts);
  }, []);

  return (
    <>
      {/* =========================================
          CUSTOM ANIMATION
      ========================================= */}

      <style>{`
        @keyframes heartFloat {
          0% {
            transform: rotate(-45deg) translateY(0) scale(0.8);
          }

          50% {
            transform: rotate(-45deg) translateY(-30px) scale(1.1);
          }

          100% {
            transform: rotate(-45deg) translateY(0) scale(0.8);
          }
        }

        .heart-animation {
          animation-name: heartFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
      `}</style>


      {/* =========================================
          FULL PAGE
      ========================================= */}

      <main
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
          bg-black
          text-white
        "
      >


        {/* =========================================
            BACKGROUND GLOW
        ========================================= */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-red-600/20
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-pink-600/20
            blur-[150px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            left-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-600/20
            blur-[150px]
          "
        />


        {/* =========================================
            HEARTS
        ========================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >

          {hearts.map((heart) => (
            <span
              key={heart.id}
              className="
                heart-animation
                absolute
                block
                rounded-[4px]
                bg-red-500
                shadow-[0_0_10px_#ef4444]
              "
              style={{
                left: `${heart.left}%`,
                top: `${heart.top}%`,
                width: `${heart.size}px`,
                height: `${heart.size}px`,
                opacity: heart.opacity,
                animationDuration: `${heart.duration}s`,
                animationDelay: `${heart.delay}s`,
              }}
            >

              {/* Heart top-left circle */}

              <span
                className="
                  absolute
                  left-0
                  top-[-50%]
                  h-full
                  w-full
                  rounded-full
                  bg-red-500
                "
              />


              {/* Heart top-right circle */}

              <span
                className="
                  absolute
                  left-[50%]
                  top-0
                  h-full
                  w-full
                  rounded-full
                  bg-red-500
                "
              />

            </span>
          ))}

        </div>


        {/* =========================================
            CENTER CONTENT
        ========================================= */}

        <section
          className="
            relative
            z-10
            flex
            min-h-screen
            items-center
            justify-center
            px-5
            py-10
          "
        >

          <div
            className="
              w-full
              max-w-3xl
              rounded-[32px]
              border
              border-white/10
              bg-black/50
              p-8
              text-center
              shadow-2xl
              backdrop-blur-xl

              sm:p-12
              md:p-16
            "
          >

            {/* Small heading */}

            <p
              className="
                mb-5
                text-xs
                font-bold
                uppercase
                tracking-[0.4em]
                text-red-400

                sm:text-sm
              "
            >
              ✦ A SPECIAL MOMENT FOR YOU AND YOUR FAMILY  ✦
            </p>


            {/* Main heading */}

            <h1
              className="
                text-6xl
                font-black
                leading-none
                tracking-tight

                sm:text-7xl
                md:text-8xl
              "
            >

              With

              <span
                className="
                  mt-3
                  block
                  bg-gradient-to-r
                  from-red-400
                  via-pink-500
                  to-red-600
                  bg-clip-text
                  text-transparent
                  drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]
                "
              >
                Love
              </span>

            </h1>


            {/* Description */}

            <p
              className="
                mx-auto
                mt-8
                max-w-xl
                text-base
                leading-7
                text-gray-300

                sm:text-lg
              "
            >
              Every heartbeat carries a beautiful memory.
              Every moment becomes a story worth remembering.
<br/>
              Today is  2.Oct.2026
A day worth remembering.

Inside:

Today, the calendar has one ordinary date.

But for someone,
it's the beginning of a beautiful story.

Yours.

Don't count this year by age.
Count it by smiles, lessons, people, places,
late-night conversations, unexpected moments
and dreams that came true.

Here's to another chapter. 🥂

May it be your most beautiful one yet.

Happy Birthday. 🤍
            </p>


            {/* Button */}

            <button
              className="
                mt-8
                rounded-full
                bg-red-500
                px-8
                py-4
                text-base
                font-bold
                text-white

                shadow-[0_0_25px_rgba(239,68,68,0.4)]

                transition-all
                duration-300

                hover:scale-105
                hover:bg-red-600
                hover:shadow-[0_0_45px_rgba(239,68,68,0.7)]

                active:scale-95
              "
            >
              ♥ Celebrate Love
            </button>

          </div>

        </section>

      </main>
    </>
  );
}

export default HeartPage;