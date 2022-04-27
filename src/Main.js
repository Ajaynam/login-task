import React from "react";

import { useState } from "react";
import Login from "./Login";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Extra from "./Extra";

import "./Main.css";
import Signup from "./Signup";
const Main = () => {
  return (
    <div className="btnc">
      <div className="btnto">
        <Link to="Signup">
          <Button className="btnp"> signup</Button>
        </Link>
        <Button className="btnp">login</Button>
      </div>
      <Login />
    </div>
  );
};
export default Main;
