import React, { useState } from 'react';
import './App.css';
import { AdobePdfViewer } from './adbobPdf';

function App() {
  // State to hold the split parts of the base64 PDF URI
  const [base64, setBase64] = useState('');
  const [base64Header, setBase64Header] = useState('');
  const [base64Content, setBase64Content] = useState('');
  const [fileName, setFileName] = useState(''); // new state for file name

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setBase64(result);
        if (typeof result === 'string') {
          const [header, base64] = result.split(',');
          setBase64Header(header);
          setBase64Content(base64);
          setFileName(file.name); // set file name here
          console.log("Header:", header);
          console.log("Base64 Content:", base64);
          console.log("File Name:", file.name);
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  return (
    <div>
      <h3>Select a PDF to convert to Base64 URI:</h3>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />

      <div style={{ marginTop: 20 }}>
        <strong>Base64 Header:</strong>
        <p style={{ wordBreak: 'break-all' }}>{base64Header || '(none)'}</p>

        <strong>Base64 Content (first 100 chars):</strong>
        <p style={{ wordBreak: 'break-all' }}>
          {base64Content ? base64Content.substring(0, 100) + '...' : '(none)'}
        </p>

        <strong>File Name:</strong>
        <p>{fileName || '(none)'}</p>
      </div>

      <AdobePdfViewer
        clientId={"825473e9e1184eL459736428fd30f8b99"}
        defaultViewMode={"FIT_WIDTH"}
        base64={base64Content}
        fileName={fileName}  
      />

      <iframe
        width="600"
        height="1000"
        title="pdf"
        src="/assets/large-doc.pdf"
      ></iframe>
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import { AdobePdfViewer } from './adbobPdf';

// function App() {
//   // State to hold the split parts of the base64 PDF URI
//   const [base64,setBase64]= useState('');
//   const [base64Header, setBase64Header] = useState('');
//   const [base64Content, setBase64Content] = useState('');

//   const handleFileChange = (event) => {
//     const file = event.target.files?.[0];
//     if (file && file.type === 'application/pdf') {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const result = reader.result;
//         setBase64(result)
//         if (typeof result === 'string') {
//           const [header, base64] = result.split(',');
//           setBase64Header(header);
//           setBase64Content(base64);
//           console.log("Header:", header);
//           console.log("Base64 Content:", base64);
//         }
//       };
//       reader.readAsDataURL(file);
//     } else {
//       alert('Please upload a valid PDF file.');
//     }
//   };

//   return (
//     <div>
//       <h3>Select a PDF to convert to Base64 URI:</h3>
//       <input type="file" accept="application/pdf" onChange={handleFileChange} />

//       <div style={{ marginTop: 20 }}>
//         <strong>Base64 Header:</strong>
//         <p style={{ wordBreak: 'break-all' }}>{base64Header || '(none)'}</p>

//         <strong>Base64 Content (first 100 chars):</strong>
//         <p style={{ wordBreak: 'break-all' }}>
//           {base64Content ? base64Content.substring(0, 100) + '...' : '(none)'}
//         </p>
//       </div>

//       <AdobePdfViewer
//         clientId={"825473e9e1184eL459736428fd30f8b99"}
//         // fileUrl="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
//         defaultViewMode={"FIT_WIDTH"}
//         base64={base64Content}
       
//       />

//       <iframe
//         width="600"
//         height="1000"
//         title="pdf"
//         src="/assets/large-doc.pdf"
//       ></iframe>
//     </div>
//   );
// }

// export default App;
