import React from "react";
import Navbar from "./../common/Navbar/Navbar";
import Footer from "./../common/Footer/Footer";

export default function About() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Navbar />
      <div className="content_about">
        <div className="left"></div>
      </div>
      <Footer />
    </div>
  );
}
