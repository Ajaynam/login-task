import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Extra from "./components/Extra";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Extra />

        <Routes>
          <Route index element={<Main />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>

      {/*<Signup/>*/}
    </div>
  );
}

export default App;
