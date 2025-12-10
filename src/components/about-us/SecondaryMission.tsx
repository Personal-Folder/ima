"use client";

import LeftSection from "../common/LeftSection";
import RightSection from "../common/RightSection";
interface SecMissionProps {
  enableButton?: boolean;
  leftImg: string; // Image for the Left component
  leftLogo: string; // Logo for the Left component
  rightTitle: string; // Title for the Right component
  rightText: string; // Text for the Right component
  rightButtonText: string; // Button text for the Right component
  rightLogoUrl: string; // Logo for the Right button
}

const SecondaryMission = ({
  enableButton = true,
  leftImg,
  leftLogo,
  rightTitle,
  rightText,
  rightButtonText,
  rightLogoUrl,
}: SecMissionProps) => {
  return (
    <div className="flex w-full my-8 justify-center items-center mb-16 md:mb-4">
      {/* 2/3 width container */}
      <div className="flex w-11/12 max-w-full md:w-2/3 gap-8 flex-col md:flex-row">
        {/* Left Section */}

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <RightSection
            title={rightTitle}
            text={rightText}
            button={enableButton} // Dynamically enable/disable the button
            button_text={rightButtonText}
            logo_url={rightLogoUrl}
            rounded={false}
            shadow={true}
          />
        </div>
        <div className="w-full mr-6 md:w-1/2">
          <LeftSection img={leftImg} logo={leftLogo} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryMission;
