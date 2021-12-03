import "./App.css";
import React, { useState, useEffect } from "react";
import Result from "./Result";
import { FaCouch, FaSearch } from "react-icons/fa";
import moon from "./assets/icon-moon.svg";
import sun from "./assets/icon-sun.svg";

function App() {
  const [data, setData] = useState([]);
  const [err,setErr] = useState(false)
  const [name, setName] = useState("octocat");
  const [toggle, setToggle] = useState(true);

  const root = document.querySelector(":root");
  if (toggle) {
    document.documentElement.style.setProperty("--body", "#f6f8ff");
    document.documentElement.style.setProperty("--primary-clr", "#fff");
    document.documentElement.style.setProperty("--color", "#111");
    document.documentElement.style.setProperty("--filter", "brightness(0)");
    document.documentElement.style.setProperty("--stat", "#F6F8FF");

  } else {
    document.documentElement.style.setProperty("--body", "#141D2F");
    document.documentElement.style.setProperty("--primary-clr", "#1E2A47");
    document.documentElement.style.setProperty("--color", "#fff");
    document.documentElement.style.setProperty("--filter", "brightness(50)");
    document.documentElement.style.setProperty("--stat", "#141D2F");

  }
  const fetchUrl = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${name}`);
      const github = await res.json();
      console.log(github);
      setData(github);
    } catch (error) {
      console.log(error)
      setErr(true)
    }
  };

  useEffect(() => {
    fetchUrl();
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="logo">devfinder</div>
          <div className="toggle" onClick={() => setToggle(!toggle)}>
            <p>{toggle ? "Dark" : "Light"}</p>
            {toggle ? <img src={moon} alt="" /> : <img src={sun} alt="" />}
          </div>
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          style={{ "box-shadow": !toggle && "none" }}
        >
          <FaSearch className="search" />
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {data.hasOwnProperty('message') && <p class="err">No Result Found</p>}

          <button type="submit">Search</button>
        </form>
        <div className="result" style={{ "box-shadow": !toggle && "none" }}>
          <Result {...data} />
        </div>
      </div>
    </>
  );
}

export default App;
