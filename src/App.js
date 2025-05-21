// import { RPProvider, RPDefaultLayout, RPPages, RPConfig } from '@pdf-viewer/react'
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
    // import pdfFile from './Noticeboard_SPFX_Readme.pdf'
    // import {Sample} from './sample';
    import {AdobePdfViewer} from './adbobPdf';
  
import './App.css';

function App() {
  return (
    //  <RPConfig>
    //   <RPProvider src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf">
    //     <RPDefaultLayout style={{ height: '660px' }}>
    //       <RPPages />
    //     </RPDefaultLayout>
    //   </RPProvider>
    // </RPConfig>

    <div>

            <AdobePdfViewer clientId={"825473e9e1184eL459736428fd30f8b99"} fileUrl="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf" defaultViewMode={"FIT_WIDTH"}/>

      <iframe
        width="600"
        height="1000"
        title="pdf"
       src="/assets/large-doc.pdf"
        // src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
        // src="https://docs.google.com/document/d/e/2PACX-1vRupID8dT6I7vbwnDOWj0fPOrhVT-XawQ036eeJz9_RkC4G23QY8-VQA1sY8tTZfIN0EUB25Ghk8dOO/pub?embedded=true"
      ></iframe>
    </div>

    // <div>
    //   {/* <Sample/> */}
    //         {/* <Document file={pdfFile}>
    //             <Page scale={2.0}
    //                 pageNumber={1} />
    //         </Document> */}
    //     </div>
  );
}

export default App;
