"use client";

import Button from "../common/Button";
import { useRouter } from "next/navigation";
import News from "@/types/News";
import NewsCard from "./NewsCard";

interface NewsGridProps {
  newsData: News[];
  showButton?: boolean;
}

const NewsGrid = ({ newsData, showButton = false }: NewsGridProps) => {
  const navigate = useRouter();

  const handleShowMore = () => {
    navigate.push("/news");
  };

  return (
    <div className="flex flex-col items-center justify-center  px-4 py-12 ">
      {/* News grid section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mt-6">
        {newsData
          .slice(0, showButton ? 3 : newsData.length) // Limit to 3 if showButton is true
          .map((data, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full"
            >
              <NewsCard news={data} />
            </div>
          ))}
      </div>

      {/* Conditionally render the button */}
      {showButton && (
        <div className="mt-14 mb-14">
          <Button
            onClick={handleShowMore}
            text={"Discover More"}
            logo="fa-solid fa-calendar"
          />
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
