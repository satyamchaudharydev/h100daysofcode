import { useState } from "react";
import { useTask } from "../context/Task";
function AddTask() {
  const [text, setText] = useState("");
  const { dispatch, ACTIONS, todos } = useTask();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(todos);
    dispatch({ type: ACTIONS.ADD_TASK, payload: { name: text } });
    setText("");
  };
  return (
    <form className="add-task__form common-item" onSubmit={onSubmit} action="">
      <button type="submit" className="submit-btn"></button>
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
