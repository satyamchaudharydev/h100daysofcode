import Buyorder from "./Buyorder";
import Nav from "./Nav"
import { useAuth } from "../contexts/AuthContext";
const CartPage = () => {
    return (
      <>
        <Nav></Nav>
        <div className="cart-page-container">
          <h1 className="title" style={{ paddingInline: 30, fontSize: 25 }}>
            Shopping Cart
          </h1>
          <div className="cart-page">
            <div className="cart-page-form-container">
              <div className="cart-user-info-container">
                <img
                  style={{ width: 25, height: 25 }}
                  src="./images/image-avatar.png"
                  alt=""
                />

                <p className="cart-user-name">
                  Satyam <span style={{ marginInline: 10 }}>+917701826187</span>
                  <span
                    style={{
                      display: "block",
                      marginTop: 10,
                      fontWeight: "normal",
                      fontSize: "14px",
                    }}
                  >
                    New Delhi,dharbhanga ext. daring
                  </span>
                </p>
                <p className="cart-change-btn">Change</p>
              </div>
              <form action="">
                <div className="form-name">
                  <label htmlFor="">First Name *</label>
                  <input type="text" placeholder="Satyam" />
                </div>
                <div className="form-last-name">
                  <label htmlFor="">Last Name *</label>
                  <input type="text" placeholder="Chaudhary" />
                </div>
                <div className="form-address">
                  <label htmlFor="">Address *</label>
                  <input type="text" placeholder="Address" />
                </div>
                <div className="form-address">
                  <label htmlFor="">Address *</label>
                  <input type="text" placeholder="Galino-4 h.no5" />
                </div>
                <div className="form-city">
                  <label htmlFor="">City *</label>
                  <input type="text" placeholder="Delhi" />
                </div>
                <div className="form-country">
                  <label htmlFor="">Country *</label>
                  <input type="text" placeholder="India" />
                </div>
                <div className="form-postleCode">
                  <label htmlFor="">Postle Code *</label>
                  <input type="text" placeholder="121003" />
                </div>
                <div className="address-type">
                  <div className="address-type-home">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Home(all day delivery)</label>
                  </div>
                  <div className="address-type-office">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Office(9:00 - 9:230)</label>
                  </div>
                </div>
                <div className="delievery-btn">
                  <p>Delievery here</p>
                </div>
              </form>
            </div>
            <div className="your-order-container">
              <h2 className="title" style={{ margin: 0 }}>
                Your Order
              </h2>
              <div className="your-order-product-info">
                <img
                  className="yo-product-img"
                  src="./images/product.png"
                  alt=""
                />
                <div className="yo-order-text">
                  <p style={{ fontWeight: "bold" }}>
                    Carbamide Forte Probiotics 2.75 Billion....{" "}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                      color: "rgb(152 160 161)",
                      gap: "10px",
                    }}
                  >
                    Price :{" "}
                    <span style={{ color: "black", fontSize: "20px" }}>
                      $125
                    </span>
                  </p>
                  <Buyorder />
                </div>
              </div>
              <div className="your-order-price-container">
                <div className="dcharges flex">
                  <p>Delievery Charges</p>
                  <p>123</p>
                </div>
                <div className="yo-discount flex">
                  <p>Discount</p>
                  <p>123</p>
                </div>
              </div>
              <div className="yo-total flex">
                <p>Total</p>
                <p>$ 1250</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default CartPage