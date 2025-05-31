
import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

const PdfViewer = ({blob, pdfViewerZoom}) => {
    console.log("pdf viewer compoenent is called")
  // console.log(props)
  // const {base64} = props
  console.log(blob)
  const viewerRef = useRef(null);
// const varBlobUrl = URL.createObjectURL(blob);

  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer', // public folder where static assets are served
        initialDoc: blob, // URL to the PDF served by .NET Core API
        licenseKey: 'demo:1748256211255:61f81d6e0300000000ab99e1d10b7c1eb989636bdc22406311e38fa43a', // required if you have a license
      },
      viewerRef.current
    ).then((instance) => {
      const {Core} = instance
      const {documentViewer} = Core
      console.log('then is called')
    //    instance.UI.loadDocument(varBlobUrl, { filename: 'myfile.pdf' });
      // const { loadDocument } = instance.Core;

    //  Core.documentViewer.zoomTo(1.5);
            //  Core.documentViewer.zoomTo(pdfViewerZoom); // e.g., 1.25 = 125%

        const UIEvents = instance.UI.Events;

               // Set zoom level to 150% (1.5 scale)
    //     Core.documentViewer.addEventListener('documentLoaded', () => {
    //     console.log('zoom updates')

    //     instance.UI.setZoomLevel(pdfViewerZoom); // e.g., 1.25 = 125%
    //     // instance.UI.setFitMode(instance.UI.FitMode.FitWidth)
    //     console.log(instance.UI.getZoomLevel())

    //   }); 

        document.getElementById('zoomFull').addEventListener('click', () => {
    //   instance.UI.setZoomLevel(pdfViewerZoom);
      instance.UI.setZoomLevel(instance.UI.setFitMode(instance.UI.FitMode.FitWidth));
        // instance.UI.setZoomLevel(1.5);
        console.log("Zoom Fill")
      });

      document.getElementById('zoomExit').addEventListener('click', () => {
      instance.UI.setZoomLevel(instance.UI.setFitMode(instance.UI.FitMode.FitPage));
        // instance.UI.setZoomLevel(1.5);
        console.log("Zoom Exit")
      });

    

      // loadDocument(varBlobUrl, { filename: 'pdfViewer.pdf' });
    });
  }, [blob,pdfViewerZoom]);

  return <div ref={viewerRef} style={{ height: '100vh' }} />;
};

export default PdfViewer;