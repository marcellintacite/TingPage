import React from "react";
import Heading from "./common/Heading";
import jsPDF from "jspdf";
import * as html2canvas from "html2canvas";

function PageView({ data, design }) {
  console.log(data);
  const handleSave = () => {
    const ele = document.querySelector(".page");
    html2canvas(ele).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save(`${data.nom} pgd.pdf`);
    });
  };

  return (
    <div className="page_view">
      <div
        className="page"
        style={{
          backgroundColor: design.background,
          color: design.texteColor,
        }}
      >
        <div
          className="page_content"
          style={{
            border: `${design.bordersize}px solid ${design.borderColor}`,
          }}
        >
          <div
            className="second_border"
            style={{
              border: `${design.second}px solid ${design.secondcolor}`,
            }}
          >
            <Heading data={data} design={design} />
            <div className="foot">
              <div className="text_author">
                <p>
                  Fait par <span className="nom">{data.nom}</span>{" "}
                </p>
                <p>
                  Dirigé par <span className="nom">{data.enseignant}</span>{" "}
                </p>
                {/* <div className="text_autho_group">
                  <p>Fait par :</p>
                  <ul>
                    <li>Aksanti Bahiga</li>
                    <li>Amani Bahiga</li>
                    <li>Kulimushi John</li>
                    <li>Akuzwe thirie</li>
                    <li>Kuluna ziga</li>
                  </ul>
                </div> */}
              </div>
              <div className="anne">
                <h4>ANNEE ACADEMIQUE : {data.anne}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleSave}>Enreigistre</button>
    </div>
  );
}

export default PageView;
