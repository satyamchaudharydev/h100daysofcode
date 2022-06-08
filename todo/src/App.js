import "./css/App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { TaskProvider } from "./context/Task";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <TaskProvider>
      <div className="flex j-center App">
        <img className="bg" src="/images/bg-desktop-dark.jpg" alt="mountain" />
        <div className="container flow">
          <Header></Header>
          <AddTask />
          <motion.div className="task-container">
            <Tasks />
            <Footer></Footer>
          </motion.div>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
