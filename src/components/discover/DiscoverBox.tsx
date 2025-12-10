"use client";

import DiscoverBoxProps from "../../../types/DiscoverType";
import Button from "../common/Button";
import SecondaryButton from "../common/SecondaryButton";

const DiscoverBox = ({
  logo,
  number,
  message,
  dashboard = false,
  onEdit,
  onDelete,
}: DiscoverBoxProps) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden rounded-lg flex flex-col items-center justify-between p-4">
      {/* Logo Section */}
      <div className="w-[100px] h-[100px] bg-[#FFF3F3] rounded-full flex items-center justify-center">
        {logo ? (
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 object-contain rounded-full"
          />
        ) : (
          <div className="w-[90px] h-[90px] bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-xl">
            No Logo
          </div>
        )}
      </div>
      <div className="mt-2 text-black text-[76px] font-semibold pb-0 rounded-full">
        {number}
      </div>
      <div className="mt-1 text-center text-[24px] text-black mb-14 pt-0">
        {message}
      </div>
      {dashboard && (
        <div className="flex gap-1 mt-4 flex-wrap justify-end space-x-2 px-2 pb-2">
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
  );
};

export default DiscoverBox;
