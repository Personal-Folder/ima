"use client";

import { discoverData } from "../../../data/mockData";

import Button from "../common/Button";
import { useRouter } from "next/navigation";
import DiscoverBox from "./DiscoverBox";

const DiscoverGrid = ({
  showButton = true,
  itemsToShow = 3,
}: {
  showButton?: boolean;
  itemsToShow?: number;
}) => {
  const navigate = useRouter();
  const handleShowMore = () => {
    navigate.push("statistics");
  };

  const getCardColor = (index: number) => {
    const colors = [
      {
        border: "border-red-600 hover:border-red-700",
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
        numberColor: "text-red-600",
      },
      {
        border: "border-blue-600 hover:border-blue-700",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        numberColor: "text-blue-600",
      },
      {
        border: "border-red-600 hover:border-red-700",
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
        numberColor: "text-red-600",
      },
    ];
    return colors[index % colors.length];
  };

  const getIcon = (index: number) => {
    const icons = [
      <path
        key="0"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 9a1 1 0 112 0 1 1 0 01-2 0z"
      />,
      <path
        key="1"
        d="M10 2a4 4 0 100 8 4 4 0 000-8zM2.5 16c0-2.21 3.13-4 7.5-4s7.5 1.79 7.5 4"
      />,
      <path
        key="2"
        d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5"
      />,
      <path key="3" d="M13 10V3L4 14h7v7l9-11h-7z" />,
      <path
        key="4"
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      />,
      <path key="5" d="M9 12l2 2 4-4m7-4a9 9 0 11-18 0 9 9 0 0118 0z" />,
    ];
    return icons[index % icons.length];
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
          {discoverData.map((data, index) => {
            return <DiscoverBox key={index} data={data} />;
          })}
        </div>

        {/* Button */}
        {showButton && itemsToShow !== 0 && (
          <div className="flex justify-center mt-16">
            <Button
              onClick={handleShowMore}
              text={"Show More"}
              logo="/discover.svg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverGrid;
