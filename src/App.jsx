import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Helmet, HelmetProvider } from "react-helmet-async";

import About from "./components/about/About";
import BackToTop from "./components/back-to-top/BackToTop";
import Contact from "./components/contact/Contact";
import Container from "./components/container/Container";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import MainContent from "./components/main-content/MainContent";
import OpenSource from "./components/open-source/OpenSource";
import Projects from "./components/projects/Projects";
import Route404 from "./components/route-404/Route404";
import Skills from "./components/skills/Skills";
import ToggleTheme from "./components/toggle-theme/ToggleTheme";

import "./App.scss";

function App({ settings }) {
  const [theme, setTheme] = useState("light");
  const titlePostfix = "My Portfolio";

  const getUserThemeChoice = () => localStorage.getItem("dev-portfolio-theme");

  useEffect(() => {
    let userThemeChoice = getUserThemeChoice();
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");

    if (userThemeChoice) {
      setTheme(userThemeChoice);
    } else {
      setTheme(matcher.matches ? "dark" : "light");
    }

    matcher.onchange = () => {
      userThemeChoice = getUserThemeChoice();
      if (!userThemeChoice) {
        setTheme(matcher.matches ? "dark" : "light");
      }
    };
  }, []);

  const getTitle = () => {
    if (settings.name) {
      return `${settings.name} | ${titlePostfix}`;
    } else {
      return `${titlePostfix}`;
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("dev-portfolio-theme", newTheme);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content={settings.meta.description} />
        <link rel="canonical" href={settings.meta.link} />
        <title>{getTitle()}</title>
      </Helmet>
      <Container className={`mainContainer theme-${theme}`}>
        <ToggleTheme mode={theme} toggleTheme={toggleTheme} />
        <Router>
          <div className="App">
            <Header name={settings.name} projects={settings.projects} />
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
                  {settings.projects && (
                    <Projects projectList={settings.projects} delay={10} />
                  )}
                  <Experience experience={settings.experience} />
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
