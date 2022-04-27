import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import "./login.css";
const Login = () => {
  const [emailMobile, setEmailMobile] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const submit = () => {
    let item = { emailMobile, password };
    console.log("item", item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailMobile < 0 || password < 6) {
      alert("please input all field");
    } else {
      alert("submit");
    }
  };

  return (
    <div className="login-form">
      <h2> Log in Account</h2>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>
              Email/mobile number * <br />
              <input
                className="inp"
                onChange={(e) => {
                  setEmailMobile(e.target.value);
                }}
                name=" email or mobile number"
                placeholder=" enter email or mobile number"
                value={emailMobile}
                required
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              Password * <br />
              <input
                className="inp"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                name="pass"
                placeholder=" Enter password"
                value={password}
                required
              />
            </label>
          </div>
          <input
            className="chb"
            type="checkbox"
            name="remember"
            onChange={checkboxHandler}
          />{" "}
          Remember me
          <div>
            <span className="psw">
              <a href="#">Forgot password?</a>
            </span>
          </div>
          <button
            className="btnn"
            type="submit"
            onClick={submit}
            disabled={!agree}
          >
            Log in
          </button>
          <p>-Or log in with-</p>
          <div className="icon">
            {" "}
            <a href="#" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>{" "}
          </div>
          <div className="icone2">
            {" "}
            <a href="#" className=" google social">
              <FontAwesomeIcon icon={faGoogle} size="2x" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
