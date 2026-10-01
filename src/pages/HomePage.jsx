import Image3 from "../assets/Image3.jpg";

function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-yellow-400/10
            blur-[90px]

            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[110px]

            md:h-[500px]
            md:w-[500px]
            md:blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-20
            -top-20
            h-52
            w-52
            rounded-full
            bg-yellow-500/5
            blur-[80px]

            sm:-left-28
            sm:-top-28
            sm:h-72
            sm:w-72
            sm:blur-[100px]
          "
        />

        <div
          className="
            absolute
            -bottom-20
            -right-20
            h-52
            w-52
            rounded-full
            bg-yellow-500/5
            blur-[80px]

            sm:-bottom-28
            sm:-right-28
            sm:h-72
            sm:w-72
            sm:blur-[100px]
          "
        />

      </div>


      {/* ================= STARS ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <span
          className="
            absolute
            left-[8%]
            top-[12%]
            animate-pulse
            text-lg
            text-yellow-400

            sm:left-[10%]
            sm:top-[15%]
            sm:text-2xl
          "
        >
          ✦
        </span>

        <span
          className="
            absolute
            left-[18%]
            top-[65%]
            animate-pulse
            text-base
            text-yellow-300

            sm:left-[25%]
            sm:top-[70%]
            sm:text-xl
          "
        >
          ✧
        </span>

        <span
          className="
            absolute
            right-[8%]
            top-[15%]
            animate-pulse
            text-2xl
            text-yellow-400

            sm:right-[15%]
            sm:top-[20%]
            sm:text-3xl
          "
        >
          ✦
        </span>

        <span
          className="
            absolute
            right-[15%]
            top-[65%]
            animate-pulse
            text-base
            text-yellow-300

            sm:right-[25%]
            sm:top-[70%]
            sm:text-xl
          "
        >
          ✧
        </span>

        <span
          className="
            absolute
            left-1/2
            top-[8%]
            animate-pulse
            text-base
            text-white

            sm:top-[10%]
            sm:text-lg
          "
        >
          ✦
        </span>

        <span
          className="
            absolute
            bottom-[12%]
            right-[7%]
            animate-pulse
            text-lg
            text-white

            sm:bottom-[15%]
            sm:right-[10%]
            sm:text-2xl
          "
        >
          ✧
        </span>

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <main
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-4
          py-16

          sm:px-6
          sm:py-20

          lg:px-8
          lg:py-24
        "
      >

        {/* ================= BIRTHDAY SECTION ================= */}

        <section
          className="
            grid
            w-full
            max-w-6xl
            items-center
            gap-12

            lg:grid-cols-2
            lg:gap-14

            xl:gap-20
          "
        >

          {/* ================= LEFT CONTENT ================= */}

          <div className="text-center lg:text-left">

            {/* Badge */}

            <div
              className="
                mb-5
                inline-flex
                max-w-full
                items-center
                justify-center
                rounded-full
                border
                border-yellow-400/30
                bg-yellow-400/5
                px-4
                py-2

                sm:px-5
              "
            >
              <span
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.15em]
                  text-yellow-300

                  sm:text-sm
                  sm:tracking-widest
                "
              >
                🎉 TODAY IS YOUR SPECIAL DAY
              </span>
            </div>


            {/* Heading */}

            <h1
              className="
                mx-auto
                max-w-4xl
                text-center
                font-[Playfair_Display]
                text-4xl
                font-black
                leading-[0.98]
                tracking-tight
                text-white
                drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]

                sm:text-5xl
                md:text-6xl
                lg:mx-0
                lg:text-left
                lg:text-7xl
                xl:text-8xl
                2xl:text-9xl
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


            {/* Birthday Message */}

            <p
              className="
                mx-auto
                mt-6
                max-w-lg
                text-sm
                leading-7
                text-gray-400

                sm:text-base
                sm:leading-8

                md:text-lg

                lg:mx-0
                lg:text-left
              "
            >
              • Happy Birthday, Many! Wishing you a phenomenal day packed with
              non-stop laughter, love, and all your absolute favorite things!

              <br />
              <br />

              • Cheers to you on your special day, Many! May this new year of
              life bring you endless happiness, exciting new opportunities, and
              massive success.

              <br />
              <br />

              • Have the happiest of birthdays, Many! You deserve a celebration
              as bright, fun, and wonderful as you are.
            </p>


            {/* Buttons */}

            <div
              className="
                mt-7
                flex
                flex-col
                items-center
                justify-center
                gap-3

                sm:mt-8
                sm:flex-row
                sm:flex-wrap
                sm:gap-4

                lg:justify-start
              "
            >

              <button
                className="
                  w-full
                  max-w-xs
                  rounded-xl
                  bg-yellow-400
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-black
                  shadow-lg
                  shadow-yellow-400/20
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-yellow-300

                  sm:w-auto
                  sm:px-7
                  sm:text-base
                "
              >
                Make a WISH ✨
              </button>


              <button
                className="
                  w-full
                  max-w-xs
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition
                  duration-300
                  hover:border-yellow-400/40
                  hover:bg-white/10

                  sm:w-auto
                  sm:px-7
                  sm:text-base
                "
              >
                CELEBRATE
              </button>

            </div>

          </div>


          {/* ================= RIGHT IMAGE ================= */}

          <div className="flex justify-center">

            <div className="group relative">

              {/* Glow */}

              <div
                className="
                  absolute
                  -inset-3
                  rounded-[1.5rem]
                  bg-yellow-400/20
                  opacity-50
                  blur-2xl
                  transition
                  duration-700
                  group-hover:opacity-80

                  sm:-inset-4
                  sm:rounded-[2rem]
                  sm:blur-3xl
                "
              />


              {/* Image Card */}

              <div
                className="
                  relative
                  h-[380px]
                  w-[270px]
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-white/10
                  bg-white/5
                  shadow-2xl
                  backdrop-blur-md
                  transition
                  duration-700
                  group-hover:-translate-y-2
                  group-hover:rotate-1
                  group-hover:shadow-[0_25px_80px_rgba(250,204,21,0.2)]

                  sm:h-[450px]
                  sm:w-[320px]
                  sm:rounded-[2rem]

                  md:h-[500px]
                  md:w-[370px]
                "
              >

                <img
                  src={Image3}
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

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/20
                    to-transparent
                  "
                />


                {/* Image bottom text */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5

                    sm:p-6
                  "
                >

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-yellow-300

                      sm:text-sm
                      sm:tracking-[0.3em]
                    "
                  >
                    my Attudid
                  </p>

                  <h2
                    className="
                      mt-2
                      text-xl
                      font-bold
                      leading-snug

                      sm:text-2xl
                    "
                  >
                    Today is very Special day for you Enjoy in life ✨
                  </h2>

                </div>


                {/* Heart */}

                <div
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/40
                    text-lg
                    backdrop-blur-md
                    transition
                    duration-300
                    group-hover:scale-110

                    sm:right-5
                    sm:top-5
                    sm:h-12
                    sm:w-12
                    sm:text-xl
                  "
                >
                  ❤️
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <div
        className="
          absolute
          bottom-4
          left-0
          right-0
          z-20
          px-4
          text-center

          sm:bottom-5
        "
      >

        <p
          className="
            text-[9px]
            tracking-[0.15em]
            text-gray-600

            sm:text-xs
            sm:tracking-[0.25em]
          "
        >
          MADE WITH ❤️ FOR A SPECIAL DAY
        </p>

      </div>

    </div>
  );
}

export default HomePage;