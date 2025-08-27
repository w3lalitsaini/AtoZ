import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="text-center px-6">
        <h1 className="text-9xl font-extrabold text-green-500 tracking-widest">
          404
        </h1>
        <div className="bg-green-500 text-black px-3 py-1 text-sm rounded rotate-12 inline-block">
          Page Not Found
        </div>

        <p className="mt-6 text-lg text-gray-300">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block bg-green-500 text-black px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-green-400 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
