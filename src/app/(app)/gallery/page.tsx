import MainGalleryGrid from "@/components/gallery/MainGalleryGrid";
import { getBaseUrl } from "@/lib/utils";

async function Gallery() {
  const response = await fetch(
    `${getBaseUrl()}/api/gallery`
  );
  const data = await response.json();
  return (
    <div>
      <MainGalleryGrid items={data ?? []} />
    </div>
  );
}

export default Gallery;
