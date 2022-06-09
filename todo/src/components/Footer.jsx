import { React, useState } from "react";
import { useTask } from "../context/Task";

const tabs = ["all", "active", "completed"];

function Footer() {
  const [value, setValue] = useState(0);
  const { tasks, setStatus, filterCompleteTask } = useTask();
  return (
    <>
      <footer className="space-bw a-center items-left">
        <p className="items-left">{tasks.length} items left</p>
        <ul className="flex tabs">
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
        </ul>
        <button onClick={() => filterCompleteTask()} className="clear-btn">
          Clear Completed
        </button>
      </footer>
    </>
  );
}

export default Footer;
