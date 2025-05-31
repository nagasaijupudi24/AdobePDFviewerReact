import React, { useEffect } from 'react';

export const AdobePdfViewer = ({ 
  clientId, 
  defaultViewMode = "FIT_PAGE", 
  base64, 
  fileName = "document.pdf",
  showDownloadPDF = true,
  showPrintPDF = true,
  showAnnotationTools = false,
  showZoomControls = true,
  showNavigationControls = true,
  showPageControls = true,
  height = "600px"
}) => {
  useEffect(() => {
    if (!base64) return;

    const loadAdobeScript = () => {
      return new Promise((resolve, reject) => {
        if (window.AdobeDC) {
          resolve();
        } else {
          const script = document.createElement('script');
          script.src = 'https://documentservices.adobe.com/view-sdk/viewer.js';
          script.defer = true;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Failed to load Adobe PDF Embed API script'));
          document.body.appendChild(script);
        }
      });
    };

    const base64ToArrayBuffer = (base64) => {
      const binaryString = atob(base64);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes.buffer;
    };

    const displayPDF = (base64Content, name) => {
      const arrayBuffer = base64ToArrayBuffer(base64Content);

      if (window.AdobeDC && window.AdobeDC.View) {
        const adobeDCView = new window.AdobeDC.View({
          clientId,
          divId: 'adobe-pdf-viewer'
        });

        adobeDCView.previewFile({
          content: {
            promise: Promise.resolve(arrayBuffer),
            type: 'application/pdf'
          },
          metaData: {
            fileName: name
          }
        }, {
          defaultViewMode,
          showAnnotationTools,
          showDownloadPDF,
          showPrintPDF,
          showZoomControls,
          showLeftHandPanel: false,
          showNavigationControls,
          showPageControls
        });
      } else {
        document.addEventListener('adobe_dc_view_sdk.ready', () => displayPDF(base64Content, name));
      }
    };

    loadAdobeScript()
      .then(() => displayPDF(base64, fileName))
      .catch(err => console.error('Error loading Adobe PDF Viewer:', err));

  }, [base64, clientId, defaultViewMode, fileName, 
      showDownloadPDF, showPrintPDF, showAnnotationTools,
      showZoomControls, showNavigationControls, showPageControls]);

  return (
    <div
      id="adobe-pdf-viewer"
      style={{
        height: height,
        marginTop: '20px',
        position: 'relative',
        boxShadow: '2px 2px 6px 2px #dadada'
      }}
    ></div>
  );
};

export default AdobePdfViewer;