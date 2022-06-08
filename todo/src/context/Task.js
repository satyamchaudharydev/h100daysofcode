import { useContext, createContext } from "react";
import { useReducer } from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const TaskContext = createContext();

let initialTasks = [
  { id: 1, content: "Atomic habbit", done: true, editing: false },
  { id: 2, content: "Atomic habbit", done: true, editing: false },
];

export const ACTIONS = {
  ADD_TASK: "add-task",
  REMOVE_TASK: "remove-task",
  TOGGLE_TASK: "toggle-task",
  TASK_BY_COMPLETED: "task-by-completed",
  TASK_BY_INCOMPLETED: "task-by-incompleted",
};
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.ADD_TASK:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TASK:
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    case ACTIONS.REMOVE_TASK:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.TASK_BY_COMPLETED:
      // console.log(action.payload);
      return todos.filter((todo) => todo.done);
    case ACTIONS.TASK_BY_INCOMPLETED:
      return todos.filter((todo) => !todo.done);
  }
}
function newTodo(name) {
  return { id: uuidv4(), content: name, done: false, editing: false };
}
export function useTask() {
  return useContext(TaskContext);
}
export function TaskProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, initialTasks);

  // const [tasks, setTasks] = useState(initialTasks);

  // const addTask = (content) => {
  //   const newTask = { id: uuidv4(), content, done: false, editing: false };
  //   setTasks([newTask, ...tasks]);
  // };

  // const removeTask = (id) => {
  //   // tasks.sort((a, b) => {
  //   //   return a.done - b.done;
  //   // });
  //   let newTasks = tasks.filter((task) => task.id !== id);
  //   setTasks(newTasks);
  //   initialTasks = newTasks;
  // };

  // const toggleTask = (id) => {
  //   let updateTask = tasks.map((task) =>
  //     task.id === id ? { ...task, done: !task.done } : task
  //   );
  //   setTasks(updateTask);
  //   initialTasks = updateTask;
  // };

  // const taskByComplete = () => {
  //   let taskComplete = initialTasks.filter((task) => task.done);
  //   return taskComplete;
  // };

  // const taskByIncomplete = () => {
  //   let taskComplete = initialTasks.filter((task) => !task.done);
  //   return taskComplete;
  // };

  // const taskBy = (filter) => {
  //   console.log(filter);
  //   if (filter === "all") {
  //     setTasks(initialTasks);
  //   } else if (filter === "completed") {
  //     setTasks(taskByComplete());
  //   } else if (filter === "active") {
  //     setTasks(taskByIncomplete());
  //   }
  // };

  const value = {
    todos,
    ACTIONS,
    dispatch,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
