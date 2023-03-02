import React from "react";

import Carousel from "components/carousel/Carousel";

import styles from "./FrontendMentor.module.css";

const FrontendMentor = ({ username }) => {
  return (
    <section id="frontendmentor-section">
      <h2 className="section__title">Frontend Mentor Solutions</h2>
      <div className={styles.frontendMentor}>
        <p>
          I am active on the{" "}
          <a
            className={styles.link}
            href={`https://www.frontendmentor.io/profile/${username}`}
            target="_blank"
            rel="noopener noreferrer">
            Frontend Mentor
          </a>{" "}
          website, where you can work on challenges to improve your Frontend
          Skills with HTML, CSS and Javascript. Below you can see some of my
          solutions.
        </p>
        <Carousel />
      </div>
    </section>
  );
};

export default FrontendMentor;
