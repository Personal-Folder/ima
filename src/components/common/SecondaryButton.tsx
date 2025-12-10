"use client";

import React from "react";

// Define the shape of the props
interface SecondaryButtonProps {
  onClick: () => void;
  text: string;
  // Using string for logo as it's only used for <img> in the original component
  logo?: string;
  red?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  onClick,
  text,
  logo,
  red = false, // Default value for red is false
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2
    border-4 rounded-[10px] bg-transparent
    font-bold focus:outline-none focus:ring-2 transition duration-300
    px-5 py-2 max-h-[45px]
     sm:text-xs md:text-sm lg:text-[13px] xl:text-lg box-border ${
       red
         ? // Red/Primary style: secondary text, secondary border, light red hover
           "text-secondary border-secondary hover:bg-red-100 focus:ring-primary"
         : // Default style: white text, white border, primary light hover
           "text-white border-[#FFFFFF] hover:bg-primary-light focus:ring-primary"
     }`}
    >
      {logo && (
        <img src={logo} alt="Button Icon" className="w-5 h-5 object-contain" />
      )}
      <span>{text}</span>
    </button>
  );
};

export default SecondaryButton;
