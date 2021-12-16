import { Link } from "react-router-dom";
const rateTotal = [1, 2, 3, 4, 5];
const Productcard = ({ img, title, price, discount }) => {
  return (
    <>
    <Link to="/buy">
      <div className="product">
        <img className="product-img" src={img} alt="" />
        <h2 className="title">{title}</h2>
        <div className="rating">
          {rateTotal.map((item) => (
            <img className="rating-none" src="./images/rate.svg" alt="" />
          ))}
        </div>
        <div className="price-section">
          <div className="price">
            <span class="ruppe">₹</span>
            {Math.round((price / 100) * discount)}
          </div>
          <div className="discount">{discount}%</div>
          <div className="discount-price">₹{price}</div>
        </div>
      </div>
      </Link>
    </>
  );
};
export default Productcard;
