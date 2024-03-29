import React, { useRef } from "react";
import { savePDF } from "@progress/kendo-react-pdf";
import Header from "./Header";
import "./../../css/page.css";
import drapeau from "./../../assets/drapeau.jpg";
import rdc from "./../../assets/rdc.png";
export default function TestPage({ data: textData, design }) {
  const values = Object.values(textData.noms);

  const names = Object.values(textData.noms);
  // console.log(textData, design);
  const contentArea = useRef();
  const handleExportWithFunction = (event) => {
    savePDF(contentArea.current, {
      paperSize: "A4",
      margin: "10px 15px",
      scale: 1,

      fileName: textData.nom,
    });
  };
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
          marginTop: 10,
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
            paddingBottom: 10,
            borderWidth: design.imgBg ? null : parseInt(design.tailleBordure),
            position: "relative",
            marginTop: 10,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            className="logo"
            style={{
              position: "absolute",
              display: "flex",
              width: "100%",
              top: 10,
              left: 10,
              right: 10,
              justifyContent: "space-between",
            }}
          >
            <img
              src={drapeau}
              alt="drapeau RDC"
              style={{
                height: 40,
              }}
            />
            <img
              src={rdc}
              alt="drapeau RDC"
              style={{
                height: 40,
                marginRight: 20,
              }}
            />
          </div>
          <Header dataText={textData} design={design} />
          <div
            id="title"
            className="title"
            style={{
              width: "85%",
              margin: "auto",
              marginTop: 15,
              textAlign: "center",
              padding: 5,
              color: design.couleurTitre,
              border: "1px solid #333",
              borderRadius: 4,
            }}
          >
            {textData.sujet ? (
              <h2
                style={{
                  width: "100%",
                  fontSize: parseFloat(design.tailleTitre),
                }}
              >
                {textData.sujet}
              </h2>
            ) : null}
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
            <div
              style={{
                float: design.position === "Gauche" ? "left" : "right",
                transition: "all 0.3s ease",
                fontSize: values.length <= 3 ? 18 : 14,
                color: design.couleurText,
              }}
            >
              {textData.noms && (
                <p>
                  Fait par :{" "}
                  <ul className="names">
                    {names.map((n) => (
                      <li
                        key={n}
                        style={{
                          fontSize: values.length <= 3 ? 18 : 14,
                          fontWeight: "600",
                        }}
                      >
                        {n}
                      </li>
                    ))}
                  </ul>
                </p>
              )}
              {textData.promotion && (
                <p>
                  Classe :{" "}
                  <span
                    style={{
                      fontWeight: "700",
                      fontSize: values.length <= 3 ? 18 : 14,
                    }}
                  >
                    {textData.promotion}
                  </span>{" "}
                </p>
              )}
              {textData.titulaire && (
                <p style={{ fontSize: values.length <= 3 ? 18 : 14 }}>
                  Dirigé par{" "}
                  <span
                    style={{
                      fontWeight: "700",
                      fontSize: values.length <= 3 ? 18 : 14,
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
                  paddingTop:
                    values.length <= 3 ? 130 : 130 + values.length * 3,
                }}
              >
                <div
                  className="circle"
                  style={{
                    marginTop:
                      values.length <= 3 ? 200 : 150 + values.length * 3,
                    paddingBottom: 10,
                  }}
                >
                  <h3
                    style={{
                      border: "1px dashed #333",
                      borderColor: design.couleurText && design.couleurText,
                      padding: 5,
                      color: design.couleurText,
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
