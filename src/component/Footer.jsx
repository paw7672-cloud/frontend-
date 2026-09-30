function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

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


      {/* =========================================
          TOP LINE
      ========================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          border-t
          border-white/10
        "
      />


      {/* =========================================
          FOOTER CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-16
          lg:px-8
        "
      >

        <div
          className="
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {/* =====================================
              BRAND
          ===================================== */}

          <div className="lg:col-span-2">

            <div
              className="
                text-3xl
                font-black
                tracking-tight
              "
            >
              my
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
                JAADU
              </span>
            </div>


            <p
              className="
                mt-5
                max-w-md
                leading-7
                text-gray-400
              "
            >
              Creating beautiful digital experiences,
              special memories, and moments worth
              remembering forever.
            </p>


            {/* Social Icons */}

            <div className="mt-7 flex gap-4">

              <a
                href="#"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-lg
                  text-gray-400
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-pink-400/40
                  hover:bg-pink-500/10
                  hover:text-pink-400
                "
              >
                f
              </a>


              <a
                href="#"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-lg
                  text-gray-400
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-purple-400/40
                  hover:bg-purple-500/10
                  hover:text-purple-400
                "
              >
                ◎
              </a>


              <a
                href="#"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-lg
                  text-gray-400
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-400/40
                  hover:bg-yellow-400/10
                  hover:text-yellow-400
                "
              >
                X
              </a>


              <a
                href="#"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-lg
                  text-gray-400
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-400/40
                  hover:bg-red-500/10
                  hover:text-red-400
                "
              >
                ▶
              </a>

            </div>

          </div>


          {/* =====================================
              QUICK LINKS
          ===================================== */}

          <div>

            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-white
              "
            >
              Quick Links
            </h3>


            <div className="mt-6 flex flex-col gap-4">

              <a
                href="#home"
                className="
                  w-fit
                  text-gray-500
                  transition
                  duration-300
                  hover:translate-x-2
                  hover:text-pink-400
                "
              >
                Home
              </a>

              <a
                href="#about"
                className="
                  w-fit
                  text-gray-500
                  transition
                  duration-300
                  hover:translate-x-2
                  hover:text-pink-400
                "
              >
                About
              </a>

              <a
                href="#services"
                className="
                  w-fit
                  text-gray-500
                  transition
                  duration-300
                  hover:translate-x-2
                  hover:text-pink-400
                "
              >
                Services
              </a>

              <a
                href="#contact"
                className="
                  w-fit
                  text-gray-500
                  transition
                  duration-300
                  hover:translate-x-2
                  hover:text-pink-400
                "
              >
                Contact
              </a>

            </div>

          </div>


          {/* =====================================
              CONTACT
          ===================================== */}

          <div>

            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-white
              "
            >
              Some Details
            </h3>


            <div className="mt-6 space-y-4">

              <p className="text-gray-500">
                📧 hello@mywebsite.com
              </p>

              <p className="text-gray-500">
                📍 India
              </p>

              <p className="text-gray-500">
                ✦ Nitika Panday
              </p>

            </div>

          </div>

        </div>


        {/* =========================================
            DIVIDER
        ========================================= */}

        <div
          className="
            my-12
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            text-center

            sm:flex-row
            sm:text-left
          "
        >

          <p className="text-sm text-gray-600">
            © 2026 MyWebsite. All rights reserved.
          </p>


          <p
            className="
              text-sm
              text-gray-600
            "
          >
            Made with
            <span className="mx-2 text-pink-500">
              ♥
            </span>
            and creativity
          </p>


          <a
            href="#home"
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2
              text-sm
              text-gray-400
              transition
              duration-300
              hover:border-pink-400/30
              hover:text-pink-400
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