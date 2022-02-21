// import { Link } from "react-router-dom";

const Productcard = ({id,deleteItem, img, title, price, discount }) => {
  return (
    <>
      
        <div className="product">
          <div className="img-container">
            {console.log(img.sort((a,b) => a - b))}
          <img className="product-img" src={img.sort()[0]} alt="" />
            <img onClick={() => {
                deleteItem(id)
                console.log("Clicked");
                }} style={{width:20,height:20,opacity:0.5}}src="./images/dlt.svg" alt="" srcset="" />
          </div>

          <h2 className="title">{title}</h2>
          <div className="price-section">
            <div className="price">
              <span class="ruppe">₹</span>
              {discount > 0 ? Math.round((price / 100) * discount):price}
            </div>
            <div className="discount">{discount}%</div>
            <div className="discount-price">₹{discount}</div>
          </div>
        </div>
     
    </>
  );
};
export default Productcard;
