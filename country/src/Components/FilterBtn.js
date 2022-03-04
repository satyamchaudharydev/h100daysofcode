import React from 'react'

export const FilterBtn = ({ index,item, FilterCountry }) => {
  return (
    <div className="dropdown-item" key={index} onClick={() => FilterCountry(item)}>
      <p>{item}</p>
    </div>
  );
};
