import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { ViewImageButton } from "../components/layout/ViewImagebutton";
import { ImageModal } from "../components/layout/ImageModal";
function SlideShow() {
  const [gallery, setGallery] = useState([]);
  const { name } = useParams();
  const [scrollPos, setScrollPos] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const fetchData = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();

    setGallery(data.filter((item) => item.name === name));
  };
  useEffect(() => {
    fetchData();
    // animating navbar on scroll
    let oldValue = 0;
    let newValue = 0;
    // function for updating checking scroll direction is negative or postive.
    const scrollUpdate = (e) => {
      newValue = window.pageYOffset;
      if (oldValue < newValue) {
        setScrollPos(false);
      } else if (oldValue > newValue) {
        setScrollPos(true);
      }
      oldValue = newValue;
    };
    // listener
    window.addEventListener("scroll", scrollUpdate);
  }, []);

  // Effect for closing image-modal when Esc-key pressed.
  useEffect(() => {
    const getEscKey = (e) => {
      if (e.key === "Escape") {
        setOpenModal(false);
      }
    };
    if (openModal) {
      console.log("this");

      window.addEventListener("keydown", getEscKey);
    }

    return window.addEventListener("keydown", getEscKey);
  }, [openModal]);
  return (
    <>
      {openModal && (
        <ImageModal
          img={gallery[0]?.images?.gallery}
          setOpenModal={setOpenModal}
        />
      )}

      <div className="single-gallery">
        <Navbar scrollPos={scrollPos}></Navbar>
        <main className="container">
          {gallery.map((item, index) => {
            const { name, artist, images, description, year } = item;
            return (
              <>
                <div key={index} className="container__info grid">
                  <div className="container__info__hero-img--wrapper">
                    <img
                      onClick={() => setOpenModal(true)}
                      className="container__info__hero-img"
                      src={images.gallery}
                      alt={name}
                    />
                    <ViewImageButton></ViewImageButton>
                  </div>

                  <div className="container__info__brief">
                    <div className="container__info__brief--container">
                      <h2 className="container__info__brief--name">{name}</h2>
                      <p className="container__info__brief--artist capitalize ">
                        {artist.name}
                      </p>
                    </div>

                    <img
                      className="container__info__brief--artist-image"
                      src={artist.image}
                      alt={artist.name}
                    />
                  </div>
                </div>{" "}
                <div className="container__body">
                  <p className="container__year">{year}</p>
                  <p className="container__content">{description}</p>
                  <a href="" className="source-link lt-spacing-1 uppercase">
                    <span>Go to source</span>
                  </a>
                </div>
              </>
            );
          })}
        </main>
        <div className="slideshow_handle flex sp-bw">
          <div className="progress"></div>
          <div className="slideshow__handle__info">
            <h2 className="slideshow__handle__info__name">{name}</h2>
            <p className="slideshow__handle__info__artist">
              {gallery[0]?.artist?.name}
            </p>
          </div>
          <div className="slideshow__handle__btns">
            <button className="slideshow__handle__btns__prev">
              <img src="/assets/shared/icon-back-button.svg" alt="" />
            </button>
            <button className="slideshow__handle__btns__next">
              <img src="/assets/shared/icon-next-button.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideShow;
