import ImageGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ images, onOpen }) {
  return (
    <ul className="ImageGallery">
      {images.map(img => (
        <ImageGalleryItem key={img.id} img={img} onOpen={onOpen} />
      ))}
    </ul>
  );
}
