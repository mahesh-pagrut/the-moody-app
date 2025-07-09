// src/utils/pdfUtils.js
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

// 👇 Manually create a blob for the worker
const workerBlob = new Blob(
  [
    `
    importScripts('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js');
  `,
  ],
  { type: "application/javascript" }
);

const workerUrl = URL.createObjectURL(workerBlob);
pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

export const loadPDF = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  return pdf;
};
