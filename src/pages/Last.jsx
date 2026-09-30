import React from "react";
import Bubble from "../assets/bubble.jpg";

function Last() {
  return (
    <div
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#05020d]
        p-6
      "
    >

      {/* =========================================
          BACKGROUND PINK GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-[-150px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-pink-600/20
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          right-[-150px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-fuchsia-600/20
          blur-[140px]
        "
      />


      {/* =========================================
          IMAGE CARD
      ========================================= */}

      <div
        className="
          group
          relative
          z-10

          w-full
          max-w-6xl

          overflow-hidden
          rounded-3xl

          border
          border-pink-400/20

          bg-black

          shadow-[0_0_80px_rgba(236,72,153,0.25)]

          transition-all
          duration-700
          ease-out

          hover:-translate-y-3

          hover:border-pink-400/60

          hover:shadow-[0_0_120px_rgba(236,72,153,0.60)]
        "
      >

        {/* =====================================
            IMAGE WRAPPER
        ===================================== */}

        <div
          className="
            relative
            h-[70vh]
            min-h-[500px]
            w-full
            overflow-hidden
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

              transition-transform
              duration-[1800ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-hover:scale-110
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
              from-black/70
              via-black/20
              to-pink-950/10

              opacity-70

              transition-all
              duration-1000
              ease-out

              group-hover:opacity-40
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

            <span
              className="
                text-6xl

                drop-shadow-[0_0_25px_rgba(236,72,153,0.9)]

                transition-transform
                duration-700
                ease-out

                group-hover:scale-125

                sm:text-7xl
              "
            >
              ❤️
            </span>

          </div>


          {/* =====================================
              BOTTOM TEXT
          ===================================== */}

          <div
            className="
              absolute
              bottom-8
              left-8
              right-8

              transition-all
              duration-700
              ease-out

              group-hover:-translate-y-2
            "
          >

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.4em]

                text-pink-300
              "
            >
              ✦ A Beautiful Moment ✦
            </p>

            <h1
              className="
                mt-3

                text-4xl
                font-black
                text-white

                drop-shadow-2xl

                sm:text-5xl
              "
            >
              Beautiful
              <span
                className="
                  ml-2
                  bg-gradient-to-r
                  from-pink-300
                  via-pink-500
                  to-fuchsia-500
                  bg-clip-text
                  text-transparent
                "
              >
                Memories
              </span>
            </h1>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Last;