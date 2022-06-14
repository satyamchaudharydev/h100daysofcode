import { React } from "react";
import { useTask } from "../context/Task";
import { motion } from "framer-motion";
import Tabs from "./Tabs";
function Footer() {
  const { tasks, setStatus, filterCompleteTask } = useTask();
  return (
    <>
      <motion.footer layout="position" className="space-bw a-center items-left">
        <p className="items-left">{tasks.length} items left</p>
        <Tabs />
        <button onClick={() => filterCompleteTask()} className="clear-btn">
          Clear Completed
        </button>
      </motion.footer>
    </>
  );
}

export default Footer;
