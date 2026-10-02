import { Link } from "react-router-dom";

function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-black
        text-white
      "
    >

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-pink-500/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-0
          h-80
          w-80
          rounded-full
          bg-purple-500/10
          blur-[120px]
        "
      />


      {/* =====================================================
          FOOTER MAIN
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          py-10
          sm:px-6
          sm:py-12
          lg:px-8
        "
      >

        {/* =================================================
            NAVBAR STYLE TOP SECTION
        ================================================= */}

        <div
          className="
            flex
            flex-col
            items-center
            gap-7
            md:flex-row
            md:justify-between
            md:gap-8
          "
        >

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            onClick={handleLinkClick}
            className="
              shrink-0
              text-2xl
              font-black
              text-white
              transition
              duration-300
              hover:scale-105
              sm:text-3xl
            "
          >
            My
            <span className="text-pink-400">
              JAADU, SWEETHEART
            </span>
          </Link>


          {/* ================= NAVIGATION ================= */}

          <div
            className="
              flex
              w-full
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-4
              md:w-auto
              md:justify-center
              md:gap-x-7
            "
          >

            {/* HOME */}

            <Link
              to="/"
              onClick={handleLinkClick}
              className="
                text-sm
                font-medium
                text-white/70
                transition
                duration-300
                hover:text-pink-400
              "
            >
              Home
            </Link>


            {/* MEMORIES */}

            <a
              href="/#memories"
              onClick={handleLinkClick}
              className="
                text-sm
                font-medium
                text-white/70
                transition
                duration-300
                hover:text-pink-400
              "
            >
              Memories
            </a>


            {/* MOMENTS */}

            <Link
              to="/moments"
              onClick={handleLinkClick}
              className="
                text-sm
                font-medium
                text-white/70
                transition
                duration-300
                hover:text-pink-400
              "
            >
              Moments
            </Link>


            {/* BEAUTIFUL */}

            <Link
              to="/beautiful"
              onClick={handleLinkClick}
              className="
                text-sm
                font-medium
                text-white/70
                transition
                duration-300
                hover:text-pink-400
              "
            >
              Beautiful ❤️
            </Link>


            {/* FAVOURITE */}

            <Link
              to="/favourit"
              onClick={handleLinkClick}
              className="
                text-sm
                font-medium
                text-white/70
                transition
                duration-300
                hover:text-pink-400
              "
            >
              Favourite 💕
            </Link>


            {/* GET STARTED */}

            <Link
              to="/last"
              onClick={handleLinkClick}
              className="
                rounded-full
                bg-pink-500
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-pink-400
                hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]
              "
            >
              ATTITUDE
            </Link>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div
          className="
            my-8
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            sm:my-9
          "
        />


        {/* =====================================================
            MANY MANY RETURNS OF THE DAY
        ===================================================== */}

        <div className="flex w-full justify-center px-2">

          <div
            className="
              group
              relative
              w-full
              max-w-3xl
              cursor-default
              text-center
            "
          >

            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-24
                w-64
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-pink-500/20
                blur-3xl
                opacity-60
                transition
                duration-700
                group-hover:bg-pink-500/40
                group-hover:opacity-100
                sm:w-72
              "
            />


            {/* Small Heading */}

            <p
              className="
                relative
                mb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-pink-300/70
                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              ✦ A Special Wish ✦
            </p>


            {/* Main Heading */}

            <h2
              className="
                relative
                text-2xl
                font-black
                leading-tight
                tracking-tight
                transition-all
                duration-700
                sm:text-3xl
                md:text-4xl
                group-hover:scale-[1.02]
              "
            >

              <span
                className="
                  bg-gradient-to-r
                  from-pink-300
                  via-purple-300
                  to-yellow-200
                  bg-clip-text
                  text-transparent
                "
              >
                Many Many Returns
              </span>

              <br />

              <span className="text-white/90">
                Of The Day
              </span>

            </h2>


            {/* Sweetheart */}

            <p
              className="
                relative
                mt-3
                text-sm
                font-semibold
                text-pink-300
                transition-all
                duration-500
                sm:text-base
                md:text-lg
              "
            >
              ❤️ MY JAADU, SWEETHEART
            </p>


            {/* Bottom Line */}

            <div
              className="
                mx-auto
                mt-4
                h-[2px]
                w-16
                rounded-full
                bg-gradient-to-r
                from-pink-400
                via-purple-400
                to-yellow-300
                transition-all
                duration-700
                group-hover:w-32
                sm:w-20
                sm:group-hover:w-40
              "
            />

          </div>

        </div>


        {/* =====================================================
            SMALL MESSAGE
        ===================================================== */}

        <p
          className="
            mx-auto
            mt-6
            max-w-xl
            px-3
            text-center
            text-xs
            leading-6
            text-white/40
            sm:mt-7
            sm:text-sm
            sm:leading-7
          "
        >
          Wishing you happiness, beautiful moments,
          <br className="hidden sm:block" />
          and countless reasons to smile. ✨
        </p>


        {/* =====================================================
            BOTTOM DIVIDER
        ===================================================== */}

        <div
          className="
            my-7
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            sm:my-8
          "
        />


        {/* =====================================================
            BOTTOM SECTION
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-4
            text-center
            sm:flex-row
            sm:justify-between
            sm:text-left
          "
        >

          {/* COPYRIGHT */}

          <p className="text-xs text-white/30 sm:text-sm">
            © 2026 · MY JAADU, ATTITUDE.
          </p>


          {/* MADE WITH */}

          <p className="text-xs text-white/30 sm:text-sm">
            Made with

            <span className="mx-2 text-pink-500">
              ♥
            </span>

            and creativity
          </p>


          {/* BACK TO TOP */}

          <a
            href="#home"
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2
              text-xs
              font-medium
              text-white/50
              transition
              duration-300
              hover:-translate-y-1
              hover:border-pink-400/40
              hover:bg-pink-500/10
              hover:text-pink-400
              sm:text-sm
            "
          >
            ↑ Back to top
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;