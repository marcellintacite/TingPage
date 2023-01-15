import React, { useContext, useRef, useState } from "react";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import Formulaires from "./Formulaires/Formulaires";
import "./../../css/single.css";
import Design from "./Design/Design";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TestPage from "./TestPage";
import { savePDF } from "@progress/kendo-react-pdf";

function EtudiantsGroup(props) {
  //data for the app
  const [data, setData] = useState({
    universite: "",
    faculte: "",
    departement: "",
    cours: "",
    sujet: "",
    noms: {},
    titulaire: "",
    anne: "",
  });
  console.log(data);
  const [design, setDesign] = useState({
    bg: "#fff",
    couleurText: "#333",
    couleurBordure: "#000",
    couleurTitre: "#222",
    tailleBordure: 4,
    position: "gauche",
    tailleTitre: 20,
  });

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
          <h4>Page de garde en groupe étudiant :</h4>
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
              <Formulaires
                data={data}
                handleSave={handleSave}
                onPdf={handleExportWithFunction}
                setData={setData}
              />
            )}
            {currentCommand === "design" && (
              <Design design={design} setDesign={setDesign} />
            )}
          </div>
          <div className="right">
            <TestPage data={data} ref={contentArea} design={design} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default EtudiantsGroup;
