import "./App.css";
import React from "react";
import { HomePage } from "./Components/HomePage";
import { data } from "./data.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CountryPage } from "./Components/CountryPage";
function App() {
  const [countries, setCountries] = React.useState([]);
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div
      className="App"
      style={{ background: darkMode ? "#202C36" : "#fafafa" }}
    >
      <div className="app-wrapper">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  setCountries={setCountries}
                  darkMode={darkMode}
                  countries={countries}
                  setDarkMode={setDarkMode}
                ></HomePage>
              }
            ></Route>
            <Route
              path="/:country"
              element={
                <CountryPage
                  darkMode={darkMode}
                  countries={countries}
                  setDarkMode={setDarkMode}
                ></CountryPage>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
