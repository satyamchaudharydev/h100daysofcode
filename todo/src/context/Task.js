import { useContext, createContext, useCallback } from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

let initialTasks = [];

const TaskContext = createContext();

export function useTask() {
  return useContext(TaskContext);
}
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("tasks", initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(initialTasks);
  const [status, setStatus] = useState("all");
  const [archive, setArchive] = useState([]);

  useEffect(() => {
    taskBy();
  }, [tasks, status]);
  const addTask = (content) => {
    const newTask = {
      id: uuidv4(),
      content,
      done: false,
      editing: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const handleArchive = (id) => {
    const oldIndex = tasks.findIndex((task) => task.id === id);
    const findTask = tasks.find((task) => task.id === id);
    const newTasks = { ...findTask, oldIndex: oldIndex };
    console.log(newTasks);
    setArchive([...archive, newTasks]);
  };
  const removeTask = (id) => {
    handleArchive(id);
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  const toggleTask = (id) => {
    let updateTask = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updateTask);
  };
  const filterCompleteTask = () => {
    return tasks.filter((task) => !task.done);
  };
  const taskBy = () => {
    if (status === "all") {
      setFilteredTasks(tasks);
    } else if (status === "completed") {
      setFilteredTasks(tasks.filter((task) => task.done));
    } else if (status === "active") {
      setFilteredTasks(tasks.filter((task) => !task.done));
    }
  };

  const updateArchive = useCallback(() => {
    const lastArchivedTask = archive.pop();
    const tempArray = [...tasks];
    tempArray.splice(lastArchivedTask.oldIndex, 0, lastArchivedTask);
    const updateTask = tempArray.map((item) => {
      item.oldIndex && delete item.oldIndex;
      return item;
    });
    setTasks(updateTask);
  }, [archive, tasks]);
  const value = {
    tasks: filteredTasks,
    setTasks,
    addTask,
    filterCompleteTask,
    removeTask,
    toggleTask,
    taskBy,
    archive,
    updateArchive,
    handleArchive,
    setStatus,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
