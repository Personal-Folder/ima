"use client";

import ImageSection from "../common/ImageSection";
import TextSection from "../common/TextSection";

interface SectionProps {
  image: string; // Image for the Left component
  logo?: string; // Logo for the Left component
  title: string; // Title for the Right component
  text: string; // Text for the Right component
  button_text: string; // Button text for the Right component
  button_logo: string; // Logo for the Right button
  button_path: string; // Path for the Right button
}

const Section = ({
  image,
  logo,
  title,
  text,
  button_text,
  button_logo,
  button_path,
}: SectionProps) => {
  return (
    <div className="flex w-full my-8 justify-center items-center mb-16 md:mb-4">
      {/* 2/3 width container */}
      <div className="flex w-11/12 max-w-full md:w-2/3 gap-8 flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full mr-6 md:w-1/2">
          <ImageSection image={image} logo={logo} />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <TextSection
            title={title}
            text={text}
            button_text={button_text}
            button_logo={button_logo}
            button_path={button_path}
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
