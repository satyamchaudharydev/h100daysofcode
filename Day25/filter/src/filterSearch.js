import React from "react";

const filterSearch = ({ filterData, setfilterData }) => {
  return (
    <>
      <div className={filterData.length > 0 ? "filter-search" : "remove"}>
        <div className="tag-container">
          {filterData.map((filter) => {
            return (
              <div className="filter-item">
                <p className="filter-text">{filter}</p>
                <div
                  className="filter-btn"
                  onClick={() =>
                    setfilterData(filterData.filter((item) => item !== filter))
                  }
                >
                  X
                </div>
              </div>
            );
          })}
        </div>
        <p className="clear-btn" onClick={() => setfilterData([])}>
          Clear
        </p>
      </div>
    </>
  );
};
export default filterSearch;
