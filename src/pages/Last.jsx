import React from "react";
import Bubble from "../assets/Bubble.jpg";

function Last() {
  return (
    <div
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#05020d]
        px-3
        py-8
        text-white

        sm:px-5
        sm:py-10

        md:px-8
        md:py-12

        lg:px-10
        lg:py-16
      "
    >

      {/* =========================================
          BACKGROUND PINK GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-pink-600/20
          blur-[100px]

          sm:-left-32
          sm:-top-32
          sm:h-80
          sm:w-80
          sm:blur-[120px]

          lg:-left-40
          lg:-top-40
          lg:h-[450px]
          lg:w-[450px]
          lg:blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-24
          h-64
          w-64
          rounded-full
          bg-fuchsia-600/20
          blur-[100px]

          sm:-bottom-32
          sm:-right-32
          sm:h-80
          sm:w-80
          sm:blur-[120px]

          lg:-bottom-40
          lg:-right-40
          lg:h-[450px]
          lg:w-[450px]
          lg:blur-[140px]
        "
      />

      {/* =========================================
          EXTRA CENTER GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-pink-500/5
          blur-[100px]

          sm:h-96
          sm:w-96
          sm:blur-[130px]
        "
      />

      {/* =========================================
          DECORATIVE FLOATING HEARTS
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <span
          className="
            absolute
            left-[8%]
            top-[18%]
            animate-pulse
            text-lg
            text-pink-400/30

            sm:text-2xl
          "
        >
          ❤️
        </span>

        <span
          className="
            absolute
            left-[15%]
            bottom-[20%]
            animate-bounce
            text-base
            text-fuchsia-400/20

            sm:text-xl
          "
        >
          💕
        </span>

        <span
          className="
            absolute
            right-[8%]
            top-[22%]
            animate-pulse
            text-xl
            text-pink-400/30

            sm:text-2xl
          "
        >
          💗
        </span>

        <span
          className="
            absolute
            right-[15%]
            bottom-[18%]
            animate-bounce
            text-lg
            text-fuchsia-400/20

            sm:text-xl
          "
        >
          ❤️
        </span>

        <span
          className="
            absolute
            left-[50%]
            top-[8%]
            animate-pulse
            text-sm
            text-pink-300/20

            sm:text-lg
          "
        >
          ✦
        </span>

        <span
          className="
            absolute
            bottom-[10%]
            left-[45%]
            animate-pulse
            text-sm
            text-pink-300/20

            sm:text-lg
          "
        >
          ✦
        </span>

      </div>


      {/* =========================================
          MAIN IMAGE CARD
      ========================================= */}

      <div
        className="
          group
          relative
          z-10
          w-full
          max-w-6xl
          overflow-hidden
          rounded-[1.5rem]
          border
          border-pink-400/20
          bg-black
          shadow-[0_0_60px_rgba(236,72,153,0.22)]
          transition-all
          duration-700
          ease-out

          hover:-translate-y-2
          hover:border-pink-400/60
          hover:shadow-[0_0_100px_rgba(236,72,153,0.50)]

          sm:rounded-[2rem]

          lg:hover:-translate-y-3
          lg:hover:shadow-[0_0_120px_rgba(236,72,153,0.60)]
        "
      >

        {/* =====================================
            IMAGE WRAPPER
        ===================================== */}

        <div
          className="
            relative
            h-[72vh]
            min-h-[500px]
            w-full
            overflow-hidden

            sm:h-[76vh]
            sm:min-h-[560px]

            md:h-[80vh]
            md:min-h-[600px]

            lg:h-[82vh]
            lg:min-h-[650px]
          "
        >

          {/* =====================================
              IMAGE
          ===================================== */}

          <img
            src={Bubble}
            alt="Romantic Birthday"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-[1800ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-105

              sm:group-hover:scale-110
            "
          />


          {/* =====================================
              DARK + PINK OVERLAY
          ===================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/85
              via-black/30
              to-pink-950/10
              opacity-80
              transition-all
              duration-1000
              ease-out
              group-hover:opacity-50
            "
          />


          {/* =====================================
              PINK GLOW OVER IMAGE
          ===================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-pink-500/0
              transition-all
              duration-1000
              ease-out
              group-hover:bg-pink-500/10
            "
          />


          {/* =====================================
              MOVING SHINE
          ===================================== */}

          <div
            className="
              pointer-events-none
              absolute
              -left-[100%]
              top-0
              h-full
              w-[60%]
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent
              transition-transform
              duration-[1600ms]
              ease-in-out
              group-hover:translate-x-[280%]
            "
          />


          {/* =====================================
              TOP BADGE
          ===================================== */}

          <div
            className="
              absolute
              left-1/2
              top-5
              z-20
              -translate-x-1/2

              sm:top-7

              md:top-8
            "
          >
            <div
              className="
                whitespace-nowrap
                rounded-full
                border
                border-pink-300/20
                bg-black/30
                px-4
                py-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-pink-200
                shadow-lg
                backdrop-blur-xl

                sm:px-5
                sm:text-[10px]
                sm:tracking-[0.3em]

                md:text-xs
              "
            >
              ✦ A Special Memory ✦
            </div>
          </div>


          {/* =====================================
              CENTER HEART
          ===================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              flex
              items-center
              justify-center
              opacity-0
              transition-all
              duration-700
              ease-out
              group-hover:opacity-100
            "
          >

            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-pink-300/20
                bg-black/20
                shadow-[0_0_60px_rgba(236,72,153,0.40)]
                backdrop-blur-sm
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110

                sm:h-24
                sm:w-24
              "
            >
              <span
                className="
                  text-5xl
                  drop-shadow-[0_0_25px_rgba(236,72,153,0.9)]

                  sm:text-6xl

                  md:text-7xl
                "
              >
                ❤️
              </span>
            </div>

          </div>


          {/* =====================================
              CENTER SMALL TEXT
          ===================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-1/2
              mt-16
              text-center
              opacity-0
              transition-all
              duration-700
              group-hover:opacity-100

              sm:mt-20
            "
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/60

                sm:text-xs
              "
            >
              A memory worth keeping forever
            </p>
          </div>


          {/* =====================================
              BOTTOM TEXT
          ===================================== */}

          <div
            className="
              absolute
              bottom-6
              left-5
              right-5
              transition-all
              duration-700
              ease-out
              group-hover:-translate-y-2

              sm:bottom-8
              sm:left-8
              sm:right-8

              md:bottom-10
              md:left-12
              md:right-12
            "
          >

            {/* Small heading */}

            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-pink-300

                sm:text-xs
                sm:tracking-[0.4em]
              "
            >
              ✦ A Beautiful Moment ✦
            </p>


            {/* Main heading */}

            <h1
              className="
                mt-2
                text-3xl
                font-black
                leading-tight
                text-white
                drop-shadow-2xl

                sm:mt-3
                sm:text-4xl

                md:text-5xl

                lg:text-6xl
              "
            >
              Beautiful

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-pink-300
                  via-pink-500
                  to-fuchsia-500
                  bg-clip-text
                  text-transparent

                  sm:inline
                  sm:ml-2
                "
              >
                Memories
              </span>
            </h1>


            {/* Decorative line */}

            <div
              className="
                mt-4
                h-px
                w-24
                bg-gradient-to-r
                from-pink-400
                to-transparent

                sm:mt-5
                sm:w-32
              "
            />

          </div>


          {/* =====================================
              BOTTOM RIGHT HEART
          ===================================== */}

          <div
            className="
              absolute
              bottom-6
              right-5
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/40
              text-lg
              backdrop-blur-md
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:border-pink-400/50
              group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]

              sm:bottom-8
              sm:right-8
              sm:h-12
              sm:w-12
              sm:text-xl

              md:bottom-10
              md:right-12
              md:h-14
              md:w-14
              md:text-2xl
            "
          >
            ❤️
          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM PAGE MESSAGE
      ========================================= */}

      <div
        className="
          absolute
          bottom-2
          left-0
          right-0
          z-20
          px-4
          text-center

          sm:bottom-3
        "
      >
        <p
          className="
            text-[9px]
            tracking-[0.15em]
            text-white/30

            sm:text-xs
            sm:tracking-[0.25em]
          "
        >
          MADE WITH ❤️ FOR A SPECIAL MEMORY
        </p>
      </div>

    </div>
  );
}

export default Last;