import React from "react";
import { useTask } from "../context/Task";
import { Reorder } from "framer-motion";
import success from "../audio/success.mp3";

function Task({ task, tasks }) {
  const { removeTask, toggleTask } = useTask();
  const audio = new Audio(success);

  const { id, content, done, editing } = task;
  const toggling = (e) => {
    let checkOneTaskIsCompleted =
      tasks.filter((task) => !task.done).length === 1;
    toggleTask(id);
    if ((!task.done || e.checked) && checkOneTaskIsCompleted) {
      audio.play();
    }
  };
  return (
    <Reorder.Item
      className="task common-item a-center"
      value={task}
      whileDrag={{
        scale: 1.1,
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
      initial={{ opacity: 1, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: "-100%", opacity: 0.5 }}
      transition={{ duration: 0.2 }}
      onDoubleClick={() => toggling(id)}
    >
      <input
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
      <label htmlFor={`task${id}`}>
        <p className="task-content">{content}</p>
        <button
          onClick={(event) => {
            event.stopPropagation();
            removeTask(id);
          }}
          type="button"
          role="remove-task"
          className="remove-task"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path
              fill="#494C6B"
              fill-rule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </button>
      </label>
    </Reorder.Item>
  );
}

export default Task;
