import React, { Component, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Single from "./Components/Single/Single";
import PageContext from "./config/PageContext";
export default function App() {
  const [data, setData] = useState({});
  const [design, setDesign] = useState({});
  return (
    <PageContext.Provider value={{ data, setData, design, setDesign }}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<Single />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </PageContext.Provider>
  );
}
