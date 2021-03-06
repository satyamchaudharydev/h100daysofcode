import { useState } from "react";
import { useTask } from "../context/Task";
import { Reorder } from "framer-motion";
import Confetti from "react-dom-confetti";
import success from "../audio/success.mp3";
const config = {
  angle: "50",
  spread: "100",
  startVelocity: "37",
  elementCount: "25",
  dragFriction: "0.19",
  duration: "2500",
  stagger: "8",
  width: "7px",
  height: "7px",
  perspective: "500px",
  colors: ["rgba(85, 221, 255, 1)", "rgba(192, 88, 243, 1)", "#FFF"],
};

function Task({ task, tasks, handleArchive, archive }) {
  const { removeTask, toggleTask } = useTask();
  const [isConfetti, setIsConfetti] = useState(false);
  const audio = new Audio(success);

  const { id, content, done, editing } = task;
  const toggling = (e) => {
    console.log(tasks.findIndex((task) => task.id === id));
    let checkOneTaskIsCompleted =
      tasks.filter((task) => !task.done).length === 1;
    toggleTask(id);
    if ((!task.done || e.checked) && checkOneTaskIsCompleted) {
      audio.play();
      setIsConfetti(true);
    } else {
      setIsConfetti(false);
    }
  };
  return (
    <>
      <Confetti className="confetti" active={isConfetti} config={config} />

      <Reorder.Item
        className="task common-item "
        value={task}
        whileDrag={{
          scale: 1.1,
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        }}
      
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        onDoubleClick={() => toggling(id)}
      >
        <div className="flex a-center">
          <input
            style={{ pointerEvents: "none" }}
            // defaultChecked={done}
            checked={done}
            onChange={(e) => {
              toggling(e);
            }}
            // checked={done === true ? true : false}
            className="check-icon"
            type="checkbox"
            name={`task${id}`}
            id={`task${id}`}
          />
          <p className="task-content">{content}</p>
        </div>

        <button
          onClick={(event) => {
            event.stopPropagation();
            handleArchive(id);
            removeTask(id);
          }}
          type="button"
          role="remove-task"
          className="remove-task"
        >
          <svg>
            <path
              fill="#494C6B"
              fill-rule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </button>
      </Reorder.Item>
    </>
  );
}

export default Task;
