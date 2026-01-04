import Button from "../common/Button";
import SecondaryButton from "../common/SecondaryButton";
import NavBar from "../layout/Navbar";

const Header = ({ setting }: { setting: any[] }) => {
  // Get values from settings
  const bannerImage = setting?.find((item) => item.key === "banner")?.value;
  const logoImage = setting?.find((item) => item.key === "logo")?.value;
  const titleText = setting?.find((item) => item.key === "title")?.value || "";

  // Split title into words
  const splitTitleWords = titleText.split(" ");
  const firstWord = splitTitleWords[0];
  const secondWord = splitTitleWords[1];
  const thirdWord = splitTitleWords[2];
  const hasLogo = !!logoImage;

  return (
    <div className="relative w-full min-h-[85vh]">
      {/* NavBar */}
      <div className="absolute top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-[90%] z-50">
        <NavBar logo={logoImage!} />
      </div>

      {/* Background Image */}
      {bannerImage && (
        <img
          src={bannerImage}
          className="absolute top-0 left-0 object-cover w-full h-full"
          alt="Header Background"
        />
      )}

      {/* Content */}
      <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 relative pt-[140px] md:pt-14">
        {/* Title with Logo */}
        {hasLogo ? (
          <div className="flex flex-col items-center sm:flex-row sm:items-center justify-center text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            <span className="sm:block sm:mr-2">{firstWord}</span>
            <img
              src={logoImage}
              alt="Logo"
              className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-contain mt-4 sm:mt-0"
            />
            {secondWord && (
              <span className="block sm:ml-2 mt-2 sm:mt-0">{secondWord}</span>
            )}
          </div>
        ) : (
          <h1 className="text-white text-4xl md:text-5xl mb-8 lg:text-6xl font-bold text-center">
            {titleText}
          </h1>
        )}

        {/* Third Word */}
        {hasLogo && thirdWord && (
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-5 text-center">
            {thirdWord}
          </h1>
        )}

        {/* Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-2 mt-3 justify-center">
          <SecondaryButton onClick={() => {}} text="Discover our Work" />
          <Button
            onClick={() => {}}
            text="Support Our Cause"
            logo="fa-solid fa-user-doctor"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
