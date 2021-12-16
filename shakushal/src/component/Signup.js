import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div className="login-container">
        <div className="img-section">
          <img src="images/login.svg" alt="" />
        </div>
        <main className="login-section">
          <p className="already">
            Alread a member?
            <Link to="/Login">
              <span> Sign in</span>
            </Link>
          </p>
          <div className="login">
            <div className="title">
              <h1>Sign up to Shakushal</h1>
            </div>
            <div className="social-btns">
              <div className="google-btn">
                <img src="./images/google.svg" alt="" />
                <p>Sign up with google</p>
              </div>
              <div className="twitter-btn">
                <img src="./images/twitter.svg" alt="" />
                <p>Sign up with twitter</p>
              </div>
            </div>
            <p
              className="or-text"
              style={{ marginInline: "auto", opacity: "0.2" }}
            >
              or Sign up with Email
            </p>
            <form action="">
              <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Name" required />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email Address" required />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Password" />
              </div>
              <div className="sign-in-btn">Sign up</div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};
export default Signup;
