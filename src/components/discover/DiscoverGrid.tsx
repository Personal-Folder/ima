"use client";

import Button from "../common/Button";
import { useRouter } from "next/navigation";
import DiscoverBox from "./DiscoverBox";

const DiscoverGrid = ({
  insights,
  showButton = false,
}: {
  insights: {
    key: string;
    value: string;
    title: string;
    color: string;
    icon: string;
  }[];
  showButton?: boolean;
}) => {
  const navigate = useRouter();
  const handleShowMore = () => {
    navigate.push("statistics");
  };

  return (
    <div className=" bg-linear-to-b from-slate-50 via-white to-slate-50 py-20 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Discover What We Do
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our services and see how we help the community every day
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((data, index) => {
            return <DiscoverBox key={index} data={data} />;
          })}
        </div>

        {/* Button */}
        {showButton && (
          <div className="flex justify-center mt-16">
            <Button
              onClick={handleShowMore}
              text={"Show More"}
              logo="fa-solid fa-chart-line"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverGrid;
