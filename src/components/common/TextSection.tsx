"use client";

import { useRouter } from "next/navigation";
import Button from "./Button"; // Adjust the path as needed

const TextSection = ({
  title,
  text,
  button_text, // Default value for button_text
  button_logo,
  button_path,
}: {
  title: string;
  text: string;
  button?: boolean;
  button_text?: string;
  button_logo?: string;
  button_path?: string;
}) => {
  const navigate = useRouter();

  return (
    <div className="relative flex flex-col h-full justify-center text-left w-full">
      <div
        className="absolute w-32 h-32 rounded-full bg-[#FFF3F3] -z-10"
        style={{
          top: "30%",
          left: "40%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute w-32 h-32 rounded-full bg-[#FFF3F3] -z-10"
        style={{
          top: "60%",
          left: "70%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <p className="text-2xl md:text-3xl lg:text-6xl font-semibold text-black mb-4">
        {title}
      </p>
      <p className="text-base md:text-lg font-medium mt-6 mb-5 text-black text-justify">
        {text}
      </p>
      {button_text && button_path && (
        <Button
          onClick={() => navigate.push(button_path!)}
          text={button_text}
          logo={button_logo}
        />
      )}
    </div>
  );
};

export default TextSection;
