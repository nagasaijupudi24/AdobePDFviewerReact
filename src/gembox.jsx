import React, { useEffect, useRef } from 'react';
import { GemBoxPdfViewer } from '@gembox/pdfviewer';
import '@gembox/pdfviewer/dist/es/pdfviewer.css';

GemBoxPdfViewer.setLicense("FREE-LIMITED-KEY");

const GemBoxPdfViewerIB = () => {
  const viewerElement = useRef(null);

  useEffect(() => {
    GemBoxPdfViewer.create({
      container: viewerElement.current,
      initialDocument: "https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
    }).then(
        (viewer)=>{
            console.log(viewer)
            viewer.setZoom(0.75)


             document.getElementById('zoomFull').addEventListener('click', () => {
     viewer.setZoom("fitWidth")
        console.log("Zoom Fill")
      });

      document.getElementById('zoomExit').addEventListener('click', () => {
      viewer.setZoom("fitPage")
        console.log("Zoom Exit")
      });
            
        }
    );
  }, []);

  return (
    <div ref={viewerElement} style={{ width: "100vw", height: "100vh" }}></div>
  );
};

export default GemBoxPdfViewerIB;
