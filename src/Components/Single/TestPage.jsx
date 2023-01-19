import React, { useRef } from "react";
import { savePDF } from "@progress/kendo-react-pdf";
import Header from "./Header";
import "./../../css/page.css";
import b from "./../../assets/bor.png";
import ReactGA from "react-ga";
import { PulseLoader } from "react-spinners";
export default function TestPage({ data: textData, design }) {
  // console.log(textData, design);
  const contentArea = useRef();
  const handleExportWithFunction = (event) => {
    savePDF(contentArea.current, {
      paperSize: "A4",
      margin: { left: "0.3cm", top: "0.1cm", right: "0.3cm", bottom: "0.3cm" },
      fileName: textData.nom,
    });
    ReactGA.event({
      category: "Download",
      action: "Telechargement de la page",
    });
  };

  console.log(textData);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          Height: "100%",
          fontFamily: "Poppins",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `url(${design.imgBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          border: design.imgBg ? "2px solid #3333" : null,
        }}
        ref={contentArea}
      >
        <div
          style={{
            height: "100%",
            width: "96%",
            margin: "auto",
            border: design.imgBg ? null : `1px solid grey`,
            borderColor: design.couleurBordure,
            paddingBottom: 5,
            borderWidth: design.imgBg ? null : parseInt(design.tailleBordure),
            position: "relative",
            marginTop: 20,

            backgroundPosition: "center",
            backgroundSize: "cover",
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
              color: design.couleurTitre,
              border: "1px solid #333",
              borderRadius: 3,
            }}
          >
            {textData.sujet ? (
              <h2 style={{ width: "100%" }}>{textData.sujet}</h2>
            ) : null}
          </div>

          <div
            className="author"
            style={{
              width: "81%",
              fontSize: 16,
              margin: "auto",
              marginTop: 40,
            }}
          >
            <div
              style={{
                float: design.position === "Gauche" ? "left" : "right",
                transition: "all 0.3s ease",
                fontSize: 16,
              }}
            >
              {textData.nom && (
                <p>
                  Fait par{" "}
                  <span
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {textData.nom}
                  </span>{" "}
                </p>
              )}
              {textData.promotion && (
                <p>
                  Promotion :{" "}
                  <span
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {textData.promotion}
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
            </div>
            {textData.anne && (
              <div
                className="foot"
                style={{
                  textAlign: "center",
                  paddingTop: 50,
                }}
              >
                <div
                  className="circle"
                  style={{
                    marginTop: 100,
                    paddingBottom: 10,
                  }}
                >
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
      <button className="btn" onClick={handleExportWithFunction}>
        <p>Enreigistrer la page</p>
        <span className="fa fa-download"></span>
      </button>
    </div>
  );
}
