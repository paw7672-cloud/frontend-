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
    <div className="relative min-h-screen overflow-hidden bg-black px-6 py-20 text-white">

      {/* =================================
          BACKGROUND GLOW
      ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-pink-500/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500/10
          blur-[130px]
        "
      />


      {/* =================================
          HEADING
      ================================= */}

      <div className="relative z-10 mx-auto mb-16 max-w-3xl text-center">

        <p
          className="
            mb-4
            text-sm
            font-bold
            uppercase
            tracking-[0.5em]
            text-pink-400
          "
        >
          ✦ Special Memories ✦
        </p>

        <h1
          className="
            text-5xl
            font-black
            sm:text-6xl
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

        <p className="mt-5 text-gray-500">
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
          max-w-6xl
          gap-10
          md:grid-cols-3
        "
      >

        {cards.map((card) => (

          <div
            key={card.id}
            className="
              group
              h-[380px]
              [perspective:1200px]
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
                rounded-[2rem]
                transition-transform
                duration-700
                [transform-style:preserve-3d]

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
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-8
                  text-center
                  shadow-2xl
                  backdrop-blur-xl

                  [backface-visibility:hidden]
                "
              >

                {/* Glow */}

                <div
                  className="
                    absolute
                    -left-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-pink-500/10
                    blur-3xl
                  "
                />


                {/* Number */}

                <div
                  className="
                    absolute
                    right-6
                    top-6
                    text-sm
                    font-bold
                    text-white/20
                  "
                >
                  0{card.id}
                </div>


                {/* Icon */}

                <div
                  className="
                    relative
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-pink-400/20
                    bg-pink-500/5
                    text-5xl
                    shadow-[0_0_40px_rgba(236,72,153,0.15)]
                  "
                >
                  {card.frontIcon}
                </div>


                {/* Title */}

                <h2
                  className="
                    relative
                    mt-8
                    text-2xl
                    font-bold
                  "
                >
                  {card.frontTitle}
                </h2>


                <p
                  className="
                    relative
                    mt-4
                    text-sm
                    text-gray-500
                  "
                >
                  Hover to discover ✨
                </p>


                {/* Bottom */}

                <div
                  className="
                    absolute
                    bottom-7
                    left-8
                    right-8
                    flex
                    justify-between
                    text-xs
                    uppercase
                    tracking-[0.3em]
                  "
                >

                  <span className="text-pink-400">
                    Memory
                  </span>

                  <span className="text-white/30">
                    →
                  </span>

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
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-pink-400/20
                  bg-gradient-to-br
                  from-pink-950
                  via-black
                  to-purple-950
                  p-8
                  text-center
                  shadow-[0_0_60px_rgba(236,72,153,0.15)]
                  [backface-visibility:hidden]
                  [transform:rotateY(180deg)]
                "
              >

                {/* Background glow */}

                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-pink-500/20
                    blur-3xl
                  "
                />


                {/* Back Icon */}

                <div
                  className="
                    relative
                    text-6xl
                  "
                >
                  {card.backIcon}
                </div>


                {/* Back Title */}

                <h2
                  className="
                    relative
                    mt-7
                    text-2xl
                    font-bold
                    text-pink-300
                  "
                >
                  {card.backTitle}
                </h2>


                {/* Back Text */}

                <p
                  className="
                    relative
                    mt-5
                    max-w-xs
                    text-sm
                    leading-7
                    text-gray-300
                  "
                >
                  {card.backText}
                </p>


                {/* Back bottom */}

                <div
                  className="
                    absolute
                    bottom-7
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-yellow-400
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

      <div className="relative z-10 mt-16 text-center">

        <p className="text-sm text-gray-600">
          Every card has a special message ❤️
        </p>

      </div>

    </div>
  );
}

export default Cards;