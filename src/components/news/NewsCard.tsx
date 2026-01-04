"use client";

import React, { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Tag, X } from "lucide-react";
import News from "@/types/News";

const NewsCard = ({ news }: { news: News }) => {
  const {
    id,
    title,
    text,
    images,
    tag,
    created_at,
    insta_link,
    facebook_link,
  } = news;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Parse images if it's a string, otherwise use as array
  const imageList = typeof images === "string" ? JSON.parse(images) : images;

  const totalImages = imageList.length;

  // Format date
  const formatDate = (dateString: string) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options as any);
  };

  // Get first 150 characters of description
  const truncateDescription = (textArray: string[]) => {
    const fullText = Array.isArray(textArray) ? textArray.join(" ") : textArray;
    return fullText.length > 150
      ? fullText.substring(0, 150) + "..."
      : fullText;
  };

  // Handle carousel navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const fullText = Array.isArray(text) ? text.join("\n\n") : text;

  return (
    <>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Image Carousel */}
        <div className="relative h-48 overflow-hidden bg-gray-200 group">
          <img
            src={imageList[currentImageIndex]}
            alt={`${title} - ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300"
          />

          {/* Navigation Buttons */}
          {totalImages > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <ChevronRight size={20} />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {imageList.map((_, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? "bg-secondary w-6"
                        : "bg-secondary/50 hover:bg-secondary/75"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-3">
            <Tag size={14} className="text-red-600" />
            <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {truncateDescription(text)}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Calendar size={16} />
              <span>{formatDate(created_at)}</span>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded transition-colors duration-200"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image Carousel in Modal */}
              <div className="relative h-80 overflow-hidden bg-gray-200 rounded-lg mb-6 group">
                <img
                  src={imageList[currentImageIndex]}
                  alt={`${title} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {totalImages > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {imageList.map((_, index: number) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentImageIndex
                              ? "bg-secondary w-6"
                              : "bg-secondary/50 hover:bg-secondary/75"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Tag size={16} className="text-red-600" />
                  <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Calendar size={16} />
                  <span>{formatDate(created_at)}</span>
                </div>
              </div>

              {/* Full Text Content */}
              <div className="prose prose-sm max-w-none mb-6">
                {fullText.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Social Media Links */}
              {(insta_link || facebook_link) && (
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <span className="text-gray-700 font-semibold">
                    Follow us:
                  </span>
                  {facebook_link && (
                    <a
                      href={facebook_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200 flex items-center justify-center object-center gap-2"
                    >
                      <i className="fa-brands fa-facebook-f  text-lg aspect-square" />
                    </a>
                  )}
                  {insta_link && (
                    <a
                      href={insta_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors duration-200 flex items-center gap-2"
                    >
                      <i className="fa-brands fa-instagram text-lg aspect-square" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsCard;
