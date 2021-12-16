import Nav from "./Nav";
import images from "../data/image";
const BuyPage = (props) => {
  console.log(props);
  return (
    <>
      <Nav></Nav>
      <div className="main-buy-product-info-container">
        <div className="buy-img-container">
          <div className="buy-img-section">
            {images.map((item) => {
              return <img src={item} alt="" />;
            })}
          </div>
          <div className="buy-img-option">
            {images.map((item) => {
              return <img src={item} alt="" />;
            })}
          </div>
        </div>

        <div className="buy-product-info">
          <h1 className="title" style={{fontSize:"40px",marginTop:'10px'}}>
            1mg  Pure Natural Extract 500mg Capsule
          </h1>
          <p className="buy-desc">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="buy-price-section">
            <p>$123</p>
            <p>20%</p>
            <p>$233</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BuyPage;
