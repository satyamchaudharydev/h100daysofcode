import { React, useState } from "react";
import { useTask } from "../context/Task";

const tabs = ["all", "active", "completed"];

function Footer() {
  const [value, setValue] = useState(0);
  const { dispatch, ACTIONS,todos } = useTask();
  const taskBy = (item) => {
    if (item === "active") {
      dispatch({ type: ACTIONS.TASK_BY_COMPLETED, payload: { taskby: item } });
    } else if(item === "completed") {
      dispatch({ type: ACTIONS.TASK_BY_COMPLETED, payload: { taskby: item } });
    }
    else{
      
    }
  };
  return (
    <>
      <footer className="space-bw a-center items-left">
        <p className="items-left">3 items left</p>
        <ul className="flex tabs">
          {tabs.map((item, index) => (
            <li
              key={index}
              className={`tab ${value === index && "active"}`}
              onClick={() => {
                taskBy(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="clear-btn">Clear Completed</button>
      </footer>
    </>
  );
}

export default Footer;
