// / Outside of React component
import { pdfjs } from 'react-pdf';
import { Document } from 'react-pdf';


const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
};

// Inside of React component


export const Sample = ()=><Document options={options} />;


// import { useCallback, useState } from 'react';
// import { useResizeObserver } from '@wojtekmaj/react-hooks';
// import { pdfjs, Document, Page } from 'react-pdf';



// import worker from 'pdfjs-dist/build/pdf.worker.min.js?worker';



// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// import './sample.css';
// pdfjs.GlobalWorkerOptions.workerSrc = worker;



// // const pdfFile = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

// // // ✅ Set workerSrc using CDN
// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


// // // Set the worker source for PDF.js
// // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
// //   'pdfjs-dist/build/pdf.worker.min.mjs',
// //   import.meta.url
// // ).toString();

// const options = {
//   cMapUrl: '/cmaps/',
//   standardFontDataUrl: '/standard_fonts/',
// };

// const maxWidth = 800;

// export default function Sample() {
//   const [file, setFile] = useState(pdfFile);
//   const [numPages, setNumPages] = useState(null);
//   const [containerRef, setContainerRef] = useState(null);
//   const [containerWidth, setContainerWidth] = useState(null);

//   const onResize = useCallback((entries) => {
//     const [entry] = entries;
//     if (entry) {
//       setContainerWidth(entry.contentRect.width);
//     }
//   }, []);

//   useResizeObserver(containerRef, {}, onResize);

//   function onFileChange(event) {
//     const { files } = event.target;
//     const nextFile = files?.[0];
//     if (nextFile) {
//       setFile(nextFile);
//     }
//   }

//   function onDocumentLoadSuccess({ numPages: nextNumPages }) {
//     setNumPages(nextNumPages);
//   }

//   return (
//     <div className="Example">
//       <header>
//         <h1>react-pdf sample page</h1>
//       </header>
//       <div className="Example__container">
//         <div className="Example__container__load">
//           <label htmlFor="file">Load from file:</label>{' '}
//           <input onChange={onFileChange} type="file" />
//         </div>
//         <div className="Example__container__document" ref={setContainerRef}>
//           <Document
//             file={file}
//             onLoadSuccess={onDocumentLoadSuccess}
//             options={options}
//           >
//             {Array.from(new Array(numPages), (_, index) => (
//               <Page
//                 key={`page_${index + 1}`}
//                 pageNumber={index + 1}
//                 width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
//               />))}
//                      </Document>
//         </div>
//       </div>
//     </div>
//   );
// }
