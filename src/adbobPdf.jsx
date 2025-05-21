/* eslint-disable react/self-closing-comp */
import React, { useEffect } from 'react';

export const AdobePdfViewer = ({ clientId, fileUrl, defaultViewMode }) => {
  useEffect(() => {
    const loadAdobeScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://documentservices.adobe.com/view-sdk/viewer.js';
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Adobe PDF Embed API script'));
        document.body.appendChild(script);
      });
    };

    const displayPDF = () => {
      const adobeDC = window.AdobeDC;
      if (adobeDC && adobeDC.View) {
        new adobeDC.View({
          clientId,
          divId: 'adobe-pdf-viewer'
        }).previewFile({
          content: { location: { url: fileUrl } },
          metaData: { fileName: 'document.pdf' }
        }, {
          defaultViewMode,
          showAnnotationTools: false,
          showDownloadPDF: false,
          showPrintPDF: false,
          showZoomControls: false,
          showNavigationControls: false,
          showPageControls: false
        });

        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
              document.querySelector('.adobe-logo-selector');
              // Customize DOM if needed
            }
          });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        setTimeout(() => observer.disconnect(), 5000);
      } else {
        document.addEventListener('adobe_dc_view_sdk.ready', displayPDF);
      }
    };

    loadAdobeScript()
      .then(() => {
        displayPDF();
      })
      .catch(err => console.error(err));

    return () => {
      const script = document.querySelector('script[src="https://documentservices.adobe.com/view-sdk/viewer.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [clientId, fileUrl, defaultViewMode]);

  return (
    <div
      id="adobe-pdf-viewer"
      style={{
        height: "600px",
        position: 'relative',
        boxShadow: '2px 2px 6px 2px #dadada'
      }}
    ></div>
  );
};



