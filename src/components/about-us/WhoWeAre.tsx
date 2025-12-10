"use client";

import { useRouter } from "next/navigation";

const WhoWeAre = ({
  img,
  title,
  text,
  button,
}: {
  img: string;
  title: string;
  text: string;
  button?: boolean;
}) => {
  const navigate = useRouter();
  return (
    <div className="flex w-full my-10 justify-center items-center ">
      {/* 2/3 width container */}
      <div className="flex flex-col md:flex-row w-11/12 max-w-full md:w-2/3 h-full">
        {/* Left section (text content) */}
        <div className="flex flex-col w-full md:w-1/2 h-full justify-center text-left">
          <p className="text-2xl md:text-3xl mb-4 lg:text-6xl font-bold text-black ">
            {title}
          </p>
          <p className="text-base md:text-lg font-medium mt-6 mb-4 text-black text-justify">
            {text}
          </p>
          {button && (
            <button
              onClick={() => navigate.push("/learn-more")}
              className="text-secondary font-medium text-base md:text-lg flex items-center gap-2 hover:cursor-pointer hover:underline"
            >
              <>
                {"Learn More"}
                <span className="text-lg font-bold ml-2">➔</span>
              </>
            </button>
          )}
        </div>
        <div className="relative w-[80%] md:w-1/2 mt-5 h-full flex justify-center items-center">
          <div
            className="absolute bg-[#FFF3F3] rounded-full"
            style={{
              width: "90%",
              paddingTop: "90%", // Maintain aspect ratio (circle)
              maxWidth: "500px",
              maxHeight: "500px",
              top: "50%",
              left: "20%",
              transform: "translateY(-50%)",
              zIndex: -1,
            }}
          ></div>
          {/* Image */}
          <img
            src={img}
            alt="Who We Are"
            className="relative object-cover rounded-md"
            style={{
              zIndex: 1,
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
