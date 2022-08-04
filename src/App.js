import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Helmet, HelmetProvider } from "react-helmet-async";

import About from "./components/about/About";
import BackToTop from "./components/back-to-top/BackToTop";
import Contact from "./components/contact/Contact";
import Container from "./components/container/Container";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import FrontendMentor from "./components/frontend-mentor/FrontendMentor";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MainContent from "./components/main-content/MainContent";
import OpenSource from "./components/open-source/OpenSource";
import Route404 from "./components/route-404/Route404";
import Skills from "./components/skills/Skills";

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
        <meta name="description" content={settings.meta.description} />
        <link rel="canonical" href={settings.meta.link} />
        <title>{getTitle()}</title>
      </Helmet>
      <Container>
        <Router>
          <div className="App">
            <Header name={settings.name} />
            <BackToTop />
            <MainContent>
              <Switch>
                <Route path="/" exact>
                  <Hero hero={settings.hero} social={settings.social} />
                  <About about={settings.about} />
                  <Skills
                    skills={settings.skills}
                    additionalSkills={settings.additionalSkills}
                  />
                  <Experience experience={settings.experience} />
                  <FrontendMentor username={settings.fem_username} />
                  <OpenSource usernames={settings.githubUsername} />
                  <Contact social={settings.social} />
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
