import MainGalleryGrid from "@/components/gallery/MainGalleryGrid";

async function Gallery() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/gallery`
  );
  const data = await response.json();
  return (
    <div>
      <MainGalleryGrid items={data ?? []} />
    </div>
  );
}

export default Gallery;
