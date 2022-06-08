import React from "react";
import Task from "./Task";
import { useTask } from "../context/Task";
import { Reorder } from "framer-motion";

function Tasks() {
  const { todos, setTasks } = useTask();
  return (
    <Reorder.Group
      axis="y"
      as="ol"
      layoutScroll
      className="tasks"
      values={todos}
      onReorder={setTasks}
    >
      {todos.map((task) => {
        console.log(task.id);
        return <Task key={task.id} task={task}></Task>;
      })}
    </Reorder.Group>
  );
}

export default Tasks;
