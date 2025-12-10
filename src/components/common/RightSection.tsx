"use client";

import { useRouter } from "next/navigation";
import Button from "./Button"; // Adjust the path as needed

const RightSection = ({
  title,
  text,
  button,
  button_text = "Learn More", // Default value for button_text
  logo_url = "",
  rounded = true, // Default value for rounded is true
  shadow = false, // Default value for shadow is false
}: {
  title: string;
  text: string;
  button?: boolean;
  button_text?: string;
  logo_url?: string;
  rounded?: boolean; // Optional prop to control rounded corners
  shadow?: boolean; // Optional prop to control shadow
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
      <p className="text-base md:text-lg font-medium mt-6 mb-5 text-black">
        {text}
      </p>
      {button && (
        <Button
          onClick={() => navigate.push("/learn-more")}
          text={button_text}
          logo={logo_url}
          rounded={rounded}
          shadow={shadow}
        />
      )}
    </div>
  );
};

export default RightSection;
