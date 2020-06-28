import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PdfViewer } from "./components/pdfViewer";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  headers: {
    authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6MTIsImV4cCI6MTU5MzE5MDY1Nywib3JpZ0lhdCI6MTU5MzE5MDIzNywidXNlcmdyb3VwIjoiYWRtaW5fZ3JvdXAifQ.H_J1Pk6ojKCrraubqnEFJXUwIMAKIcSwmC-O_z9O1ko'
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <PdfViewer />
    </ApolloProvider>
  );
}

export default App;
