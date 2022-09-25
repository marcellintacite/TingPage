import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "@fortawesome/fontawesome-free/css/all.css";
import "./scss/style.css";

import About from "./Components/About";

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    );
  }
}
