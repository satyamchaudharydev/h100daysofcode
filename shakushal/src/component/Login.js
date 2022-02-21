import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Mounted } from "../Mounted";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const mounted = Mounted()
  async function handleSubmit() {
 
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      mounted.current && navigate("/");
    } catch (err) {
      if (err.message === "Firebase: Error (auth/wrong-password).") {
        setLoading(false);
        return setError("Wrong password");
      }
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="login-container">
        <div className="img-section">
          <img src="images/login.svg" alt="" />
        </div>
        <main className="login-section">
          <p className="already">
            Not a member?
            <Link to="/Sign-up">
              <span> Sign up</span>
            </Link>
          </p>
          <div className="login">
            <div className="title">
              <h1>Sign in to Shakushal</h1>
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
              {error && <div className="err center">{error}</div>}

              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <Link
                to="/reset"
                style={{ fontSize: 14, color: "green", marginLeft: "auto" }}
              >
                Forget your password ?
              </Link>
              <div aria-disabled={loading}
                onClick={() => {
                  return handleSubmit();
                }}
                className={`sign-in-btn ${loading && "loading"}`}
              >
                Sign in <span className="loader"></span>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};
export default Login;
