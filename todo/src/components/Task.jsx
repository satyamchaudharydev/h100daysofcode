import React from "react";
import { useTask } from "../context/Task";
import { Reorder } from "framer-motion";

function Task({task}) {
  const { removeTask, toggleTask } = useTask();
  const { id, content, done, editing } = task;
  const toggling = (e) => {
    console.log("clicking");
    toggleTask(id);
  };
  return (
    <Reorder.Item
      className="task common-item a-center"
      key={id}
      value={task}
      onClick={() => toggling()}
    >
      <input
        // defaultChecked={done}
        checked={done}
        onChange={(e) => {}}
        // checked={done === true ? true : false}
        className="check-icon"
        type="checkbox"
        name={`task${id}`}
        id={`task${id}`}
      />
      <label htmlFor={`tas${id}`}>
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
