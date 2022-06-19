import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/index.css";
import "./css/App.css";
import Home from "./pages/Home";
import SlideShow from "./pages/SlideShow";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:name" element={<SlideShow></SlideShow>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
