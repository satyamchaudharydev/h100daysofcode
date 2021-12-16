import React from "react";

const Info = ({ counter, setCounter }) => {

  return (
    <>
      <div className="info">
       
        <div className="company">SNEAKER COMPANY</div>
        <div className="title">Fall Limited Edition</div>
        <div className="desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </div>
        <div className="pricing">
          <div className="price">$1250</div>
          <div className="discount-percentage">50%</div>
          <div className="discount-price">$250.00</div>
        </div>
        <div className="order-section">
          <div className="order-num">
            <p className="orange" onClick={() => setCounter((prev) => {
                if(prev == 0) return 0
                else{
                    return prev - 1
                }
            })}>
              <img src="./images/icon-minus.svg" alt="" />
            </p>
            <p>{counter}</p>
            <p className="orange" onClick={() => setCounter((prev) => {
                return prev + 1
            })}>
              <img src="./images/icon-plus.svg" alt="" />
            </p>
          </div>
          <div className="buying-cart">
            <img src="./images/icon-cart.svg" alt="" />
            <p>Add to cart</p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Info