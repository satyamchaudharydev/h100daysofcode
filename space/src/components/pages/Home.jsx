import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Home({ setPage }) {
  useEffect(() => {
    setPage("home");
  }, []);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid-container grid-container--home"
      >
        <div className="home--info flow">
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to
            <span className="fs-900 ff-serif text-white d-block">Space</span>
          </h1>
          <p className="paragraph home-brief">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link to="/destination">
            <div className="explore uppercase large-button uppercase ff-serif">
              Explore
            </div>
          </Link>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
