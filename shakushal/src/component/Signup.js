import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const [registerPasswordConfirmation, setRegisterPasswordConfirmation] =
    useState("");
  const [registerEmail, setregisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const { signup, currentUser, signInGoogle, signInTwitter, userData } =
    useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  async function handleGoogle() {
    try {
      await signInGoogle();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  async function handleTwitter() {
    try {
      await signInTwitter();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  async function handleSubmit() {
    if (registerPassword !== registerPasswordConfirmation) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(registerEmail, registerPassword);
      userData();

      navigate("/");
    } catch (err) {
      if (err.message === "Firebase: Error (auth/email-already-in-use).") {
        setLoading(false);
        return setError("Email already in use");
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
              <div className="google-btn" onClick={handleGoogle}>
                <img src="./images/google.svg" alt="" />
                <p>Sign up with google</p>
              </div>
              <div className="twitter-btn" onClick={handleTwitter}>
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
              {error && <div className="err center">{error}</div>}

              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setregisterEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="">Password Confirmation</label>
                <input
                  type="password"
                  value={registerPasswordConfirmation}
                  onChange={(e) =>
                    setRegisterPasswordConfirmation(e.target.value)
                  }
                  placeholder="Password"
                />
              </div>
              <div
                onClick={() => {
                  console.log(registerPassword, registerEmail);
                  return handleSubmit();
                }}
                className={`sign-in-btn ${loading && "loading"}`}
              >
                Sign up <span className="loader"></span>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};
export default Signup;
