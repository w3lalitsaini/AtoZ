import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { IoIosGlobe } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { CiFaceSmile } from "react-icons/ci";
import { TbRating18Plus } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-slate-900 flex flex-col gap-1 pt-2 ">
      <div className="flex items-center justify-between px-16">
        <NavLink to={"/"} className="text-2xl font-semibold">
          a2z <span className="font-bold text-green-500">Movies</span>
        </NavLink>

        <div className="flex items-center justify-between gap-1 px-2 py-1 rounded-md bg-slate-700">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="What are you looking for ?"
            className="w-72 outline-0 p-1 placeholder:text-white"
          />
          <FaSearch />
        </div>
      </div>

      <div>
        <nav className="bg-slate-800 py-2">
          <ul className="flex items-center justify-center gap-10">
            <li className="hover:bg-slate-700 rounded-md group">
              <NavLink
                to={"/"}
                end
                className="flex items-center gap-2 px-6 py-2 text-lg group-hover:text-green-500"
              >
                <FaHome className="text-xl" />
                Home
              </NavLink>
            </li>
            <li className="hover:bg-slate-700 rounded-md group">
              <NavLink
                to={"/category/movies"}
                className="flex items-center gap-2 px-6 py-2 text-lg group-hover:text-green-500"
              >
                <BiMoviePlay className="text-xl" />
                Movies
              </NavLink>
            </li>
            <li className="hover:bg-slate-700 rounded-md group">
              <NavLink
                to={"/category/web-series"}
                className="flex items-center gap-2 px-6 py-2 text-lg group-hover:text-green-500"
              >
                <IoIosGlobe className="text-xl" />
                Web Series
              </NavLink>
            </li>
            <li className="hover:bg-slate-700 rounded-md group">
              <NavLink
                to={"/category/genre"}
                className="flex items-center gap-2 px-6 py-2 text-lg group-hover:text-green-500"
              >
                <FaLink className="text-xl" />
                Genre
              </NavLink>
            </li>
            <li className="hover:bg-slate-700 rounded-md group">
              <NavLink
                to={"/category/anime"}
                className="flex items-center gap-2 px-6 py-2 text-lg group-hover:text-green-500"
              >
                <CiFaceSmile className="text-xl" />
                Anime
              </NavLink>
            </li>
            <li className="hover:bg-slate-700 rounded-md group">
              <NavLink
                to={"/category/18+"}
                className="flex items-center gap-2 px-6 py-2 text-lg group-hover:text-green-500"
              >
                <TbRating18Plus className="text-xl" />
                18+
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
