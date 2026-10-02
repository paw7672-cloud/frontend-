import { useState } from "react";

import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";
import Image6 from "../assets/Image6.jpg";
import Image7 from "../assets/Image7.jpg";

function Moments() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Mobile touch flip
  const [flippedIndex, setFlippedIndex] = useState(null);

  const moments = [
    {
      image: Image1,
      number: "01",
      smallText: "A Beautiful Beginning",
      title: "You Make Everything Special ✨",
      description:
        "Some moments become memories, and some memories stay in our hearts forever.",
    },
    {
      image: Image2,
      number: "02",
      smallText: "A Precious Memory",
      title: "A Moment To Remember ❤️",
      description:
        "Every beautiful moment deserves a special place in our memories.",
    },
    {
      image: Image3,
      number: "03",
      smallText: "Something Special",
      title: "Keep Smiling Always 🌸",
      description:
        "A beautiful smile can turn an ordinary moment into something unforgettable.",
    },
    {
      image: Image4,
      number: "04",
      smallText: "Sweet Memory",
      title: "Beautifully Unforgettable 💕",
      description:
        "Some memories are never really gone because they always remain close to the heart.",
    },
    {
      image: Image5,
      number: "05",
      smallText: "A Special Feeling",
      title: "Forever A Beautiful Memory ✨",
      description:
        "Life becomes more beautiful when we collect moments worth remembering.",
    },
    {
      image: Image6,
      number: "06",
      smallText: "One More Memory",
      title: "Happiness Looks Like This ❤️",
      description:
        "The smallest moments can sometimes become the biggest memories.",
    },
    {
      image: Image7,
      number: "07",
      smallText: "The Last Memory",
      title: "Always Stay Special 🌙",
      description:
        "Some memories deserve to be remembered again and again.",
    },
  ];

  // =========================================================
  // MOBILE CARD FLIP
  // =========================================================

  const flipCard = (index) => {
    setFlippedIndex((currentIndex) => {
      if (currentIndex === index) {
        return null;
      }

      return index;
    });
  };

  // =========================================================
  // BACK BUTTON
  // =========================================================

  const handleBack = (event, index) => {
    event.stopPropagation();

    setFlippedIndex(null);
  };

  // =========================================================
  // IMAGE OPEN
  // =========================================================

  const openImage = (event, image) => {
    event.stopPropagation();

    setSelectedImage(image);
  };

  // =========================================================
  // CLOSE IMAGE
  // =========================================================

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section
      className="
        min-h-screen
        overflow-hidden
        bg-[#030106]
        px-4
        pb-20
        pt-24
        sm:px-5
        sm:pt-28
        md:px-8
        md:pb-28
        md:pt-32
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* =====================================================
            PAGE HEADING
        ===================================================== */}

        <div
          className="
            mx-auto
            mb-12
            max-w-3xl
            px-2
            text-center
            sm:mb-16
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
              sm:text-xs
              sm:tracking-[0.4em]
            "
          >
            Our Beautiful Memories
          </p>

          <h1
            className="
              text-3xl
              font-black
              leading-tight
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Moments That

            <span className="block text-pink-400">
              Stay Forever ❤️
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-xs
              leading-6
              text-white/50
              sm:mt-6
              sm:text-sm
              sm:leading-7
              md:text-base
            "
          >
            <span className="hidden md:inline">
              Move your mouse over a card and discover the
              beautiful memory waiting on the other side.
            </span>

            <span className="md:hidden">
              Touch a card and discover the beautiful memory
              waiting on the other side. ❤️
            </span>
          </p>
        </div>

        {/* =====================================================
            CARDS GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-7
            sm:grid-cols-2
            sm:gap-8
            lg:grid-cols-3
            lg:gap-10
            xl:grid-cols-4
          "
        >
          {moments.map((moment, index) => (
            <div
              key={moment.number}
              className="
                group
                mx-auto
                h-[420px]
                w-full
                max-w-[360px]
                [perspective:1400px]
                sm:h-[450px]
                md:h-[470px]
                md:max-w-none
              "
            >
              {/* =================================================
                  FLIP CONTAINER
              ================================================= */}

              <div
                className={`
                  relative
                  h-full
                  w-full
                  transition-transform
                  duration-1000
                  ease-in-out
                  [transform-style:preserve-3d]

                  ${
                    flippedIndex === index
                      ? "[transform:rotateY(180deg)]"
                      : ""
                  }

                  md:group-hover:[transform:rotateY(180deg)]
                `}
              >

                {/* =================================================
                    FRONT SIDE
                ================================================= */}

                <div
                  onClick={(event) => {
                    event.stopPropagation();
                    flipCard(index);
                  }}
                  className="
                    absolute
                    inset-0
                    flex
                    cursor-pointer
                    touch-manipulation
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-gradient-to-br
                    from-[#1b071e]
                    via-[#0d0412]
                    to-[#030106]
                    p-6
                    text-center
                    shadow-[0_20px_60px_rgba(0,0,0,0.55)]
                    [backface-visibility:hidden]
                    sm:rounded-[32px]
                    sm:p-8
                  "
                >

                  {/* Top Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-pink-500/20
                      blur-[70px]
                      sm:h-56
                      sm:w-56
                      sm:blur-[80px]
                    "
                  />

                  {/* Bottom Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-20
                      -left-20
                      h-48
                      w-48
                      rounded-full
                      bg-purple-500/20
                      blur-[70px]
                      sm:h-56
                      sm:w-56
                      sm:blur-[80px]
                    "
                  />

                  {/* Number */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-5
                      top-5
                      text-5xl
                      font-black
                      text-white/[0.04]
                      sm:right-6
                      sm:top-6
                      sm:text-6xl
                    "
                  >
                    {moment.number}
                  </div>

                  {/* Heart */}

                  <div
                    className="
                      pointer-events-none
                      relative
                      z-10
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-pink-400/30
                      bg-pink-500/10
                      text-4xl
                      shadow-[0_0_40px_rgba(236,72,153,0.18)]
                      transition
                      duration-500
                      md:h-24
                      md:w-24
                      md:text-5xl
                      md:group-hover:scale-110
                    "
                  >
                    ❤️
                  </div>

                  {/* Small Text */}

                  <p
                    className="
                      pointer-events-none
                      relative
                      z-10
                      mt-6
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.3em]
                      text-pink-400
                      sm:mt-8
                      sm:text-[10px]
                      sm:tracking-[0.35em]
                    "
                  >
                    {moment.smallText}
                  </p>

                  {/* Title */}

                  <h2
                    className="
                      pointer-events-none
                      relative
                      z-10
                      mt-3
                      max-w-[280px]
                      text-xl
                      font-black
                      leading-tight
                      text-white
                      sm:mt-4
                      sm:text-2xl
                      md:text-3xl
                    "
                  >
                    {moment.title}
                  </h2>

                  {/* Description */}

                  <p
                    className="
                      pointer-events-none
                      relative
                      z-10
                      mt-4
                      max-w-[280px]
                      text-xs
                      leading-5
                      text-white/50
                      sm:mt-5
                      sm:text-sm
                      sm:leading-6
                    "
                  >
                    {moment.description}
                  </p>

                  {/* Button */}

                  <div
                    className="
                      pointer-events-none
                      relative
                      z-10
                      mt-6
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white/50
                      backdrop-blur-md
                      sm:mt-7
                      sm:px-5
                      sm:text-[10px]
                      sm:tracking-[0.25em]
                    "
                  >
                    <span className="hidden md:inline">
                      Hover Me
                    </span>

                    <span className="md:hidden">
                      Touch Me ❤️
                    </span>
                  </div>
                </div>

                {/* =================================================
                    BACK SIDE
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-pink-400/30
                    bg-black
                    shadow-[0_25px_80px_rgba(236,72,153,0.3)]
                    [backface-visibility:hidden]
                    [transform:rotateY(180deg)]
                    sm:rounded-[32px]
                  "
                >

                  {/* IMAGE */}

                  <img
                    src={moment.image}
                    alt={`Beautiful memory ${moment.number}`}
                    onClick={(event) =>
                      openImage(event, moment.image)
                    }
                    className="
                      absolute
                      inset-0
                      z-0
                      h-full
                      w-full
                      cursor-zoom-in
                      object-cover
                      transition
                      duration-700
                      md:hover:scale-105
                    "
                  />

                  {/* Image Overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-10
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-black/20
                    "
                  />

                  {/* Inner Border */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-3
                      z-20
                      rounded-[22px]
                      border
                      border-white/30
                      sm:inset-4
                      sm:rounded-[25px]
                    "
                  />

                  {/* Memory Number */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-4
                      z-30
                      rounded-full
                      border
                      border-white/20
                      bg-black/30
                      px-3
                      py-1.5
                      text-[10px]
                      font-bold
                      text-white
                      backdrop-blur-md
                      sm:left-6
                      sm:top-6
                      sm:px-4
                      sm:py-2
                      sm:text-xs
                    "
                  >
                    MEMORY {moment.number}
                  </div>

                  {/* Bottom Text */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      right-0
                      z-30
                      p-5
                      sm:p-7
                    "
                  >
                    <div
                      className="
                        mb-2
                        flex
                        items-center
                        gap-2
                        sm:mb-3
                      "
                    >
                      <span className="text-pink-400">
                        ❤️
                      </span>

                      <span
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-white/70
                          sm:text-[10px]
                          sm:tracking-[0.3em]
                        "
                      >
                        Beautiful Memory
                      </span>
                    </div>

                    <h3
                      className="
                        text-xl
                        font-black
                        leading-tight
                        text-white
                        sm:text-2xl
                      "
                    >
                      {moment.title}
                    </h3>
                  </div>

                  {/* MOBILE BACK BUTTON */}

                  <button
                    type="button"
                    onClick={(event) =>
                      handleBack(event, index)
                    }
                    className="
                      absolute
                      bottom-5
                      right-5
                      z-50
                      flex
                      items-center
                      gap-1
                      rounded-full
                      border
                      border-white/20
                      bg-black/60
                      px-4
                      py-2
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-white
                      backdrop-blur-md
                      transition
                      active:scale-90
                      md:hidden
                    "
                  >
                    ← Back
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ===================================================== */}

        <div
          className="
            mt-16
            px-4
            text-center
            sm:mt-20
          "
        >
          <p
            className="
              text-xs
              italic
              leading-6
              text-white/40
              sm:text-sm
            "
          >
            "The best memories are the ones we keep in our hearts."
          </p>

          <div
            className="
              mt-5
              text-lg
              tracking-[0.4em]
              sm:text-xl
            "
          >
            ✨ ❤️ ✨
          </div>
        </div>
      </div>

      {/* =====================================================
          FULL SCREEN IMAGE
      ===================================================== */}

      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/95
            p-3
            backdrop-blur-md
            sm:p-5
          "
          onClick={closeImage}
        >
          {/* Close Button */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeImage();
            }}
            className="
              absolute
              right-4
              top-4
              z-[110]
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              text-xl
              text-white
              backdrop-blur-md
              transition
              duration-300
              active:scale-90
              sm:right-6
              sm:top-6
              sm:h-12
              sm:w-12
              sm:text-2xl
              md:hover:scale-110
              md:hover:bg-pink-500
            "
          >
            ✕
          </button>

          {/* Large Image */}

          <img
            src={selectedImage}
            alt="Large memory"
            onClick={(event) => event.stopPropagation()}
            className="
              max-h-[85vh]
              max-w-[95vw]
              rounded-xl
              object-contain
              shadow-[0_0_60px_rgba(236,72,153,0.25)]
              sm:max-h-[90vh]
              sm:rounded-2xl
            "
          />
        </div>
      )}
    </section>
  );
}

export default Moments;