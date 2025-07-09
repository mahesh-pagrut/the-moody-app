import React, { useState } from "react";
import { loadPDF } from "../utils/pdfUtils";
import PageLoader from "../components/PageLoader";
import AnnotationTools from "../components/AnnototionTools";
// import { loadPDF } from "../utils/pdfUtils";
// import AnnotationTools from "../components/AnnotationTools";

const Annotate = () => {
  const [pdf, setPdf] = useState(null);
  const [annotationMode, setAnnotationMode] = useState(""); // e.g. "draw"
  const [strokeColor, setStrokeColor] = useState("#ff0000");
  const [strokeWidth, setStrokeWidth] = useState(2);

  

const handleFile = async (e) => {
  const file = e.target.files[0];
  if (file && file.type === "application/pdf") {
    try {
      const pdf = await loadPDF(file);
      setPdf(pdf);
    } catch (err) {
      console.error("Failed to load PDF", err);
    }
  }
};


  return (
    <div className="max-w-4xl mx-auto mt-6">
      {!pdf ? (
        <div className="text-center">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFile}
            className="block mx-auto mb-4"
          />
          <p className="text-gray-500">Upload a PDF document to annotate</p>
        </div>
      ) : (
        <>
          <AnnotationTools
            mode={annotationMode}
            setMode={setAnnotationMode}
            color={strokeColor}
            setColor={setStrokeColor}
            width={strokeWidth}
            setWidth={setStrokeWidth}
          />
          <PageLoader
            pdf={pdf}
            annotationMode={annotationMode}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth}
          />
        </>
      )}
    </div>
  );
};

export default Annotate;
