import React from "react";
import Rating from "./Rating";
import Tag from "./Tag";
export const Shopfilter = ({ list,category, productList, setList }) => {
const [tagstate, setTagState] = React.useState(0);

  return (
    <div className="filter-sidenav">
      <div className="filter-heading">
        <p className="filter-title title">FILTERS</p>
        <p className="filter-reset">RESET</p>
      </div>
      <div className="filter-items">
        <h4>Category</h4>
        {category.map((item, index) => {
          return (
            <Tag
              text={item}
              list={list}
              index={index}
              productList={productList}
              setFilterProduct={setList}
              tagstate={tagstate}
              setTagState={setTagState}
            />
          );
        })}
      </div>

      <div className="price-range">
        <h4>Price Range</h4>
        <div className="price-range-input">
          <div className="min-circ">
            <div className="circ-line"></div>
            <div className="circ-line"></div>
          </div>
          <div className="input-line"></div>
          <div className="max-circ">
            <div className="circ-line"></div>
            <div className="circ-line"></div>
          </div>
        </div>
        <div className="minmax-container">
          <div className="min-input">
            <label htmlFor="">Min Price</label>
            <input type="num" value="$123" />
          </div>
          <div className="max-input">
            <label htmlFor="">Max Price</label>
            <input type="num" value="$223" />
          </div>
        </div>
      </div>
      <div className="rating-section">
        <h4>Ratings</h4>
        <Rating></Rating>
      </div>
    </div>
  );
};
