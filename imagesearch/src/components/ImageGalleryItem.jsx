export default function ImageGalleryItem({ img, onOpen }) {
  return (
    <li className="ImageGalleryItem" onClick={() => onOpen(img.largeImageURL)}>
      <img
        className="ImageGalleryItem-image"
        src={img.webformatURL}
        alt=""
      />
    </li>
  );
}
