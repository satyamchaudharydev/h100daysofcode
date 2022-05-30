import { useContext, createContext } from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

export function useTask() {
  return useContext(TaskContext);
}
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, content: "Atomic habbit", done: true, editing: false },
    { id: 2, content: "Atomic habbit", done: true, editing: false },
  ]);

  const addTask = (content) => {
    const newTask = { id: uuidv4(), content, done: false, editing: false };
    setTasks([newTask, ...tasks]);
  };

  const removeTask = (id) => {
    // tasks.sort((a, b) => {
    //   return a.done - b.done;
    // });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const value = {
    tasks,
    setTasks,
    addTask,
    removeTask,
    toggleTask,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
