import { Link} from "react-router-dom";
import { React, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Reset = () => {
  const [email, setEmail] = useState("");
  const { reset } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleReset() {
      console.log(email)
    try {
      setError("");
      await reset(email);
      setMessage("check your inbox for futher instructions");
    } catch (err) {
        console.log(err.message)
      setError("Failed to create an account");
      
    }
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
              <h1>Reset your Password</h1>
            </div>

            <form action="">
              {error && <div className="err center">{error}</div>}
              {message && <div className="messg center">{message}</div>}

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
              <div
                onClick={() => {
                  return handleReset()
                }}
                className={`sign-in-btn`}
              >
                Reset Now !
              </div>

              <div className={``}>
                <Link
                  style={{
                    color: "green",
                    marginInline: "auto",
                    textDecoration: "underline",
                  }}
                  to="/login"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};
export default Reset
