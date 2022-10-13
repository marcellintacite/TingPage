import React, { useContext, useState } from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import PageContext from "../../config/PageContext";
import Select from "react-select";
import Formulaires from "../Formulaires/Formulaires";
import "./../../css/single.css";
import Design from "../Design/Design";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Page from "../Page/Page";

function Single(props) {
  const data = useContext(PageContext);

  const handleSave = () => {
    const ele = document.querySelector(".page");
    html2canvas(ele).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save(`${data.data.nom} pgd.pdf`);
    });
  };

  const [currentCommand, setCurrent] = useState("informations");
  return (
    <div className="single">
      <Navbar />
      <div className="container">
        <div className="title">
          <h4>Page de garde pour étudiant :</h4>
          <div className="line"></div>
        </div>
        <div className="content_view">
          <div className="left">
            <div className="commands">
              <div
                className={
                  currentCommand === "informations"
                    ? "command active"
                    : "command"
                }
                onClick={() => setCurrent("informations")}
              >
                Informations
              </div>
              <div
                className={
                  currentCommand === "design" ? "command active" : "command"
                }
                onClick={() => setCurrent("design")}
              >
                Design
              </div>
            </div>
            {currentCommand === "informations" && (
              <Formulaires data={data} handleSave={handleSave} />
            )}
            {currentCommand === "design" && <Design data={data} />}
          </div>
          <div className="right">
            <Page data={data} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Single;
