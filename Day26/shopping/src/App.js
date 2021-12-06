import "./App.css";
import Nav from "./Nav";
import ImgSection from "./ImgSection";
import Info from "./info";
import { useState, useEffect } from "react";
import images from "./Image";
function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(1);
  const [show, setShow] = useState(true);

  const [main, setMain] = useState(false);

  useEffect(() => {
    const lastSlide = images.length - 1;
    console.log(value);
    if (value < 0) {
      console.log("true");
      setValue(lastSlide);
    }
    if (value > lastSlide) {
      setValue(0);
    }
  }, [value]);
  return (
    <>
      {!show && (
        <div className={`main-slider`}>
          <div className="prev-btn" onClick={() => setValue(value - 1)}>
            <img src="./images/icon-previous.svg" alt="" />
          </div>
          <div className="img-section">
            <div
              className="close-btn"
              onClick={() => {
                setMain(false);
                setShow(true);
              }}
            >
              <img src="./images/icon-close.svg" alt="" />
            </div>
            <div className="img-views">
              {images.map((item, index) => {
                let position = "nextSlide";
                if (value === index) {
                  position = "activeSlide";
                }
                if (
                  index === value - 1 ||
                  (value === 0 && index === images.length - 1)
                ) {
                  position = "lastSlide";
                }
                return (
                  <div className={`img-view ${position}`}>
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </div>
            <div className="img-options">
              {images.map((item, index) => (
                <ImgSection
                  item={item}
                  value={value}
                  setValue={setValue}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="next-btn" onClick={() => setValue(value + 1)}>
            <img src="./images/icon-next.svg" alt="" />
          </div>
        </div>
      )}

      <div className="container">
        <Nav counter={counter} />
        <div className="main">
          <div className="overlay">
            <div className="prev-btn" onClick={() => setValue(value - 1)}>
              <img src="./images/icon-previous.svg" alt="" />
            </div>
            <div className="img-section">
              <div className="img-views">
                {images.map((item, index) => {
                  let position = "nextSlide";
                  if (value === index) {
                    position = "activeSlide";
                  }
                  if (
                    index === value - 1 ||
                    (value === 0 && index === images.length - 1)
                  ) {
                    position = "lastSlide";
                  }
                  return (
                    <div className={`img-view ${!main && position}`}>
                      <img
                        src={item}
                        alt=""
                        onClick={() => {
                          setMain(true);
                          setShow(false);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="img-options">
                {images.map((item, index) => (
                  <ImgSection
                    main={main}
                    item={item}
                    value={value}
                    setValue={setValue}
                    index={index}
                  />
                ))}
              </div>
            </div>
            <div className="next-btn" onClick={() => setValue(value + 1)}>
              <img src="./images/icon-next.svg" alt="" />
            </div>
          </div>
          <Info counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </>
  );
}

export default App;
