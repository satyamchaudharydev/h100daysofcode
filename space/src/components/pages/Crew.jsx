import { useEffect } from "react";
import { motion } from "framer-motion";
// import douglas from "../../assets/crew/image-douglas-hurley.png";
import data from "../../data";
import { useState } from "react";
const { crew } = data;
function Crew({ setPage }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setPage("crew");
  }, []);
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        id="main"
        className="grid-container grid-container--crew"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet your crew
        </h1>
        <div className="dot-indicators flex">
          {crew.map((item, index) => (
            <button
              className={value === index && "dot-active"}
              onClick={() => setValue(index)}
            >
              <span className="sr-only">{item.role}</span>
            </button>
          ))}
        </div>

        <article className="crew-details flex">
          <h2 className="crew-role fs-600 ff-serif uppercase">
            {crew[value].name}
          </h2>
          <p className="crew-name fs-700 uppercase ff-serif">
            {crew[value].role}
          </p>
          <p className="paragraph">{crew[value].bio} </p>
        </article>

        <img
          className={`crew-${value}`}
          src={crew[value].images.png}
          alt="Douglas Hurley"
        />
      </motion.main>
    </>
  );
}

export default Crew;
