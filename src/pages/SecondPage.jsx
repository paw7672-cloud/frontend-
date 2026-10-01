import { useEffect, useState } from "react";
import Birthday from "../assets/Birthday.jpg";

function SecondPage() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generatedHearts = [];

    for (let i = 0; i < 25; i++) {
      generatedHearts.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 15 + Math.random() * 25,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 4,
      });
    }

    setHearts(generatedHearts);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-[-150px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-pink-500/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          right-[-150px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500/10
          blur-[140px]
        "
      />

      {/* =========================================
          FLOATING HEARTS
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 z-20">

        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="
              absolute
              text-pink-400/40
              animate-bounce
            "
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            ♥
          </span>
        ))}

      </div>

      {/* =========================================
          MAIN IMAGE SECTION
      ========================================= */}

      <section
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          px-3
          py-6
          sm:px-5
          sm:py-10
        "
      >

        {/* =====================================
            LARGE IMAGE CONTAINER
        ===================================== */}

        <div
          className="
            group
            relative
            h-[88vh]
            min-h-[650px]
            w-full
            max-w-[1500px]
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            shadow-[0_0_100px_rgba(236,72,153,0.20)]
          "
        >

          {/* =====================================
              IMAGE
          ===================================== */}

          <img
            src={Birthday}
            alt="Beautiful Memory"
            className="
              h-full
              w-full
              object-cover
              object-center

              transition-all
              duration-[1500ms]
              ease-out

              group-hover:scale-110
            "
          />

          {/* =====================================
              DARK OVERLAY
          ===================================== */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/25
              to-black/5

              transition
              duration-700

              group-hover:via-black/15
            "
          />

          {/* =====================================
              TOP TEXT
          ===================================== */}

          <div
            className="
              absolute
              left-6
              right-6
              top-8
              text-center

              sm:left-12
              sm:right-12
              sm:top-12
            "
          >

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.5em]
                text-slate-900

                sm:text-sm
              "
            >
              ✦ A Beautiful Moment ✦
            </p>

          </div>

          {/* =====================================
              CENTER CONTENT
          ===================================== */}

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              px-6
              text-center
            "
          >

            <div
              className="
                max-w-4xl
                transition-all
                duration-700
                group-hover:-translate-y-2
              "
            >

              {/* Heart */}

              <div
                className="
                  mb-6
                  text-6xl
                  transition
                  duration-700
                  group-hover:scale-125

                  sm:text-7xl
                "
              >
                ❤️
              </div>

              {/* Heading */}

              <h1
                className="
                  text-5xl
                  font-black
                  tracking-tight
                  text-white
                  drop-shadow-2xl

                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                "
              >
                Beautiful

                <span
                  className="
                    block
                    text-pink-400
                  "
                >
                  Memories
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-base
                  leading-7
                  text-white/70

                  sm:text-lg
                  md:text-xl
                "
              >
               
              </p>

            </div>

          </div>

          {/* =====================================
              BOTTOM CONTENT
          ===================================== */}

          <div
            className="
              absolute
              bottom-7
              left-6
              right-6
              flex
              items-end
              justify-between

              sm:bottom-10
              sm:left-12
              sm:right-12
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-medium
                  leading-7
                  tracking-wide
                  text-yellow-300
                  text-justify

                  sm:text-sm
                  md:text-base
                "
              >
                Some people come into our lives
                and quietly become a beautiful part of our heart.
                You are one of those people for me. ❤️

                <br />
                <br />

                On your special day, I just want to say
                that I hope life gives you every happiness
                you truly deserve.

                <br />
                <br />

                May your smile always stay the same,
                may your dreams become reality,
                and may every new chapter of your life
                bring you closer to the happiness you seek
              </p>

            </div>

            {/* Heart Button */}

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/40
                text-2xl
                text-pink-400
                backdrop-blur-md
                transition-all
                duration-500

                group-hover:scale-110
                group-hover:border-pink-400/50
                group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]
              "
            >
              ♥
            </div>

          </div>

          {/* =====================================
              IMAGE SHINE
          ===================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent

              transition-transform
              duration-[1500ms]

              group-hover:translate-x-full
            "
          />

        </div>

      </section>

      {/* =========================================
          BOTTOM MESSAGE
      ========================================= */}

      <div
        className="
          relative
          z-30
          pb-10
          text-center
        "
      >

        <p className="text-sm text-white/40">
          Keep smiling. Keep shining. ❤️
        </p>

      </div>

    </div>
  );
}

export default SecondPage;