import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        border-b
        border-white/10
        bg-black/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
      >

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          onClick={handleLinkClick}
          className="
            text-2xl
            font-black
            text-white
          "
        >
          My
          <span className="text-pink-400">
            JAADU
          </span>
        </Link>


        {/* ================= DESKTOP NAV ================= */}

        <div className="hidden items-center gap-7 md:flex">

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


          {/* ================= FAVOURITE ================= */}

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

        </div>


        {/* ================= GET STARTED ================= */}

        <Link
          to="/last"
          onClick={handleLinkClick}
          className="
            hidden
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
            md:block
          "
        >
          Get Started
        </Link>


        {/* ================= MOBILE BUTTON ================= */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-white/5
            text-xl
            text-white
            md:hidden
          "
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div
          className="
            border-t
            border-white/10
            bg-black/95
            px-6
            py-6
            md:hidden
          "
        >

          <div className="flex flex-col gap-5">

            {/* HOME */}

            <Link
              to="/"
              onClick={handleLinkClick}
              className="
                border-b
                border-white/10
                pb-4
                text-white/70
                transition
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
                border-b
                border-white/10
                pb-4
                text-white/70
                transition
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
                border-b
                border-white/10
                pb-4
                text-white/70
                transition
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
                border-b
                border-white/10
                pb-4
                text-white/70
                transition
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
                border-b
                border-white/10
                pb-4
                text-white/70
                transition
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
                border-b
                border-white/10
                pb-4
                text-white/70
                transition
                hover:text-pink-400
              "
            >
              Get Started
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;