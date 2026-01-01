
import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import "./index.css";

const API_KEY = "54001817-ff49d30804f6f91865246b807";
const PER_PAGE = 12;

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    )
      .then(r => r.json())
      .then(data => {
        const imgs = data.hits.map(({ id, webformatURL, largeImageURL }) => ({
          id, webformatURL, largeImageURL
        }));
        setImages(prev => [...prev, ...imgs]);
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  const onSearch = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSearch} />
      <ImageGallery images={images} onOpen={setModalImg} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <Button onClick={() => setPage(p => p + 1)} />
      )}
      {modalImg && <Modal img={modalImg} onClose={() => setModalImg(null)} />}
    </div>
  );
}
