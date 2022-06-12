import React from "react";


import Task from "./Task";
import { useTask } from "../context/Task";
import { Reorder, AnimatePresence } from "framer-motion";

function Tasks() {
  const { tasks, setTasks } = useTask();
 
  return (
    <Reorder.Group
      axis="y"
      as="ul"
      layoutScroll
      className="tasks"
      values={tasks}
      onReorder={setTasks}
    >
      <AnimatePresence initial="false">
        {tasks.map((task, index) => {
          console.log(task.id);
          return (
            <Task
              key={task.id}
              index={index}
              task={task}
              tasks={tasks}
            ></Task>
          );
        })}
      </AnimatePresence>
      
    </Reorder.Group>
  );
}

export default Tasks;
