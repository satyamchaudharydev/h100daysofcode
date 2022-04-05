import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const planets = ["Moon", "Mars", "Europa", "Titan"];
function Destination({ setPage }) {
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    setPage("destination");
  }, []);
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid-container grid-container--destination"
      >
        <p className="numbered-title">
          <span>01</span> Pick your Destination
        </p>
        <img src="assets/destination/image-moon.png" alt="" srcset="" />
        <div className="destination-options">
          <div className="tab-list underline-indicators flex">
            {planets.map((planet, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={`tab-item uppercase ff-sans-cond text-accent letter-spacing-2 ${
                    index === value && "active"
                  }`}
                >
                  {planet}
                </button>
              );
            })}
          </div>
          <article class="destination-info">
            <h2 class="fs-800 uppercase ff-serif">Moon</h2>

            <p className="text-accent fs-400 ff-sans-normal paragraph">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>

            <div class="flex planet-stats">
              <div className="planet-stats-item">
                <h3 class="text-accent fs-200 uppercase letter-spacing-2  ff-sans-cond">
                  Avg. distance
                </h3>
                <p class="fs-500 ff-serif uppercase">384,400 km</p>
              </div>
              <div className="planet-stats-item">
                <h3 class="text-accent fs-200 uppercase letter-spacing-2 ff-sans-cond">
                  Est. travel time
                </h3>
                <p class="fs-500 ff-serif uppercase">3 days</p>
              </div>
            </div>
          </article>
        </div>
      </motion.main>
    </>
  );
}

export default Destination;
