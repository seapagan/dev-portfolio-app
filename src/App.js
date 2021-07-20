import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import { Helmet, HelmetProvider } from "react-helmet-async";

import About from "./components/About";
import BackToTop from "./components/BackToTop";
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
import { settings } from "./configure/settings";

const history = createBrowserHistory();

ReactGA.initialize(settings.ga_id);
// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

console.log(settings.ga_id);
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
        <meta name="description" content={settings.meta.description} />
        <link rel="canonical" href={settings.meta.link} />
      </Helmet>
      <Container>
        <Router history={history}>
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
                  <OpenSource usernames={settings.githubUsername} />
                  <Contact social={settings.social} />
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
