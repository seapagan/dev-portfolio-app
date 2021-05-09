import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Helmet, HelmetProvider } from "react-helmet-async";

import About from "./components/About";
import Contact from "./components/Contact";
import Container from "./components/Container";
import CV from "./components/CV";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import OpenSource from "./components/OpenSource";
import Route404 from "./components/Route404";
import Skills from "./components/Skills";

import "./App.css";

function App({ settings }) {
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
        <Router>
          <div className="App">
            <Header name={settings.name} />
            <MainContent>
              <Switch>
                <Route path="/" exact>
                  <Hero hero={settings.hero} />
                  {/* <About /> */}
                  <Skills
                    skills={settings.skills}
                    additionalSkills={settings.additionalSkills}
                  />
                  <Experience experience={settings.experience} />
                  <OpenSource />
                  <Contact />
                </Route>
                <Route path="/cv">
                  <CV />
                </Route>
                <Route path="*">
                  {/* this is a catch-all route for unknown pages, It
                  should stay as the last route */}
                  <Route404 />
                </Route>
              </Switch>
            </MainContent>
            <Footer />
          </div>
        </Router>
      </Container>
    </HelmetProvider>
  );
}

export default App;
