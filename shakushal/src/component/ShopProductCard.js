import { Link } from "react-router-dom";
import Cartbtn from "./Cartbtn";
import { MiniBuyPage } from "./MiniBuyPage";
import ProductCartbtn from "./ProductCartbtn";
import Rating from "./Rating";
import { useAuth } from "../contexts/AuthContext";
const ShopProductcard = ({ id, img, title, price, discount, setItemId }) => {
  const { mini,setMini } = useAuth();

  return (
    <>
      <Link to={`${id}`}>
        <div
          className="product"
          onClick={() => {
            setItemId(id);
          }}
        >
          <div className="product-heading-info">
            <img
              className="product-img"
              style={{ objectFit: "cover" }}
              src={img}
              alt=""
            />
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgba(250, 76, 37, 0.94)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h2 className="title">
            {title.length > 50
              ? title.slice(0, 50) && title.slice(0, 50) + "..."
              : title}
          </h2>
          <Rating />
          <div className="product-footer">
            <div className="price-section">
              <div className="price">
                <span class="ruppe">₹</span>
                {Math.round((price / 100) * discount)}
              </div>
              {/* <div className="discount">{discount}%</div> */}
              <div className="discount-price">₹{price}</div>
            </div>
            <ProductCartbtn
              id={id}
              title={title}
              img={img}
              price={price}
              discount={discount}
            />
          </div>
        </div>
      </Link>
    </>
  );
};
export default ShopProductcard;
