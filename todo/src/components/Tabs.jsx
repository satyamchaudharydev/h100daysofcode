import {React,useState} from "react";
import { useTask } from "../context/Task";
import { motion } from "framer-motion";
const tabs = ["all", "active", "completed"];

function Tabs({mobile}) {
  const [value, setValue] = useState(0);

  const { setStatus } = useTask();
  return (
    <motion.ul layout="position" className={`flex tabs ${mobile && "m-tabs"} j-center`}>
      {tabs.map((item, index) => (
        <li
          key={index}
          className={`tab ${value === index && "active"}`}
          onClick={() => {
            setStatus(item);
            setValue(index);
          }}
        >
          {item}
        </li>
      ))}
    </motion.ul>
  );
}

export default Tabs;
