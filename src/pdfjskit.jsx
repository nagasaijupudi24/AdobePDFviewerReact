import React, { useEffect, useRef } from "react";
import PdfViewer from "pdfjskit";

const GleamtechPdfJsKitPdfViewerComponent = () => {
    console.log("Component rendered")
  

  var pdfViewer = new PdfViewer({
  documentUrl: "https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf",
  width: "80%",
  height: 720,
  resizable: true,
  language: "en-US",
  theme: "slate, classic-dark"
});
console.log(pdfViewer)

pdfViewer.render(document.getElementById("container"));

  return <div  id="container" />;
};

export default GleamtechPdfJsKitPdfViewerComponent;
