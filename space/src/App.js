import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/layouts/Nav";
import Home from "./components/pages/Home";
import Destination from "./components/pages/Destination";
import Technology from "./components/pages/Technology";
import Crew from "./components/pages/Crew";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  return (
    <Router>
      <div className={`app ${page}`}>
        <Nav page={page} />
        <Routes>
          <Route exact path="/" element={<Home setPage={setPage} />} />
          <Route
            path="/destination"
            element={<Destination setPage={setPage} />}
          />
          <Route path="/crew" element={<Crew setPage={setPage} />} />
          <Route
            path="/technology"
            element={<Technology setPage={setPage} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
