import { useEffect, useState } from "react";
import Image5 from "../assets/Image5.jpg";

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
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      {/* =========================================
          BACKGROUND GLOW
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
          bg-pink-500/10
          blur-[100px]

          sm:-left-32
          sm:-top-32
          sm:h-80
          sm:w-80
          sm:blur-[120px]

          md:-left-40
          md:-top-40
          md:h-[450px]
          md:w-[450px]
          md:blur-[140px]
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
          bg-purple-500/10
          blur-[100px]

          sm:-bottom-32
          sm:-right-32
          sm:h-80
          sm:w-80
          sm:blur-[120px]

          md:-bottom-40
          md:-right-40
          md:h-[450px]
          md:w-[450px]
          md:blur-[140px]
        "
      />


      {/* =========================================
          FLOATING HEARTS
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="
              absolute
              select-none
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

          md:px-6
          md:py-12

          lg:px-8
          lg:py-16
        "
      >

        {/* =====================================
            LARGE IMAGE CONTAINER
        ===================================== */}

        <div
          className="
            group
            relative
            h-[78vh]
            min-h-[560px]
            w-full
            max-w-[1500px]
            overflow-hidden
            rounded-[1.5rem]
            border
            border-white/10
            shadow-[0_0_70px_rgba(236,72,153,0.18)]

            sm:h-[82vh]
            sm:min-h-[600px]
            sm:rounded-[2rem]

            md:h-[85vh]
            md:min-h-[650px]

            lg:h-[88vh]
          "
        >

          {/* =====================================
              IMAGE
          ===================================== */}

          <img
            src={Image5}
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
              via-black/30
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
              left-4
              right-4
              top-6
              text-center

              sm:left-8
              sm:right-8
              sm:top-10

              md:left-12
              md:right-12
              md:top-12
            "
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-slate-900

                sm:text-xs
                sm:tracking-[0.4em]

                md:text-sm
                md:tracking-[0.5em]
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
              px-5
              text-center

              sm:px-8

              md:px-12
            "
          >
            <div
              className="
                w-full
                max-w-4xl
                transition-all
                duration-700
                group-hover:-translate-y-2
              "
            >

              {/* Heart */}

              <div
                className="
                  mb-4
                  text-5xl
                  transition
                  duration-700
                  group-hover:scale-125

                  sm:mb-5
                  sm:text-6xl

                  md:mb-6
                  md:text-7xl
                "
              >
                ❤️
              </div>


              {/* Heading */}

              <h1
                className="
                  text-4xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  text-white
                  drop-shadow-2xl

                  sm:text-5xl

                  md:text-6xl

                  lg:text-7xl

                  xl:text-8xl
                "
              >
                Beautiful

                <span className="block text-pink-400">
                  Memories
                </span>
              </h1>


              {/* Description */}

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-white/70

                  sm:mt-5
                  sm:text-base
                  sm:leading-7

                  md:mt-6
                  md:max-w-2xl
                  md:text-lg
                  md:leading-8

                  lg:text-xl
                "
              >
                Every beautiful moment becomes a memory,
                and some memories stay close to our hearts forever. ❤️
              </p>

            </div>
          </div>


          {/* =====================================
              BOTTOM CONTENT
          ===================================== */}

          <div
            className="
              absolute
              bottom-5
              left-4
              right-4
              flex
              items-end
              justify-between
              gap-4

              sm:bottom-8
              sm:left-8
              sm:right-8

              md:bottom-10
              md:left-12
              md:right-12
            "
          >

            {/* Message */}

            <div className="min-w-0 flex-1">

              <p
                className="
                  text-[10px]
                  font-medium
                  leading-5
                  tracking-wide
                  text-yellow-300

                  sm:text-xs
                  sm:leading-6

                  md:text-sm
                  md:leading-7

                  lg:text-base
                "
              >
                Some people come into our lives
                and quietly become a beautiful part
                of our heart. You are one of those
                people for me. ❤️

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
                bring you closer to the happiness you seek.
              </p>

            </div>


            {/* Heart Button */}

            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/40
                text-xl
                text-pink-400
                backdrop-blur-md
                transition-all
                duration-500

                group-hover:scale-110
                group-hover:border-pink-400/50
                group-hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]

                sm:h-12
                sm:w-12
                sm:text-2xl

                md:h-14
                md:w-14
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
          px-4
          pb-8
          text-center

          sm:pb-10
        "
      >
        <p
          className="
            text-xs
            text-white/40

            sm:text-sm
          "
        >
          Keep smiling. Keep shining. ❤️
        </p>
      </div>

    </div>
  );
}

export default SecondPage;