import React from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import "./App.css";

function App() {
  const titlePostfix = "My Portfolio";

  return (
    <HelmetProvider>
      <Helmet>
        <title>Grant Ramsay | {titlePostfix}</title>
      </Helmet>
      <Container>
        <div className="App">
          <Header />
          <MainContent>
            This will be the main content blocks, individual sections
          </MainContent>
          <Footer />
        </div>
      </Container>
    </HelmetProvider>
  );
}

export default App;
