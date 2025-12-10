"use client";

import NewsBoxProps from "../../../types/NewsTypes";
import Button from "../common/Button";
import SecondaryButton from "../common/SecondaryButton";

const NewsBox = ({
  image,
  title,
  description,
  headline = "",
  footHeadline = "",
  isArabic,
  dashboard = false,
  onEdit,
  onDelete,
}: NewsBoxProps) => {
  const displayHeadline = headline || title;
  const displayFootHeadline = footHeadline || title;

  return (
    <div className="w-full max-w-[340px] bg-white shadow-lg flex flex-col justify-between relative rounded-lg overflow-hidden">
      {/* Image section */}
      <div className="w-full h-[300px] bg-gray-300 flex items-center justify-center relative">
        {image ? (
          <img
            src={image}
            alt="News"
            className="w-full h-full object-cover rounded-t-lg"
          />
        ) : (
          <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white font-bold">
            No Image
          </div>
        )}

        <div className="absolute w-[90%] h-[90%] bg-transparent border-2 rounded-3xl border-white flex flex-col justify-between">
          <div className="absolute top-1 -left-1 rounded-lg px-8 bg-red-600 text-white font-bold py-1 text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis">
            {displayHeadline}
          </div>

          <div className="absolute top-0 right-6 bg-white p-2 rounded-full rounded-t-none shadow-md">
            <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
          </div>

          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 rounded-full bg-white text-red-950 px-12 py-2 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis">
            {displayFootHeadline}
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="w-full h-[340px] px-4 py-4 flex flex-col justify-between">
        <div
          className={`text-lg font-bold text-black ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {title}
        </div>
        <div
          className={`text-sm text-gray-500 ${
            isArabic ? "text-right" : "text-left"
          }`}
        >
          {description}
        </div>

        {/* Only show Learn More button if dashboard prop is false */}
        {!dashboard && (
          <button
            onClick={() => (window.location.href = "/learn-more")}
            className="text-secondary font-bold text-base md:text-lg flex items-center gap-2"
          >
            {isArabic ? (
              <>
                <span className="text-lg font-bold rotate-180 mr-2">➔</span>
                {"المزيد"}
              </>
            ) : (
              <>
                {"Learn More"}
                <span className="text-lg font-bold ml-2">➔</span>
              </>
            )}
          </button>
        )}

        {dashboard && (
          <div className="flex gap-2 mt-2 flex-wrap justify-end">
            <Button
              onClick={onEdit || (() => {})}
              text="Edit"
              rounded={true}
              shadow={true}
            />
            <SecondaryButton
              onClick={onDelete || (() => {})}
              text="Delete"
              red={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsBox;
