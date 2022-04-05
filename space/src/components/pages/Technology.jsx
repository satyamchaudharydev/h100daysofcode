import { useEffect, useState, useRef } from "react";
// import launch from "../../assets/technology/image-launch-vehicle-landscape.jpg";

import data from "../../data";
import { motion } from "framer-motion";
const { technology } = data;
function Technology({ setPage }) {
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(0);
  const tabRef = useRef(null);
  useEffect(() => {
    setPage("technology");
    setWidth(tabRef.current.offsetWidth);
  }, []);
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="main"
      className="grid-container grid-container--tech"
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space Launch 101
      </h1>
      <div className="tech-content">
        <div className="tech-numbers">
          {technology.map((item, index) => (
            <div
              ref={tabRef}
              key={index}
              className={`tech-number flex fs-600 fs-serif ${
                value === index && "active"
              }`}
              onClick={() => setValue(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <article className="tech-info">
          <p className="uppercase ff-sans-cond letter-spacing-2 text-accent">
            The Termonlogy...
          </p>
          <h2 class="fs-700 uppercase ff-serif">{technology[value].name}</h2>
          <p className="paragraph">{technology[value].description}</p>
        </article>
      </div>

      <img
        className="portrait-img"
        src={technology[value].images.portrait}
        alt="Douglas Hurley"
      />
      <img
        className="landscape-img"
        src={technology[value].images.landscape}
        alt="Douglas Hurley"
      />
    </motion.main>
  );
}

export default Technology;
