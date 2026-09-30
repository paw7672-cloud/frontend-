import { useEffect, useState } from "react";

function BubblePage() {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    setFloating(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* =====================================
          BUBBLE ANIMATION
      ===================================== */}

      <style>{`
        @keyframes bubbleFloat1 {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-35px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        @keyframes bubbleFloat2 {
          0% {
            transform: translateY(-10px);
          }

          50% {
            transform: translateY(35px);
          }

          100% {
            transform: translateY(-10px);
          }
        }

        @keyframes bubbleFloat3 {
          0% {
            transform: translateY(10px);
          }

          50% {
            transform: translateY(-30px);
          }

          100% {
            transform: translateY(10px);
          }
        }

        .bubble-one {
          animation: bubbleFloat1 5s ease-in-out infinite;
        }

        .bubble-two {
          animation: bubbleFloat2 6s ease-in-out infinite;
        }

        .bubble-three {
          animation: bubbleFloat3 4.5s ease-in-out infinite;
        }
      `}</style>


      {/* =====================================
          ATTRACTIVE BLACK BACKGROUND
      ===================================== */}

      {/* Pink glow */}

      <div
        className="
          absolute
          left-[-180px]
          top-[-180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-pink-600/20
          blur-[150px]
        "
      />


      {/* Purple glow */}

      <div
        className="
          absolute
          right-[-180px]
          top-[-100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-600/20
          blur-[150px]
        "
      />


      {/* Blue glow */}

      <div
        className="
          absolute
          bottom-[-180px]
          left-[-100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/20
          blur-[150px]
        "
      />


      {/* Cyan glow */}

      <div
        className="
          absolute
          bottom-[-180px]
          right-[-100px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/15
          blur-[150px]
        "
      />


      {/* Center subtle glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-pink-500/5
          blur-[130px]
        "
      />


      {/* =====================================
          MAIN PAGE
      ===================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          px-6
          py-16
        "
      >


        {/* =====================================
            HEADING
        ===================================== */}

        <p
          className="
            mb-5
            text-sm
            font-bold
            uppercase
            tracking-[0.5em]
            text-pink-300
          "
        >
          ✦ NITIK KUMARI ( JAADU) ✦
        </p>


        <h1
          className="
            text-center
            text-5xl
        font-[Montserrat]
            text-white
            drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]

            sm:text-4xl
            md:text-5xl
          "
        >
          Many many happy returns of the day<br/>
May Ram Ji always bless you with happiness, peace, good health, and success in your life.
 May all your dreams come true and may you always keep smiling
        </h1>


        <p
          className="
            mt-5
            max-w-xl
            text-center
            text-white/60
          "
        >
          Three little bubbles carrying three beautiful 
          messages for a very special person.
        </p>


        {/* =====================================
            THREE BUBBLES
        ===================================== */}

        <div
          className="
            mt-16
            flex
            w-full
            max-w-6xl
            flex-col
            items-center
            justify-center
            gap-10

            md:flex-row
          "
        >


          {/* =====================================
              BUBBLE 1
          ===================================== */}

          <div className="bubble-one">

            <div
              className="
                relative
                flex
                h-64
                w-64
                items-center
                justify-center
                rounded-full
                border
                border-pink-300/30
                bg-gradient-to-br
                from-pink-500/20
                via-white/5
                to-purple-500/20
                p-10
                text-center
                shadow-[0_0_60px_rgba(236,72,153,0.25)]
                backdrop-blur-md
                transition
                duration-500
                hover:scale-105
                hover:border-pink-300/60
                hover:shadow-[0_0_80px_rgba(236,72,153,0.45)]
                hover:bg-pink-500/15
              "
            >

              {/* Shine */}

              <div
                className="
                  absolute
                  left-12
                  top-8
                  h-8
                  w-4
                  rounded-full
                  bg-white/60
                  blur-[2px]
                "
              />


              {/* Text */}

              <div>

                <div className="mb-3 text-3xl">
                  ❤️
                </div>

                <h2 className="text-xl font-bold text-white">
                  Beautiful Memories
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Every beautiful moment 
                  becomes a memory.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================
              BUBBLE 2
          ===================================== */}

          <div className="bubble-two">

            <div
              className="
                relative
                flex
                h-64
                w-64
                items-center
                justify-center
                rounded-full
                border
                border-purple-300/30
                bg-gradient-to-br
                from-purple-500/20
                via-white/5
                to-blue-500/20
                p-10
                text-center
                shadow-[0_0_60px_rgba(168,85,247,0.25)]
                backdrop-blur-md
                transition
                duration-500
                hover:scale-105
                hover:border-purple-300/60
                hover:shadow-[0_0_80px_rgba(168,85,247,0.45)]
                hover:bg-purple-500/15
              "
            >

              {/* Shine */}

              <div
                className="
                  absolute
                  left-12
                  top-8
                  h-8
                  w-4
                  rounded-full
                  bg-white/60
                  blur-[2px]
                "
              />


              {/* Text */}

              <div>

                <div className="mb-3 text-3xl">
                  ✨
                </div>

                <h2 className="text-xl font-bold text-white">
                  Special Day
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  May your day be filled 
                  with happiness.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================
              BUBBLE 3
          ===================================== */}

          <div className="bubble-three">

            <div
              className="
                relative
                flex
                h-64
                w-64
                items-center
                justify-center
                rounded-full
                border
                border-cyan-300/30
                bg-gradient-to-br
                from-cyan-500/20
                via-white/5
                to-blue-500/20
                p-10
                text-center
                shadow-[0_0_60px_rgba(6,182,212,0.25)]
                backdrop-blur-md
                transition
                duration-500
                hover:scale-105
                hover:border-cyan-300/60
                hover:shadow-[0_0_80px_rgba(6,182,212,0.45)]
                hover:bg-cyan-500/15
              "
            >

              {/* Shine */}

              <div
                className="
                  absolute
                  left-12
                  top-8
                  h-8
                  w-4
                  rounded-full
                  bg-white/60
                  blur-[2px]
                "
              />


              {/* Text */}

              <div>

                <div className="mb-3 text-3xl">
                  🎂
                </div>

                <h2 className="text-xl font-bold text-white">
                  Make a Wish
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Close your eyes and 
                  make a beautiful wish.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================
            BOTTOM MESSAGE
        ===================================== */}

        <p
          className="
            mt-16
            text-center
            text-lg
            font-medium
            text-white/50
          "
        >
          Keep smiling. Keep shining. ❤️
        </p>

      </div>

    </div>
  );
}

export default BubblePage;