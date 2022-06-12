import React from "react";
import Task from "./Task";
import { useTask } from "../context/Task";
import { Reorder, AnimatePresence } from "framer-motion";

function Tasks() {
  const { tasks, setTasks } = useTask();
  return (
    <Reorder.Group
      axis="y"
      as="ol"
      layoutScroll
      className="tasks"
      values={tasks}
      onReorder={setTasks}
    >
      <AnimatePresence initial="false">
        {tasks.map((task) => {
          console.log(task.id);
          return <Task key={task.id} task={task} tasks={tasks}></Task>;
        })}
      </AnimatePresence>
    </Reorder.Group>
  );
}

export default Tasks;
