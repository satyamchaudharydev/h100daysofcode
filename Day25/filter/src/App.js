import "./App.css";
import data from "./data.json";
import Result from "./Result";
import FilterSearch from "./filterSearch";
import { useState, useEffect } from "react";

function App() {
  const [filterData, setfilterData] = useState([]);
  const [resultData, setresultData] = useState(data);

  const fun = () => {
    return data.filter(
      (item) =>
        filterData.filter(
          (i) =>
            ![item.role, item.level, ...item.languages, ...item.tools].includes(
              i
            )
        ).length === 0
    );
  }
  useEffect(() => {
    if (filterData.length > 0) {
      setresultData(fun());
    } else {
      setresultData(data);
    }
  }, [filterData]);
  const sortData = (filterData) => {
    const arr = [];
    return resultData.filter(
      (item) =>
        [item.role, item.level, ...item.languages, ...item.tools].includes ===
        filterData[0]
    );
  };
  sortData(filterData);
  const sortResult = (add) => {
    if (filterData.includes(add)) return;
    return setfilterData([...filterData, add]);
  };
  return (
    <div className="container">
      <header></header>
      <div className="result-section">
        <FilterSearch
          filterData={filterData}
          setfilterData={setfilterData}
          sortResult={sortResult}
        />
        {resultData.map((item) => {
          return (
            <Result
              {...item}
              key={item.id}
              setfilterData={setfilterData}
              sortResult={sortResult}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
