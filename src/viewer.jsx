import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import packageJson from '../package.json';



// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export const ViewerPdf = () => {
    // Create plugin instance
    const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ height: '750px' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
                <Viewer
                    fileUrl="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </div>
    );
};


