import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import collection from "../data/collectionData";
import { useState } from "react";

const ProductCartbtn = ({ id, img, title, price, discount }) => {
  const [loading, setLoading] = useState(false);
  const [cartText, setCartText] = useState("Add to Cart");
  const [check, setCheck] = useState(false);
  const { userData, currentUser, cartDataFetch, cartData, productList,setCartChange } =
    useAuth();
  const currentUserInfo = currentUser.email;
  useEffect(() => {
    cartDataFetch();
    if (cartData.map((item) => item.id).includes(id)) {
      setCartText("Added to cart");
      setCheck(true);
    }
  }, []);

  async function handleClick(e) {
    e.preventDefault();
    try {
      await userData({ id, quantity: 1 });
      setCartChange('changed')
      setLoading(false);
      setCartText("Added to cart");
      setCheck(true);
    } catch (error) {
      setLoading(true);
      setCartText("Add to cart");
      setCheck(false);
      console.log(error);
    }
  }
  return (
    <>
      <div
        className={`cart-btn center product-cart-btn ${
          check && "pointer-none"
        }`}
        onClick={(e) => handleClick(e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          width="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <p style={{ fontSize: 14 }}>{cartText}</p>
      </div>
    </>
  );
};
export default ProductCartbtn;
