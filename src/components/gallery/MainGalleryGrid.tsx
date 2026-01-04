"use client";

import React, { useState } from "react";

interface GalleryItem {
  title: string;
  description: string;
  images: string[];
}

const MainGalleryGrid = ({ items }: { items: GalleryItem[] }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(item)}
            className="group relative cursor-pointer rounded-3xl overflow-hidden bg-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative aspect-4/5 overflow-hidden">
              <img
                src={item.images[0]}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="text-white font-semibold text-lg leading-tight">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm mt-1 line-clamp-2">
                {item.description}
              </p>

              <span className="inline-block mt-4 text-sm font-medium text-white bg-white/20 backdrop-blur px-4 py-1.5 rounded-full">
                View project →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Gallery */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black text-white"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            onClick={() => setSelectedItem(null)}
          >
            ✕
          </button>

          {/* Info */}
          <div className="absolute top-6 left-6 z-40 max-w-md">
            <h2 className="text-3xl font-bold">{selectedItem.title}</h2>
            <p className="text-white/70 mt-2">{selectedItem.description}</p>
          </div>

          {/* Horizontal Scroll Gallery */}
          <div
            className="flex h-full overflow-x-auto snap-x snap-mandatory"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.images.map((img, idx) => (
              <div
                key={idx}
                className="min-w-full h-full snap-center flex items-center justify-center p-10"
              >
                <img
                  src={img}
                  alt={`${selectedItem.title} ${idx + 1}`}
                  className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainGalleryGrid;
