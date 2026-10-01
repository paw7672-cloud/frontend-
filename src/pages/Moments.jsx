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

  return (
    <section className="min-h-screen bg-[#030106] px-5 pb-28 pt-32 md:px-8">

      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            PAGE HEADING
        ===================================================== */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p
            className="
              mb-4
              text-xs
              font-bold
              uppercase
              tracking-[0.4em]
              text-pink-400
            "
          >
            Our Beautiful Memories
          </p>

          <h1
            className="
              text-4xl
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
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/50
              md:text-base
            "
          >
            Move your mouse over a card and discover the
            beautiful memory waiting on the other side.
          </p>

        </div>


        {/* =====================================================
            7 CARDS
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >

          {moments.map((moment) => (

            <div
              key={moment.number}
              className="
                group
                h-[470px]
                w-full
                [perspective:1400px]
              "
            >

              {/* =================================================
                  3D FLIP CONTAINER
              ================================================= */}

              <div
                className="
                  relative
                  h-full
                  w-full
                  transition-transform
                  duration-1000
                  ease-in-out
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                "
              >

                {/* =================================================
                    FRONT SIDE
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-gradient-to-br
                    from-[#1b071e]
                    via-[#0d0412]
                    to-[#030106]
                    p-8
                    text-center
                    shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                    [backface-visibility:hidden]
                  "
                >

                  {/* Top Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-56
                      w-56
                      rounded-full
                      bg-pink-500/20
                      blur-[80px]
                    "
                  />

                  {/* Bottom Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-20
                      -left-20
                      h-56
                      w-56
                      rounded-full
                      bg-purple-500/20
                      blur-[80px]
                    "
                  />

                  {/* Number */}

                  <div
                    className="
                      absolute
                      right-6
                      top-6
                      text-6xl
                      font-black
                      text-white/[0.04]
                    "
                  >
                    {moment.number}
                  </div>


                  {/* Heart Circle */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-pink-400/30
                      bg-pink-500/10
                      text-5xl
                      shadow-[0_0_45px_rgba(236,72,153,0.18)]
                      transition
                      duration-500
                      group-hover:scale-110
                    "
                  >
                    ❤️
                  </div>


                  {/* Small Heading */}

                  <p
                    className="
                      relative
                      z-10
                      mt-8
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.35em]
                      text-pink-400
                    "
                  >
                    {moment.smallText}
                  </p>


                  {/* Main Heading */}

                  <h2
                    className="
                      relative
                      z-10
                      mt-4
                      max-w-[280px]
                      text-2xl
                      font-black
                      leading-tight
                      text-white
                      md:text-3xl
                    "
                  >
                    {moment.title}
                  </h2>


                  {/* Description */}

                  <p
                    className="
                      relative
                      z-10
                      mt-5
                      max-w-[280px]
                      text-sm
                      leading-6
                      text-white/50
                    "
                  >
                    {moment.description}
                  </p>


                  {/* Hover Button */}

                  <div
                    className="
                      relative
                      z-10
                      mt-7
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-2
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-white/50
                      backdrop-blur-md
                    "
                  >
                    Hover Me
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
                    rounded-[32px]
                    border
                    border-pink-400/30
                    bg-black
                    shadow-[0_25px_80px_rgba(236,72,153,0.3)]
                    [backface-visibility:hidden]
                    [transform:rotateY(180deg)]
                  "
                >

                  {/* =========================
                      CLICKABLE IMAGE
                  ========================= */}

                  <img
                    src={moment.image}
                    alt={`Beautiful memory ${moment.number}`}
                    onClick={() => setSelectedImage(moment.image)}
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
                      from-black/70
                      via-black/10
                      to-black/20
                    "
                  />


                  {/* Inner Border */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-4
                      z-20
                      rounded-[25px]
                      border
                      border-white/30
                    "
                  />


                  {/* Image Number */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-6
                      top-6
                      z-20
                      rounded-full
                      border
                      border-white/20
                      bg-black/30
                      px-4
                      py-2
                      text-xs
                      font-bold
                      text-white
                      backdrop-blur-md
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
                      z-20
                      p-7
                    "
                  >

                    <div
                      className="
                        mb-3
                        flex
                        items-center
                        gap-2
                      "
                    >

                      <span className="text-pink-400">
                        ❤️
                      </span>

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.3em]
                          text-white/70
                        "
                      >
                        Beautiful Memory
                      </span>

                    </div>


                    <h3
                      className="
                        text-2xl
                        font-black
                        text-white
                      "
                    >
                      {moment.title}
                    </h3>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* =====================================================
            BOTTOM MESSAGE
        ===================================================== */}

        <div className="mt-20 text-center">

          <p className="text-sm italic text-white/40">
            "The best memories are the ones we keep in our hearts."
          </p>

          <div className="mt-5 text-xl tracking-[0.5em]">
            ✨ ❤️ ✨
          </div>

        </div>

      </div>


      {/* =====================================================
          FULL SCREEN IMAGE POPUP / LIGHTBOX
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
            p-5
            backdrop-blur-md
          "
          onClick={() => setSelectedImage(null)}
        >

          {/* Close Button */}

          <button
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              right-6
              top-6
              z-[110]
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              text-2xl
              text-white
              backdrop-blur-md
              transition
              duration-300
              hover:scale-110
              hover:bg-pink-500
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
              max-h-[90vh]
              max-w-[95vw]
              rounded-2xl
              object-contain
              shadow-[0_0_80px_rgba(236,72,153,0.25)]
            "
          />

        </div>

      )}

    </section>
  );
}

export default Moments;