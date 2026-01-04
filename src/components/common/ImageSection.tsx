import CircleLogoHolder from "./CircleLogoHolder";

const ImageSection = ({
  image,
  logo,
  reverse,
}: {
  image: string;
  logo?: string;
  reverse?: boolean;
}) => {
  return (
    <div className="relative flex items-center mt-20 md:mt-0 justify-center lg::min-w-screen">
      <div className="relative w-[70vw] sm:w-[80vw] md:w-full h-auto max-w-full">
        <img
          src={image}
          alt="Left Section Image"
          className="relative object-cover rounded-md overflow-clip z-10 w-full h-auto"
        />
        {logo && (
          <div
            className={`absolute top-4 ${
              reverse
                ? "left-4 sm:left-6 md:left-8"
                : "right-4 sm:right-6 md:right-8"
            } flex items-center justify-center z-30`}
          >
            <div className="absolute size-[120px] md:size-[100px] bg-[#FFF3F3] rounded-full -z-10"></div>
            <div className="size-full z-20">
              <CircleLogoHolder logo={logo} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSection;
