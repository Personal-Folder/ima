import MainGalleryGrid from "@/components/gallery/MainGalleryGrid";
import Header from "@/components/home/Header";

const images = [
  "values.png",
  "home_last.png",
  "image1.png",
  "image3.png",
  "image2.png",
  "aboutUs2.png",
  "image1.png",
  "image3.png",
  "image2.png",
  "aboutUs2.png",
];

function Gallery() {
  return (
    <div>
      <Header
        img="/backimage.svg"
        title="Islamic Medical Association"
        description="Tel: 07 735 734"
        logo="/logo.svg"
      />
      <MainGalleryGrid images={images} />
    </div>
  );
}

export default Gallery;
