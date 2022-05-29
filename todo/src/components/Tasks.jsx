import React from "react";
import Task from "./Task";
import { useTask } from "../context/Task";
import { Reorder } from "framer-motion";

function Tasks() {
  const { tasks, setTasks } = useTask();
  return (
    <Reorder.Group className="tasks" values={tasks} onReorder={setTasks}>
      {tasks.map((task, index) => {
        return <Task key={task.id} task={task}></Task>;
      })}
    </Reorder.Group>
  );
}

export default Tasks;
