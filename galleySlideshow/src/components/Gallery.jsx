import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const fetchData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    setGallery(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ul className="gallery__container">
      {gallery.map((item, index) => {
        return (
          <li key={index} className={`gallery__item v${index}`}>
            <Link to={`/${item.name}`}>
              <img
                className="gallery__item__img"
                src={item.images.thumbnail}
                alt={item.name}
              />
              <figcaption className="gallery__info">
                <h2 className="gallery__info__name">{item.name}</h2>
                <p className="gallery__info__artist">{item.artist.name}</p>
              </figcaption>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
