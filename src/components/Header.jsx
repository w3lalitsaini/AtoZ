import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaHome, FaSearch } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { IoIosGlobe } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { CiFaceSmile } from "react-icons/ci";
import { TbRating18Plus } from "react-icons/tb";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/category/movies", label: "Movies", icon: <BiMoviePlay /> },
    { to: "/category/web-series", label: "Web Series", icon: <IoIosGlobe /> },
    { to: "/category/genre", label: "Genre", icon: <FaLink /> },
    { to: "/category/anime", label: "Anime", icon: <CiFaceSmile /> },
    { to: "/category/18+", label: "18+", icon: <TbRating18Plus /> },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900 shadow-lg">
      <div className="flex items-center justify-between px-4 md:px-16 py-3">
        <NavLink to="/" className="text-2xl font-bold text-white">
          a2z <span className="text-green-500">Movies</span>
        </NavLink>

        <div className="hidden md:block w-80">
          <SearchBar placeholder="What are you looking for?" />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block bg-slate-800">
        <ul className="flex items-center justify-center gap-10 py-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="flex items-center gap-2 text-white text-xl px-4 py-2 rounded hover:bg-slate-700 hover:text-green-500 transition"
              >
                {item.icon}
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 px-4 pb-4">
          <div className="md:hidden mb-4">
            <SearchBar placeholder="Search..." />
          </div>

          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="flex items-center gap-2 text-white px-4 py-2 rounded hover:bg-slate-700 hover:text-green-500 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
