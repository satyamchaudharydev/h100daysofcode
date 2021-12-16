import { Outlet, Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="img-section">
          <img src="images/login.svg" alt="" />
        </div>
        <main className="login-section">
          <p className="already">
            Not a member?<Link to="/sign-up"><span> Sign up</span></Link>
          </p>
          <div className="login">
            <div className="title">
              <h1>Sign up to Shakushal</h1>
            </div>
            <div className="social-btns">
              <div className="google-btn">
                <img src="./images/google.svg" alt="" />
                <p>Sign in with google</p>
              </div>
              <div className="twitter-btn">
                <img src="./images/twitter.svg" alt="" />
                <p>Sign in with twitter</p>
              </div>
            </div>
            <p
              className="or-text"
              style={{ marginInline: "auto", opacity: "0.2" }}
            >
              or Sign in with Email
            </p>
            <form action="">
              <div>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Email Address" />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Password" />
              </div>
              <div className="sign-in-btn">Sign In</div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};
export default Login;
