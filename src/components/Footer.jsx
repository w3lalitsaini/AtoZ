import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand Info */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-2">AtoZ Movies</h2>
          <p className="text-sm text-gray-400">
            Discover movies, series, reviews & trailers. Your ultimate
            entertainment hub.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/category/movies" className="hover:text-white">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/category/web-series" className="hover:text-white">
                Web-series
              </Link>
            </li>
            <li>
              <Link to="/category/anime" className="hover:text-white">
                Anime
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/tags/Sci-Fi" className="hover:text-white">
                Sci-Fi
              </Link>
            </li>
            <li>
              <Link to="/tags/Action" className="hover:text-white">
                Action
              </Link>
            </li>
            <li>
              <Link to="/tags/Thriller" className="hover:text-white">
                Thriller
              </Link>
            </li>
            <li>
              <Link to="/tags/Drama" className="hover:text-white">
                Drama
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Join Our Newsletter
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Get the latest movies, reviews, and offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          {/* Copyright & Legal */}
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} AtoZ Movies. All rights reserved.
            <div className="mt-2 space-x-4">
              <Link to="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/copyright" className="hover:text-white">
                Copyright
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
