import "./css/App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { TaskProvider } from "./context/Task";

function App() {
  return (
    <TaskProvider>
      <div className="f-center App">
        <img className="bg" src="/images/bg-desktop-dark.jpg" alt="mountain" />
        <div className="container flow">
          <Header></Header>
          <AddTask />
          <Tasks />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
