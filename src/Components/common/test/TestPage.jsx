import React, { useRef } from "react";
import { savePDF } from "@progress/kendo-react-pdf";
import Header from "../../Page/Header";
import "./../../../css/page.css";
import icones from "../../../config/pngs";
export default function TestPage({ data }) {
  const { data: textData, design } = data;
  // console.log(textData, design);
  const contentArea = useRef();
  const handleExportWithFunction = (event) => {
    savePDF(contentArea.current, { paperSize: "A4", margin: "10px 15px" });
  };

  console.log(design);
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
        }}
        ref={contentArea}
      >
        <div
          style={{
            height: "100%",
            width: "96%",
            margin: "auto",
            border: `1px solid grey`,
            borderColor: design.couleurBordure,
            paddingBottom: 5,
            borderWidth: parseInt(design.tailleBordure),
            position: "relative",
            marginTop: 20,
            background: design.bg,
          }}
        >
          <div
            style={{
              position: "absolute",
              zIndex: 0,
              opacity: 0.3,
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                src={icones.BoyGraduation}
                alt="graduation"
                width={40}
                style={{
                  position: "absolute",
                  top: 20,
                  left: 10,
                }}
              />
              <img
                src={icones.Certificate}
                alt="graduation"
                width={40}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                }}
              />
            </div>
          </div>
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
            {textData.sujet ? <h2>{textData.sujet}</h2> : null}
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
            </div>
            {textData.anne && (
              <div
                className="foot"
                style={{
                  textAlign: "center",
                  paddingTop: 160,
                }}
              >
                <div
                  className="circle"
                  style={{
                    marginTop: 80,
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
