"use client";

const MainGalleryGrid = ({ images }: { images: string[] }) => {
  return (
    <div className="p-4 w-full max-w-6xl mx-auto">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-lg bg-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainGalleryGrid;
