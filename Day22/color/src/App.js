import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [text, setText] = useState("#f15025");
  const [weight, setWeight] = useState(10);
  const [currentColor, setCurrentColor] = useState("#f15025");
  const [list, setList] = useState(new Values("#f15025").all(weight));
  const [err, setErr] = useState(false);
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setList(new Values(text).all(weight));
      setErr(false);
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={err ? "error" : "null"}
            type="text"
            name="color"
            id="color"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="input-container">
            %
            <input
              type="number"
              min="1"
              max="90"
              name=""
              placeholder="10"
              id=""
              className="input-num"
              onKeyPress={(event) => {
                setWeight(parseInt(event.target.value));
                if (event.key === "Enter") {
                  setList(new Values(text).all(weight));
                }
              }}
            />
          </div>

          <input
            type="color"
            name=""
            id=""
            value={currentColor}
            className="input-color"
            onChange={(e) => {
              setCurrentColor(e.target.value);
              setList(new Values(e.target.value).all(weight));
            }}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((list, index) => {
          return (
            <SingleColor
              {...list}
              index={index}
              hex={list.hex}
              setColor={setColor}
              color={color}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
