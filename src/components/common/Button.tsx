"use client";

import React from "react";

// Define the shape of the props
interface ButtonProps {
  onClick: () => void;
  text: string;
  // logo can be a React node (like an SVG or icon component) or a string (for an image path)
  logo?: React.ReactNode | string;
  rounded?: boolean;
  shadow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  logo,
  rounded = true, // Default value for rounded is true
  shadow = false, // Default value for shadow is false
}) => {
  // Logo rendering logic
  const renderLogo = () => {
    if (!logo) return null;

    if (typeof logo === "string") {
      // If logo is a string (image path), render an img tag
      return (
        <img src={logo} alt="Button Icon" className="w-5 h-5 object-contain" />
      );
    }

    // If logo is a ReactNode (e.g., an icon component)
    return logo;
  };

  return (
    <button
      onClick={onClick}
      className={`  cursor-pointer  flex items-center justify-center gap-2
    font-bold focus:outline-none focus:ring-2 transition duration-300
    px-5 py-2 max-h-[45px]
    sm:text-xs md:text-sm lg:text-[13px] xl:text-lg bg-secondary text-white 
    ${rounded ? "rounded-[10px]" : "rounded-none"} 
    ${shadow ? "shadow-lg" : ""} 
    hover:bg-primary-light 
    focus:ring-primary`}
    >
      {renderLogo()}
      <span>{text}</span>
    </button>
  );
};

export default Button;
