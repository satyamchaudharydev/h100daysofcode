import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import data from "../../data";
const planets = ["Moon", "Mars", "Europa", "Titan"];
function Destination({ setPage }) {
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    setPage("destination");
  }, []);
  console.log();
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
        <img src={`${data.destinations[value].images.png}`} alt="" srcset="" />
        <div className="destination-options flow">
          <div className="tab-list underline-indicators flex">
            {planets.map((planet, index) => {
              return (
                <div
                  className="tab-item-container"
                  style={{ position: "relative", border: 0, cursor: "pointer" }}
                >
                  <button
                    key={index}
                    onFocus={() => setValue(index)}
                    onClick={() => setValue(index)}
                    className={`tab-item uppercase ff-sans-cond text-accent letter-spacing-2 ${
                      index === value && "active"
                    }`}
                  >
                    {planet}
                  </button>
                  {value == index ? (
                    <motion.div
                      transition={{
                        layout: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      }}
                      className="underline"
                      layoutId="underline"
                    ></motion.div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <article class="destination-info">
            <h2 class="fs-800 uppercase ff-serif">
              {`${data.destinations[value].name}`}
            </h2>

            <p className="planet-text text-accent fs-400 ff-sans-normal paragraph">
              {`${data.destinations[value].description}`}
            </p>

            <div class="flex planet-stats">
              <div className="planet-stats-item">
                <h3 class="text-accent fs-200 uppercase letter-spacing-2  ff-sans-cond">
                  Avg. distance
                </h3>
                <p class="fs-500 ff-serif uppercase">
                  {" "}
                  {`${data.destinations[value].distance}`}
                </p>
              </div>
              <div className="planet-stats-item">
                <h3 class="text-accent fs-200 uppercase letter-spacing-2 ff-sans-cond">
                  Est. travel time
                </h3>
                <p class="fs-500 ff-serif uppercase">
                  {" "}
                  {`${data.destinations[value].travel}`}
                </p>
              </div>
            </div>
          </article>
        </div>
      </motion.main>
    </>
  );
}

export default Destination;
