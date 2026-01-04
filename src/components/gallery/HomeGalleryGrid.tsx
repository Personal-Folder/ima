"use client";

import React, { useState } from "react";
import Button from "../common/Button";
import { useRouter } from "next/navigation";

interface ImageProps {
  data: any[];
  remainingImages: number;
}

const HomeGalleryGrid: React.FC<ImageProps> = ({
  data,
  remainingImages,
}) => {
  const navigate = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full bg-linear-to-br from-slate-50 to-slate-100 px-4 py-8">
      {/* Gallery Container */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-4 pb-8">
          {/* Main grid row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-max">
            {/* Main Image - Left Column */}
            <div className="md:col-span-2 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-video md:aspect-square">
                <img
                  src={data[0].images[0]}
                  alt="Main Gallery Image"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Column - Stacked Images */}
            <div className="flex flex-col gap-4">
              {/* Top Right Image */}
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex-1">
                <div className="aspect-square">
                  <img
                    src={data[0].images[0]}
                    alt="Gallery Image 2"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              </div>

              {/* Bottom Right Image with Overlay */}
              <div
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative group cursor-pointer flex-1"
                onClick={() => navigate.push("/closer-look")}
              >
                <div className="aspect-square">
                  <img
                    src={data[0].images[0]}
                    alt="Gallery Image 3"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <span className="text-white text-3xl sm:text-4xl font-bold block mb-2">
                      {remainingImages}+
                    </span>
                    <p className="text-white text-xs sm:text-sm font-medium opacity-90 mb-3">
                      More Photos
                    </p>
                    <button
                      className="px-5 py-2 bg-white text-slate-900 text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate.push("/closer-look");
                      }}
                    >
                      See All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-4">
          <Button
            onClick={() => {
              navigate.push("/closer-look");
            }}
            text="Take a closer look"
            logo={
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 7 15.5 7 14 7.67 14 8.5s.67 1.5 1.5 1.5z" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HomeGalleryGrid;
