import './App.css';
import React, { useState,useEffect } from 'react';
import Result  from './Result';
import { FaSearch } from "react-icons/fa";


function App() {
  const [data,setData] = useState([])
  const [name,setName] = useState('octocat')

  const fetchUrl = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${name}`);
      const github = await res.json();
      console.log(github)
      setData(github);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrl()
  }, [name])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }
  
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="logo">devfinder</div>
          <div className="toggle">Dark</div>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <FaSearch className='search' />
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
        <div className="result">
        <Result {...data}/>
        </div>
      </div>
    </>
  );
}

export default App;
