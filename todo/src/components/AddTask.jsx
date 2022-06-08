import { useState } from "react";
import { useTask } from "../context/Task";

function AddTask() {
  const [text, setText] = useState("");
  const { addTask } = useTask();

  const doubleClick = (e) => {
    switch (e.detail) {
      case 2:
        console.log("double click");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTask(text);
    setText("");
  };
  return (
    <form className="add-task__form common-item" onSubmit={onSubmit} action="">
      <button
        onClick={doubleClick}
        type="submit"
        className="submit-btn"
      ></button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="add-task__form--input"
        type="text"
        placeholder="Create a new todo…"
      />
    </form>
  );
}

export default AddTask;
