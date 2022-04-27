import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submit = () => {
    let item = {
      firstName,
      lastName,
      email,
      number,
      password,
      confirmPassword
    };
    console.log(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.length < 0 ||
      lastName.length < 0 ||
      email.length < 0 ||
      number < 0 ||
      password < 6 ||
      confirmPassword < 6
    ) {
      alert("please input all field");
    } else {
      alert("submit");
    }
  };

  return (
    <div className=" signup-form">
      <h2>Signup Account</h2>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-containers">
            <label>
              First name <br />
              <input
                className="inps"
                type="name"
                name=" name"
                placeholder=" enter first name"
                onChange={handleFirstName}
                value={firstName}
                required
              />
            </label>

            <label>
              {" "}
              Last name <br />
              <input
                className="inps"
                type="name"
                name=" name"
                placeholder=" enter Last name"
                onChange={handleLastName}
                value={lastName}
                required
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              Email <br />
              <input
                className="inps"
                type="Email"
                name="Email"
                placeholder=" Enter email addresh"
                placeholder=" enter email"
                onChange={handleEmail}
                value={email}
                required
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              Mobile Number <br />
              <input
                className="inps"
                type="number"
                name="number"
                placeholder=" Enter mobile number"
                onChange={handleNumber}
                value={number}
                required
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              Password <br />
              <input
                className="inps"
                type="password"
                name="pass"
                placeholder=" Enter password"
                onChange={handlePassword}
                value={password}
                required
              />
            </label>
          </div>
          <div className="input-container">
            <label>
              Confirm Password <br />
              <input
                className="inps"
                type="password"
                name="pass"
                placeholder=" Confirm password"
                onChange={handleConfirmPassword}
                value={confirmPassword}
                required
              />
            </label>
          </div>
          <div></div>
          <input
            className="chbs"
            type="checkbox"
            name="remember"
            onChange={checkboxHandler}
          />{" "}
          Agree to the <a href="#">term of service</a> and{" "}
          <a href="#">privacy policy</a>
          <button
            className="btns"
            type="submit"
            onClick={submit}
            disabled={!agree}
          >
            Create An Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
