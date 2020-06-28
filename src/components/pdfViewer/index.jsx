import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import PDFViewer from "mgr-pdf-viewer-react";

import "./styles.css";

const operationName = "preferentialSubscriptionCertificate";
const GET_PDF = gql`
  query {
    # ${operationName}(clientId: "Q2xpZW50VHlwZToz" raisingId: "UmFpc2luZ1R5cGU6MQ==") {
    ${operationName}(clientId: "Q2xpZW50VHlwZTo1" raisingId: "UmFpc2luZ1R5cGU6MQ==") {
    # raisingNotice(id: "UmFpc2luZzox") {
    # raisingNotice(id: "UmFpc2luZzoxMA==") {
      pdf
      filename
    }
  }
`;

export function PdfViewer(props) {
  const { loading, error, data } = useQuery(GET_PDF);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error("error =>", error);
    return <p>Error</p>;
  }

  const downloadPDF = () => {
    const linkSource = `data:application/pdf;base64,${data[operationName].pdf}`;
    const downloadLink = document.createElement("a");
    const fileName = `${data[operationName].filename}.pdf`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <div className='pdf-container'>
      <button onClick={downloadPDF}>Get File</button>
      <PDFViewer
        document={{
          base64: data[operationName].pdf,
        }}
        scale={1.5}
      />
    </div>
  );
}
