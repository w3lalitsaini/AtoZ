import React from "react";

const Button = ({ title, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2 rounded-md z-50 cursor-pointer bg-green-600 hover:bg-green-500 text-white font-medium transition duration-200 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
