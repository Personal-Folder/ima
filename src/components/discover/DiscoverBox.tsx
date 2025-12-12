"use client";

import DiscoverBoxProps from "../../../types/DiscoverType";
import Button from "../common/Button";
import SecondaryButton from "../common/SecondaryButton";

const DiscoverBox = ({
  data,
}: {
  data: {
    id: number;
    icon: string;
    value: string;
    title: string;
    colors: {
      border: string;
      iconBg: string;
      iconColor: string;
      numberColor: string;
    };
  };
}) => {
  return (
    <div key={data.id} className="group cursor-pointer">
      <div
        className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${data.colors.border}`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`${data.colors.iconBg} flex items-center justify-center size-16  p-4 rounded-xl shrink-0`}
          >
            <i className={`${data.icon}  text-2xl ${data.colors.iconColor}`} />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-600 truncate">
              {data.title}
            </p>
            <p className={`text-3xl font-bold ${data.colors.numberColor}`}>
              {data.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverBox;
