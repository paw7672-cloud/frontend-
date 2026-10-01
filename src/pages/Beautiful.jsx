import { useState } from "react";
import Image1 from "../assets/Image1.jpg";

function Beautiful() {
  const [selected, setSelected] = useState(null);

  const comparisons = [
    {
      emoji: "🌸",
      title: "More Beautiful Than Flowers",
      text: "Flowers bloom for a while, but your smile makes every moment feel beautiful.",
    },
    {
      emoji: "🌙",
      title: "More Beautiful Than The Moon",
      text: "The moon lights up the night, but your presence can brighten even the darkest moment.",
    },
    {
      emoji: "⭐",
      title: "More Precious Than The Stars",
      text: "Stars shine from far away, but you are a beautiful memory that stays close to the heart.",
    },
    {
      emoji: "🌅",
      title: "More Beautiful Than A Sunset",
      text: "A sunset lasts only a few minutes, but some moments with you are worth remembering forever.",
    },
    {
      emoji: "🦋",
      title: "More Beautiful Than A Butterfly",
      text: "A butterfly is beautiful because of its colors, but your beauty comes from the happiness you bring.",
    },
    {
      emoji: "💎",
      title: "More Precious Than A Diamond",
      text: "A diamond may be rare, but a truly special person is priceless.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020106] text-white">

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="fixed inset-0 z-0">
        <img
          src={Image1}
          alt="Beautiful background"
          className="
            h-full
            w-full
            object-cover
            object-center
            opacity-20
          "
        />

        <div className="absolute inset-0 bg-[#030106]/80" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-pink-950/40
            via-transparent
            to-purple-950/50
          "
        />
      </div>


      {/* =====================================================
          GLOW BACKGROUNDS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          left-[-120px]
          top-20
          z-0
          h-64
          w-64
          rounded-full
          bg-pink-500/20
          blur-[100px]
          sm:left-[-150px]
          sm:h-80
          sm:w-80
          sm:blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          fixed
          right-[-120px]
          top-[40%]
          z-0
          h-72
          w-72
          rounded-full
          bg-purple-500/20
          blur-[100px]
          sm:right-[-150px]
          sm:h-96
          sm:w-96
          sm:blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          fixed
          bottom-[-120px]
          left-[25%]
          z-0
          h-72
          w-72
          rounded-full
          bg-fuchsia-500/15
          blur-[100px]
          sm:bottom-[-150px]
          sm:left-[35%]
          sm:h-96
          sm:w-96
          sm:blur-[130px]
        "
      />


      {/* =====================================================
          FLOATING HEARTS
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">

        <span
          className="
            absolute
            left-[5%]
            top-[20%]
            animate-bounce
            text-base
            text-pink-400/40
            sm:left-[8%]
            sm:text-xl
          "
        >
          ❤️
        </span>

        <span
          className="
            absolute
            left-[10%]
            top-[65%]
            animate-pulse
            text-xl
            text-pink-400/30
            sm:left-[18%]
            sm:text-2xl
          "
        >
          💕
        </span>

        <span
          className="
            absolute
            right-[7%]
            top-[18%]
            animate-pulse
            text-base
            text-pink-400/40
            sm:right-[12%]
            sm:text-xl
          "
        >
          ❤️
        </span>

        <span
          className="
            absolute
            right-[8%]
            top-[70%]
            animate-bounce
            text-xl
            text-fuchsia-400/30
            sm:right-[20%]
            sm:text-2xl
          "
        >
          💗
        </span>

        <span
          className="
            absolute
            left-[42%]
            top-[12%]
            animate-pulse
            text-base
            text-pink-300/30
            sm:left-[45%]
            sm:text-lg
          "
        >
          💖
        </span>

        <span
          className="
            absolute
            bottom-[12%]
            right-[40%]
            animate-bounce
            text-base
            text-pink-400/30
            sm:right-[45%]
            sm:text-xl
          "
        >
          ❤️
        </span>

      </div>


      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className="
          relative
          z-20
          flex
          min-h-screen
          items-center
          justify-center
          px-4
          py-24
          sm:px-5
          sm:py-28
        "
      >

        <div className="mx-auto max-w-5xl text-center">

          {/* Small heading */}

          <div className="flex items-center justify-center gap-2 sm:gap-3">

            <span className="text-sm text-pink-400 sm:text-base">
              ❤️
            </span>

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-pink-400
                sm:text-xs
                sm:tracking-[0.4em]
                md:text-sm
              "
            >
              A Little Comparison
            </p>

            <span className="text-sm text-pink-400 sm:text-base">
              ❤️
            </span>

          </div>


          {/* Main heading */}

          <h1
            className="
              mt-6
              text-4xl
              font-black
              leading-[1.05]
              sm:mt-7
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            More Beautiful

            <span
              className="
                block
                bg-gradient-to-r
                from-pink-400
                via-fuchsia-300
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              Than Everything ❤️
            </span>
          </h1>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              px-2
              text-xs
              leading-7
              text-white/55
              sm:mt-8
              sm:px-0
              sm:text-base
              sm:leading-8
              md:text-lg
            "
          >
            Flowers are beautiful.

            The moon is beautiful.

            The stars are beautiful.

            But sometimes, one special person makes
            all these beautiful things feel ordinary.
          </p>


          {/* Hearts */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              justify-center
              gap-2
              text-xl
              sm:mt-10
              sm:gap-3
              sm:text-3xl
            "
          >
            🌸 ❤️ 🌙 💕 ⭐ 💗 🌸
          </div>


          {/* Button */}

          <div className="mt-8 sm:mt-10">

            <a
              href="#comparisons"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-pink-400/30
                bg-pink-500/10
                px-5
                py-3
                text-xs
                font-semibold
                text-pink-300
                backdrop-blur-md
                transition
                duration-300
                hover:scale-105
                hover:bg-pink-500/20
                hover:text-white
                hover:shadow-[0_0_35px_rgba(236,72,153,0.3)]
                sm:px-7
                sm:text-sm
              "
            >
              Discover The Beauty ❤️
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE + MESSAGE SECTION
      ====================================================== */}

      <section
        className="
          relative
          z-20
          px-4
          py-16
          sm:px-5
          sm:py-24
        "
      >

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            items-center
            gap-10
            md:grid-cols-2
            md:gap-12
          "
        >

          {/* IMAGE */}

          <div className="group relative">

            <div
              className="
                absolute
                -inset-3
                rounded-[30px]
                bg-pink-500/20
                blur-2xl
                transition
                duration-700
                group-hover:bg-pink-500/30
                sm:-inset-4
                sm:rounded-[40px]
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[25px]
                border
                border-pink-400/20
                bg-black/40
                shadow-[0_0_50px_rgba(236,72,153,0.15)]
                backdrop-blur-xl
                sm:rounded-[35px]
                sm:shadow-[0_0_70px_rgba(236,72,153,0.15)]
              "
            >

              <img
                src={Image1}
                alt="Beautiful memory"
                className="
                  h-[300px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                  sm:h-[430px]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  sm:bottom-7
                  sm:left-7
                  sm:right-7
                "
              >

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-pink-400
                    sm:text-xs
                    sm:tracking-[0.3em]
                  "
                >
                  One Beautiful Memory
                </p>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-black
                    leading-tight
                    sm:text-4xl
                  "
                >
                  A Moment Worth Remembering ❤️
                </h2>

              </div>

            </div>

          </div>


          {/* MESSAGE */}

          <div>

            <div className="flex items-center gap-2 sm:gap-3">

              <span className="text-xl sm:text-2xl">
                💕
              </span>

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-pink-400
                  sm:text-xs
                  sm:tracking-[0.35em]
                "
              >
                Something Special
              </p>

            </div>


            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                sm:mt-5
                sm:text-5xl
              "
            >
              Beauty Is Not

              <span className="block text-pink-400">
                Always What We See ❤️
              </span>
            </h2>


            <p
              className="
                mt-5
                text-xs
                leading-7
                text-white/55
                sm:mt-7
                sm:text-base
                sm:leading-8
              "
            >
              Sometimes beauty is not about flowers,
              sunsets, stars or diamonds.

              Sometimes beauty is simply the feeling
              someone leaves in your heart.
            </p>


            <p
              className="
                mt-4
                text-xs
                leading-7
                text-white/55
                sm:mt-5
                sm:text-base
                sm:leading-8
              "
            >
              And there are some people whose presence
              makes an ordinary day feel like something
              worth remembering forever.
            </p>


            {/* Small hearts */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2
                sm:mt-8
                sm:gap-3
              "
            >

              <span
                className="
                  rounded-full
                  border
                  border-pink-400/20
                  bg-pink-500/10
                  px-3
                  py-2
                  text-[10px]
                  text-pink-300
                  sm:px-5
                  sm:text-xs
                "
              >
                ❤️ Beautiful Heart
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-purple-400/20
                  bg-purple-500/10
                  px-3
                  py-2
                  text-[10px]
                  text-purple-300
                  sm:px-5
                  sm:text-xs
                "
              >
                ✨ Beautiful Soul
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-2
                  text-[10px]
                  text-white/60
                  sm:px-5
                  sm:text-xs
                "
              >
                🌸 Beautiful Smile
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMPARISON SECTION
      ====================================================== */}

      <section
        id="comparisons"
        className="
          relative
          z-20
          px-4
          py-16
          sm:px-5
          sm:py-24
        "
      >

        <div className="mx-auto max-w-6xl">

          {/* Heading */}

          <div className="mb-10 text-center sm:mb-14">

            <div className="flex items-center justify-center gap-2 sm:gap-3">

              <span className="text-sm sm:text-base">
                💗
              </span>

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-pink-400
                  sm:text-xs
                  sm:tracking-[0.35em]
                "
              >
                Beautiful Comparisons
              </p>

              <span className="text-sm sm:text-base">
                💗
              </span>

            </div>


            <h2
              className="
                mt-4
                text-3xl
                font-black
                sm:mt-5
                sm:text-5xl
                md:text-6xl
              "
            >
              Nothing Compares To You
            </h2>


            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                px-2
                text-xs
                leading-7
                text-white/40
                sm:mt-5
                sm:px-0
                sm:text-sm
              "
            >
              Some things are beautiful in their own way,
              but there is something special about you
              that makes everything else look different.
            </p>

          </div>


          {/* Cards */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              sm:gap-6
              lg:grid-cols-3
            "
          >

            {comparisons.map((item, index) => (

              <div
                key={index}
                onClick={() => setSelected(item)}
                className="
                  group
                  relative
                  cursor-pointer
                  overflow-hidden
                  rounded-[25px]
                  border
                  border-white/10
                  bg-black/30
                  p-6
                  text-center
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-pink-400/30
                  hover:bg-pink-500/[0.06]
                  hover:shadow-[0_25px_70px_rgba(236,72,153,0.18)]
                  sm:rounded-[32px]
                  sm:p-8
                "
              >

                {/* Glow */}

                <div
                  className="
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-pink-500/10
                    blur-3xl
                    transition
                    duration-500
                    group-hover:bg-pink-500/25
                    sm:-right-12
                    sm:-top-12
                    sm:h-36
                    sm:w-36
                  "
                />


                {/* Number */}

                <span
                  className="
                    absolute
                    left-5
                    top-4
                    text-[10px]
                    font-bold
                    text-white/20
                    sm:left-6
                    sm:top-5
                    sm:text-xs
                  "
                >
                  0{index + 1}
                </span>


                <div className="relative z-10">

                  {/* Emoji */}

                  <div
                    className="
                      mx-auto
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      text-4xl
                      shadow-[0_0_40px_rgba(236,72,153,0.08)]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                      sm:h-24
                      sm:w-24
                      sm:text-5xl
                    "
                  >
                    {item.emoji}
                  </div>


                  {/* Title */}

                  <h3
                    className="
                      mt-5
                      text-lg
                      font-bold
                      leading-snug
                      transition
                      duration-300
                      group-hover:text-pink-300
                      sm:mt-7
                      sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>


                  {/* Description */}

                  <p
                    className="
                      mt-3
                      text-xs
                      leading-7
                      text-white/45
                      sm:mt-4
                      sm:text-sm
                    "
                  >
                    {item.text}
                  </p>


                  {/* Heart */}

                  <div
                    className="
                      mt-5
                      text-lg
                      opacity-50
                      transition
                      duration-300
                      group-hover:scale-125
                      group-hover:opacity-100
                      sm:mt-7
                      sm:text-xl
                    "
                  >
                    ❤️
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MOST BEAUTIFUL SECTION
      ====================================================== */}

      <section
        className="
          relative
          z-20
          px-4
          py-20
          sm:px-5
          sm:py-28
        "
      >

        <div
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[30px]
            border
            border-pink-400/20
            bg-black/30
            px-5
            py-12
            text-center
            shadow-[0_0_70px_rgba(236,72,153,0.15)]
            backdrop-blur-xl
            sm:rounded-[40px]
            sm:px-12
            sm:py-16
            md:px-20
            md:py-20
          "
        >

          {/* Glow */}

          <div
            className="
              absolute
              left-1/2
              top-[-100px]
              h-56
              w-56
              -translate-x-1/2
              rounded-full
              bg-pink-500/20
              blur-[90px]
              sm:top-[-120px]
              sm:h-72
              sm:w-72
              sm:blur-[110px]
            "
          />


          <div className="relative z-10">

            {/* Heart */}

            <div
              className="
                animate-pulse
                text-5xl
                sm:text-6xl
              "
            >
              ❤️
            </div>


            <p
              className="
                mt-6
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-pink-400
                sm:mt-7
                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              The Most Beautiful Thing
            </p>


            <h2
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                sm:mt-5
                sm:text-5xl
                md:text-6xl
              "
            >
              If I Had To Choose

              <span className="block text-pink-400">
                One Beautiful Thing...
              </span>
            </h2>


            <div
              className="
                mx-auto
                mt-6
                h-px
                max-w-xs
                bg-gradient-to-r
                from-transparent
                via-pink-400/40
                to-transparent
                sm:mt-8
              "
            />


            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-xs
                leading-7
                text-white/55
                sm:mt-8
                sm:text-base
                sm:leading-8
              "
            >
              I wouldn't choose a flower.

              I wouldn't choose the moon.

              I wouldn't choose the stars.

              And I wouldn't choose the most beautiful sunset.
            </p>


            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-base
                font-semibold
                leading-8
                text-white
                sm:mt-7
                sm:text-xl
                sm:leading-9
              "
            >
              I would choose the beautiful person
              who makes ordinary moments feel
              extraordinary. ✨
            </p>


            {/* Heart decoration */}

            <div
              className="
                mt-7
                text-xl
                tracking-[0.2em]
                sm:mt-10
                sm:text-4xl
                sm:tracking-[0.35em]
              "
            >
              💕 🌸 ❤️ 🌙 ❤️ 🌸 💕
            </div>


            <h3
              className="
                mt-8
                text-2xl
                font-black
                text-pink-400
                sm:mt-10
                sm:text-4xl
              "
            >
              Happy Birthday,

              <span className="mt-2 block">
                My JAADU ❤️
              </span>
            </h3>


            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-xs
                leading-7
                text-white/45
                sm:mt-5
                sm:text-base
              "
            >
              You are not just a beautiful part of the world —

              you make my little world more beautiful.
            </p>


            {/* Final hearts */}

            <div
              className="
                mt-7
                text-xl
                sm:mt-10
                sm:text-3xl
              "
            >
              ❤️ ❤️ ❤️ ❤️ ❤️
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL MESSAGE
      ====================================================== */}

      <section
        className="
          relative
          z-20
          px-4
          pb-20
          pt-5
          sm:px-5
          sm:pb-28
          sm:pt-10
        "
      >

        <div className="mx-auto max-w-3xl text-center">

          <div
            className="
              text-3xl
              tracking-widest
              sm:text-4xl
            "
          >
            ✨ ❤️ ✨
          </div>


          <p
            className="
              mt-5
              text-xs
              leading-7
              text-white/40
              sm:mt-6
              sm:text-base
              sm:leading-8
            "
          >
            Some people are remembered because of
            the moments they created.

            Some are remembered because of
            the happiness they brought.
          </p>


          <p
            className="
              mt-4
              text-lg
              font-bold
              text-white
              sm:mt-5
              sm:text-2xl
            "
          >
            And some people are simply unforgettable. ❤️
          </p>


          <p
            className="
              mt-4
              text-xs
              font-medium
              text-pink-400
              sm:mt-5
              sm:text-sm
            "
          >
            You are one of them. 🌸
          </p>


          <div
            className="
              mt-6
              text-xl
              tracking-[0.25em]
              sm:mt-8
              sm:text-2xl
              sm:tracking-[0.4em]
            "
          >
            💕 ❤️ 💗 ❤️ 💕
          </div>

        </div>

      </section>


      {/* =====================================================
          POPUP
      ====================================================== */}

      {selected && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/90
            px-4
            py-6
            backdrop-blur-md
            sm:px-5
          "
          onClick={() => setSelected(null)}
        >

          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-lg
              overflow-y-auto
              rounded-[28px]
              border
              border-pink-400/20
              bg-[#0b0710]
              p-6
              text-center
              shadow-[0_0_80px_rgba(236,72,153,0.2)]
              sm:rounded-[35px]
              sm:p-10
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}

            <button
              onClick={() => setSelected(null)}
              className="
                absolute
                right-4
                top-4
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white/5
                text-white/60
                transition
                hover:bg-pink-500/20
                hover:text-white
                sm:right-5
                sm:top-5
              "
            >
              ✕
            </button>


            {/* Emoji */}

            <div className="text-5xl sm:text-6xl">
              {selected.emoji}
            </div>


            {/* Title */}

            <h3
              className="
                mt-5
                px-5
                text-xl
                font-black
                leading-tight
                text-pink-400
                sm:mt-6
                sm:text-2xl
              "
            >
              {selected.title}
            </h3>


            {/* Message */}

            <p
              className="
                mt-4
                text-xs
                leading-7
                text-white/60
                sm:mt-5
                sm:text-base
                sm:leading-8
              "
            >
              {selected.text}
            </p>


            {/* Hearts */}

            <div className="mt-6 text-lg sm:mt-7 sm:text-xl">
              💕 ❤️ 💕
            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Beautiful;