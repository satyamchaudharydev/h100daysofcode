import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";




const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="logo">
          <img src="./images/logo.svg" alt="" srcset="" />
        </div>
        <div className="main-footer">
          <div className="address-section">
            <div className="adress">
              <h3>Address</h3>
              <p>Store & Office</p>
              <p>
                Jl. Setrasari Kulon III, No. 10-12, Sukarasa, Sukasari, Bandung,
                Jawa Barat, Indonesia 40152
              </p>
              <div className="address-time">
                <h3>Office Hour</h3>
                <p>Monday - Sunday</p>
                <p>10.00 - 18.00</p>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <h3>Get in touch</h3>
            <div className="phone flex contact-item">
              <p className="phone-text">Phone</p>
              <div className="phone-no">022-20277564</div>
            </div>

            <div className="service flex contact-item">
              <p className="phone-text">Service Center</p>
              <div className="phone-no">022-20277564</div>
            </div>

            <div className="phone flex contact-item">
              <p className="phone-text">Customary Service</p>
              <div className="phone-no">022-20277564</div>
            </div>
            <div className="social-icons">
              <BsFacebook />
              <AiFillTwitterCircle />
            </div>
          </div>

          <div className="links-section">
            <h3>Useful Links</h3>
            <p>Warranty & Complaints</p>
            <p>Order & Shipping</p>
            <p>Tracking Order</p>
            <p>About Us</p>
            <p>Repair</p>
            <p>Terms</p>
            <p>FAQ</p>
          </div>

          <div className="stay-section">
            <h3>Stay in touch</h3>
            <form action="">
              <input type="text" placeholder="Your Email" />
              <div className="input-btn "><p className='line'>Subscribe</p> </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer