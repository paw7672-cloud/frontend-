import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Memories",
      path: "/memories",
    },
    {
      name: "Moments",
      path: "/moments",
    },
    {
      name: "Birthday",
      path: "/birthday",
    },
    
     
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
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

        {/* =========================
            LOGO
        ========================= */}

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


        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (

            <NavLink
              key={link.name}
              to={link.path}
              onClick={handleLinkClick}

              className={({ isActive }) =>
                `
                relative
                text-sm
                font-medium
                transition
                duration-300

                ${
                  isActive
                    ? "text-pink-400"
                    : "text-white/70 hover:text-pink-400"
                }

                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[2px]
                after:bg-pink-400
                after:transition-all
                after:duration-300

                ${
                  isActive
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
                `
              }
            >
              {link.name}
            </NavLink>

          ))}

        </div>


        {/* =========================
            GET STARTED
        ========================= */}

        <Link
          to="/contact"
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


        {/* =========================
            MOBILE BUTTON
        ========================= */}

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


      {/* =========================
          MOBILE MENU
      ========================= */}

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

            {navLinks.map((link) => (

              <NavLink
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}

                className={({ isActive }) =>
                  `
                  border-b
                  border-white/10
                  pb-4
                  transition
                  duration-300

                  ${
                    isActive
                      ? "text-pink-400"
                      : "text-white/70 hover:text-pink-400"
                  }
                  `
                }
              >
                {link.name}
              </NavLink>

            ))}

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;