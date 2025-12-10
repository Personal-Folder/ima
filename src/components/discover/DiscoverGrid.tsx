"use client";

import { useState } from "react";
import { discoverData } from "../../../data/mockData";
import DiscoverBox from "./DiscoverBox";
import Button from "../common/Button";
import { discover } from "../../../utils/public-imports";

const DiscoverGrid = ({
  showButton = true,
  itemsToShow = 3,
}: {
  showButton?: boolean;
  itemsToShow?: number;
}) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-8">
        {discoverData
          .slice(
            0,
            itemsToShow === 0 || showMore ? discoverData.length : itemsToShow
          )
          .map((data, index) => (
            <DiscoverBox
              key={index}
              logo={data.logo}
              number={data.number}
              message={data.message}
            />
          ))}
      </div>
      {showButton && itemsToShow !== 0 && (
        <div className="mt-8">
          <Button
            onClick={handleShowMore}
            text={showMore ? "Discover Less" : "Discover More"}
            logo={discover}
          />
        </div>
      )}
    </div>
  );
};

export default DiscoverGrid;
