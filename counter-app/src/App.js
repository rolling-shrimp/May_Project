import React from "react";
import { Route, Routes } from "react-router-dom";

import UserA from "./components/userA";
import UserB from "./components/userB";
import UserC from "./components/userC";
import UserD from "./components/userD";

import "./components/userPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Routes>
      <Route path="/userA" element={<UserA />} exact />
      <Route path="/userB" element={<UserB />} exact />
      <Route path="/userC" element={<UserC />} exact />
      <Route path="/userD" element={<UserD />} exact />
    </Routes>
  );
};

export default App;
