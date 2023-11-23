import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Helmet, HelmetProvider } from "react-helmet-async";

import "./App.scss";

import About from "/src/components/about/About";
import BackToTop from "/src/components/back-to-top/BackToTop";
import Contact from "/src/components/contact/Contact";
import Container from "/src/components/container/Container";
import Experience from "/src/components/experience/Experience";
import Footer from "/src/components/footer/Footer";
import Header from "/src/components/header/Header";
import Hero from "/src/components/hero/Hero";
import MainContent from "/src/components/main-content/MainContent";
import OpenSource from "/src/components/open-source/OpenSource";
import Route404 from "/src/components/route-404/Route404";
import Skills from "/src/components/skills/Skills";
import ToggleTheme from "/src/components/toggle-theme/ToggleTheme";

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
            <Header name={settings.name} usernames={settings.githubUsername} />
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
                  {/* <FrontendMentor username={settings.fem_username} /> */}
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
