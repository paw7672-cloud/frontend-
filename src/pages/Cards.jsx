import { useState } from "react";

function Cards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      frontIcon: "❤️",
      frontTitle: "Beautiful Memories",
      backIcon: "💖",
      backTitle: "A Beautiful Memory",
      backText:
        "Some memories are so beautiful that we want to keep them forever.",
    },

    {
      id: 2,
      frontIcon: "✨",
      frontTitle: "Special Moments",
      backIcon: "🌟",
      backTitle: "A Special Moment",
      backText:
        "Every special moment becomes a beautiful part of our story.",
    },

    {
      id: 3,
      frontIcon: "🎂",
      frontTitle: "Birthday Wish",
      backIcon: "🎉",
      backTitle: "Make A Wish",
      backText:
        "May your birthday bring happiness, beautiful memories and endless smiles.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      {/* =================================
          BACKGROUND GLOW
      ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-pink-500/10
          blur-[100px]

          sm:-left-40
          sm:-top-40
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-72
          w-72
          rounded-full
          bg-purple-500/10
          blur-[100px]

          sm:-bottom-40
          sm:-right-40
          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[130px]
        "
      />

      {/* Additional center glow */}

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
          bg-fuchsia-500/5
          blur-[100px]

          sm:h-96
          sm:w-96
          sm:blur-[130px]
        "
      />

      {/* =================================
          HEADING
      ================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mb-12
          w-full
          max-w-3xl
          px-2
          text-center

          sm:mb-16
          sm:px-0
        "
      >
        <p
          className="
            mb-3
            text-[10px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-pink-400

            sm:mb-4
            sm:text-sm
            sm:tracking-[0.5em]
          "
        >
          ✦ Special Memories ✦
        </p>

        <h1
          className="
            text-4xl
            font-black
            leading-tight

            sm:text-5xl
            md:text-6xl
          "
        >
          Beautiful{" "}
          <span
            className="
              bg-gradient-to-r
              from-pink-400
              via-purple-400
              to-yellow-400
              bg-clip-text
              text-transparent
            "
          >
            Moments
          </span>
        </h1>

        <p
          className="
            mt-4
            text-sm
            text-gray-500

            sm:mt-5
            sm:text-base
          "
        >
          Move your pointer over a card ✨
        </p>
      </div>

      {/* =================================
          CARDS
      ================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-6xl
          grid-cols-1
          gap-6

          sm:gap-7

          md:grid-cols-2
          md:gap-8

          lg:grid-cols-3
          lg:gap-8
        "
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="
              group
              h-[340px]
              w-full
              [perspective:1200px]

              sm:h-[360px]

              md:h-[380px]

              lg:h-[400px]
            "
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* =================================
                CARD
            ================================= */}

            <div
              className={`
                relative
                h-full
                w-full
                rounded-[1.5rem]
                transition-transform
                duration-700
                [transform-style:preserve-3d]

                sm:rounded-[2rem]

                ${
                  hoveredCard === card.id
                    ? "[transform:rotateY(180deg)]"
                    : ""
                }
              `}
            >
              {/* =================================
                  FRONT
              ================================= */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  h-full
                  w-full
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-5
                  text-center
                  shadow-2xl
                  backdrop-blur-xl
                  [backface-visibility:hidden]

                  sm:rounded-[2rem]
                  sm:p-8
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    -left-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-pink-500/10
                    blur-3xl

                    sm:-left-20
                    sm:-top-20
                    sm:h-48
                    sm:w-48
                  "
                />

                {/* Number */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    text-xs
                    font-bold
                    text-white/20

                    sm:right-6
                    sm:top-6
                    sm:text-sm
                  "
                >
                  0{card.id}
                </div>

                {/* Icon */}

                <div
                  className="
                    relative
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-pink-400/20
                    bg-pink-500/5
                    text-4xl
                    shadow-[0_0_40px_rgba(236,72,153,0.15)]

                    sm:h-24
                    sm:w-24
                    sm:text-5xl
                  "
                >
                  {card.frontIcon}
                </div>

                {/* Title */}

                <h2
                  className="
                    relative
                    mt-6
                    text-xl
                    font-bold
                    leading-tight

                    sm:mt-8
                    sm:text-2xl
                  "
                >
                  {card.frontTitle}
                </h2>

                {/* Description */}

                <p
                  className="
                    relative
                    mt-3
                    text-xs
                    text-gray-500

                    sm:mt-4
                    sm:text-sm
                  "
                >
                  Hover to discover ✨
                </p>

                {/* Bottom */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    flex
                    justify-between
                    text-[10px]
                    uppercase
                    tracking-[0.2em]

                    sm:bottom-7
                    sm:left-8
                    sm:right-8
                    sm:text-xs
                    sm:tracking-[0.3em]
                  "
                >
                  <span className="text-pink-400">Memory</span>

                  <span className="text-white/30">→</span>
                </div>
              </div>

              {/* =================================
                  BACK
              ================================= */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  h-full
                  w-full
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-pink-400/20
                  bg-gradient-to-br
                  from-pink-950
                  via-black
                  to-purple-950
                  p-5
                  text-center
                  shadow-[0_0_60px_rgba(236,72,153,0.15)]
                  [backface-visibility:hidden]
                  [transform:rotateY(180deg)]

                  sm:rounded-[2rem]
                  sm:p-8
                "
              >
                {/* Background glow */}

                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-pink-500/20
                    blur-3xl

                    sm:-right-20
                    sm:-top-20
                    sm:h-48
                    sm:w-48
                  "
                />

                {/* Back Icon */}

                <div
                  className="
                    relative
                    text-5xl

                    sm:text-6xl
                  "
                >
                  {card.backIcon}
                </div>

                {/* Back Title */}

                <h2
                  className="
                    relative
                    mt-5
                    text-xl
                    font-bold
                    leading-tight
                    text-pink-300

                    sm:mt-7
                    sm:text-2xl
                  "
                >
                  {card.backTitle}
                </h2>

                {/* Back Text */}

                <p
                  className="
                    relative
                    mt-4
                    max-w-xs
                    text-xs
                    leading-6
                    text-gray-300

                    sm:mt-5
                    sm:text-sm
                    sm:leading-7
                  "
                >
                  {card.backText}
                </p>

                {/* Back bottom */}

                <div
                  className="
                    absolute
                    bottom-5
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-yellow-400

                    sm:bottom-7
                    sm:text-xs
                    sm:tracking-[0.3em]
                  "
                >
                  ✦ With Love ✦
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =================================
          BOTTOM MESSAGE
      ================================= */}

      <div
        className="
          relative
          z-10
          mt-12
          px-2
          text-center

          sm:mt-16
        "
      >
        <p
          className="
            text-xs
            text-gray-600

            sm:text-sm
          "
        >
          Every card has a special message ❤️
        </p>
      </div>
    </div>
  );
}

export default Cards;