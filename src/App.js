import React from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

import About from "./components/About";
import Contact from "./components/Contact";
import Container from "./components/Container";
import CV from "./components/CV";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import OpenSource from "./components/OpenSource";
import Skills from "./components/Skills";
import { settings } from "./configure/settings";

import "./App.css";

function App() {
  const titlePostfix = "My Portfolio";

  const getTitle = () => {
    if (settings.name) {
      return `${settings.name} | ${titlePostfix}`;
    } else {
      return `${titlePostfix}`;
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{getTitle()}</title>
      </Helmet>
      <Container>
        <div className="App">
          <Header settings={settings} />
          <MainContent>
            <About />
            <Skills />
            <Experience />
            <OpenSource />
            <CV />
            <Contact />
          </MainContent>
          <Footer />
        </div>
      </Container>
    </HelmetProvider>
  );
}

export default App;
