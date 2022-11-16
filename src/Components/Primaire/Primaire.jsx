import React, { useContext, useRef, useState } from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import PageContext from "../../config/PageContext";
import FormulaireSecondaire from "../FormSecondaire/Formulaires";
import "./../../css/single.css";
import Design from "../Design/Design";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Page from "../Page/Page";
import TestPage from "../common/test/TestPage";
import { savePDF } from "@progress/kendo-react-pdf";
import Secondaire from "./Secondaire";

function Primaire(props) {
  const data = useContext(PageContext);

  const contentArea = useRef();

  const handleExportWithFunction = (event) => {
    savePDF(contentArea.current, { paperSize: "A4" });
  };

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
          <h4>Page de garde pour élève :</h4>
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
              <FormulaireSecondaire
                data={data}
                handleSave={handleSave}
                onPdf={handleExportWithFunction}
              />
            )}
            {currentCommand === "design" && <Design data={data} />}
          </div>
          <div className="right">
            <Secondaire data={data} ref={contentArea} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Primaire;
