import { useContext, createContext } from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
let initialTasks = [
  { id: 1, content: "Atomic habbit", done: true, editing: false },
  { id: 2, content: "Atomic habbit", done: true, editing: false },
];
const TaskContext = createContext();

export function useTask() {
  return useContext(TaskContext);
}
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (content) => {
    const newTask = { id: uuidv4(), content, done: false, editing: false };
    setTasks([newTask, ...tasks]);
  };

  const removeTask = (id) => {
    // tasks.sort((a, b) => {
    //   return a.done - b.done;
    // });
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    initialTasks = newTasks;
  };

  const toggleTask = (id) => {
    let updateTask = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updateTask);
  };

  const taskByComplete = () => {
    let taskComplete = tasks.filter((task) => task.done);
    return taskComplete;
  };

  const taskByIncomplete = () => {
    let taskComplete = tasks.filter((task) => !task.done);
    return taskComplete;
  };

  const taskBy = (filter) => {
    console.log(filter);
    if (filter === "all") {
      setTasks(tasks);
    } else if (filter === "completed") {
      setTasks(taskByComplete());
    } else if (filter === "active") {
      setTasks(taskByIncomplete());
    }
  };

  const value = {
    tasks,
    setTasks,
    addTask,
    removeTask,
    toggleTask,
    taskBy,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
