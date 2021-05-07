import React from "react";

import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import "./App.css";

function App() {
  return (
    <Container>
      <div className="App">
        <Header />
        <MainContent>
          This will be the main content blocks, individual sections
        </MainContent>
        <Footer />
      </div>
    </Container>
  );
}

export default App;
