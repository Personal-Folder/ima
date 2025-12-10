"use client";

import NewsBox from "./NewsBox";
import Button from "../common/Button";
import { discover } from "../../../utils/public-imports";
import { useRouter } from "next/navigation";

interface NewsGridProps {
  newsData: {
    image: string;
    title: string;
    description: string;
  }[];
  showButton?: boolean;
}

const NewsGrid = ({ newsData, showButton = true }: NewsGridProps) => {
  const navigate = useRouter();

  const handleShowMore = () => {
    navigate.push("/news");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* News grid section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mt-6">
        {newsData
          .slice(0, showButton ? 3 : newsData.length) // Limit to 3 if showButton is true
          .map((data, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full"
            >
              <NewsBox
                image={data.image}
                title={data.title}
                description={data.description}
                isArabic={true}
              />
            </div>
          ))}
      </div>

      {/* Conditionally render the button */}
      {showButton && (
        <div className="mt-14 mb-14">
          <Button
            onClick={handleShowMore}
            text={"Discover More"}
            logo={discover}
          />
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
