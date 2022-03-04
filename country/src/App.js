import "./App.css";
import React from 'react'
import { HomePage } from "./Components/HomePage";
import { data } from "./data.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CountryPage } from "./Components/CountryPage";
function App() {
  const [countries, setCountries] = React.useState([]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setCountries={setCountries}
        
                countries={countries}
              ></HomePage>
            }
          ></Route>
          <Route
            path="/:country"
            element={<CountryPage countries={countries}></CountryPage>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
