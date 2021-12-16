import { AiOutlineArrowRight } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";

const Shopbtn = ({title}) => {
  return (
    <>
      <Link to="/shop" style={{textDecoration:"none"}}>
        <div className="shop-btn center" style={{ maxHeight: "48px" }}>
          <p>{title}</p>
          <AiOutlineArrowRight />
        </div>
      </Link>
    </>
  );
};
export default Shopbtn;
