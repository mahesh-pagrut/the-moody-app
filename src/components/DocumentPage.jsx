import React, { useEffect, useRef, useState } from "react";

const DocumentPage = ({ pdf, pageNumber, annotationMode, strokeColor, strokeWidth }) => {
  const canvasRef = useRef(null);
  const annotationRef = useRef(null);
  const [viewport, setViewport] = useState(null);

  useEffect(() => {
    const renderPage = async () => {
      const page = await pdf.getPage(pageNumber);
      const vp = page.getViewport({ scale: 1.5 });
      setViewport(vp);
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.width = vp.width;
      canvas.height = vp.height;
      await page.render({ canvasContext: context, viewport: vp }).promise;

      // Match annotation canvas size
      const annotationCanvas = annotationRef.current;
      annotationCanvas.width = vp.width;
      annotationCanvas.height = vp.height;
    };

    renderPage();
  }, [pdf, pageNumber]);

  // Canvas drawing logic
  useEffect(() => {
    if (!annotationMode) return;

    const canvas = annotationRef.current;
    const ctx = canvas.getContext("2d");
    let isDrawing = false;

    const startDraw = (e) => {
      isDrawing = true;
      ctx.beginPath();
      const rect = canvas.getBoundingClientRect();
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    };

    const draw = (e) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = "round";
      ctx.stroke();
    };

    const endDraw = () => {
      isDrawing = false;
      ctx.closePath();
    };

    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", endDraw);
    canvas.addEventListener("mouseleave", endDraw);

    return () => {
      canvas.removeEventListener("mousedown", startDraw);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", endDraw);
      canvas.removeEventListener("mouseleave", endDraw);
    };
  }, [annotationMode, strokeColor, strokeWidth]);

  return (
    <div className="relative mb-6 shadow-md rounded">
      <canvas ref={canvasRef} className="w-full z-0" />
      <canvas
        ref={annotationRef}
        className="absolute top-0 left-0 z-10"
        style={{ pointerEvents: annotationMode ? "auto" : "none" }}
      />
    </div>
  );
};

export default DocumentPage;
