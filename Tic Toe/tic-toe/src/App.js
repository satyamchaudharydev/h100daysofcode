import "./App.css";
import { useState, useEffect } from "react";
import { Square } from "./Square";
import { GamePage } from "./GamePage";
import { Menu } from "./Menu";
import { Provider } from "./StateContext";
import { WinnerShower } from "./WinnerShower";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Provider>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}

export default App;
