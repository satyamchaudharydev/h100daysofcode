import "./css/App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { TaskProvider } from "./context/Task";
import Footer from "./components/Footer";
import { motion, LayoutGroup } from "framer-motion";
import Tabs from "./components/Tabs";
import ArchiveTasks from "./components/ArchiveTasks";
function App() {
  return (
    <TaskProvider>
      <ArchiveTasks></ArchiveTasks>
      <div className="flex j-center App">
        <img className="bg" src="/images/bg-desktop-dark.jpg" alt="mountain" />
        <div className="container flow">
          <Header></Header>
          <AddTask />

          <LayoutGroup>
            <motion.div layout className="task-container">
              <Tasks />
              <Footer></Footer>
            </motion.div>
            <Tabs mobile={true}></Tabs>
          </LayoutGroup>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
