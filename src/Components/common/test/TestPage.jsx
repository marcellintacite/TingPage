import React, { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import Header from "../../Page/Header";
import "./../../../css/page.css";
import { dataUniversite } from "../../../config/data";
export default function TestPage({ data }) {
  const { data: textData, design } = data;
  // console.log(textData, design);
  // const contentArea = useRef();
  // const handleExportWithFunction = (event) => {
  //   savePDF(contentArea.current, { paperSize: "A4" });
  // };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        fontFamily: "Poppins",
        padding: 5,
      }}
      // ref={contentArea}
    >
      <div
        style={{
          height: "100%",
          width: "95%",
          margin: "auto",
          border: "1px solid grey",
          paddingBottom: 10,
          position: "relative",
          marginTop: 10,
        }}
      >
        <Header dataText={textData} design={design} />
        <div
          id="title"
          className="title"
          style={{
            width: "80%",
            margin: "auto",
            marginTop: 15,
            textAlign: "center",
            padding: 5,
            border: "1px solid #333",
            borderRadius: 3,
          }}
        >
          {textData.sujet ? <h2>{textData.sujet}</h2> : null}
        </div>

        <div
          className="author"
          style={{
            width: "81%",
            fontSize: 16,
            margin: "auto",
            marginTop: 20,
          }}
        >
          {textData.nom && (
            <p>
              Fais par{" "}
              <span
                style={{
                  fontWeight: "700",
                }}
              >
                {textData.nom}
              </span>{" "}
            </p>
          )}
          {textData.titulaire && (
            <p>
              Dirigé par{" "}
              <span
                style={{
                  fontWeight: "700",
                }}
              >
                {textData.titulaire}
              </span>{" "}
            </p>
          )}
          {textData.anne && (
            <div
              className="foot"
              style={{
                textAlign: "center",
                paddingTop: 120,
              }}
            >
              <div className="circle">
                <h3
                  style={{
                    border: "1px dashed #333",
                    padding: 5,
                  }}
                >
                  ANNEE ACADEMIQUE : {textData.anne}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
