import React, { Component, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Single from "./Components/Single/Single";
import "font-awesome/css/font-awesome.css";
import About from "./Components/apropos/About";
import Secondaire from "./Components/secondaire/Secondaire";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./Components/common/Scroll";
import Multiple from "./Components/Multiple/Multiple";

import ReactGA from "react-ga";

export default function App() {
  const TRACKING_ID = "348552975"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<Single />} />
        <Route path="/secondaire" element={<Secondaire />} />
        <Route path="/multiple" element={<Multiple />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
