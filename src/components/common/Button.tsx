"use client";

import React from "react";

// Define the shape of the props
interface ButtonProps {
  onClick: () => void;
  text: string;
  // logo can be a React node (like an SVG or icon component) or a string (for an image path)
  logo?: React.ReactNode | string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, logo }) => {
  return (
    <button
      onClick={onClick}
      className={`  cursor-pointer  flex items-center justify-center gap-2
    font-bold focus:outline-none focus:ring-2 transition duration-300
    px-5 py-2 max-h-[45px] w-fit
    sm:text-xs md:text-sm lg:text-[13px] xl:text-lg bg-secondary text-white rounded-[10px] shadow-lg
    hover:bg-primary-light 
    focus:ring-primary`}
    >
      {logo && <i className={`${logo} w-5 h-5 object-contain`} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
