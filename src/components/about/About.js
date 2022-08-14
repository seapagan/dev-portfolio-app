import React from "react";

import styles from "./About.module.scss";

const About = ({ about }) => {
  return (
    <section id="about-section">
      <h2 className="section__title">About Me</h2>
      <div className={styles.about}>
        {about.map((line, index) => {
          return <div key={index}>{line}</div>;
        })}
      </div>
    </section>
  );
};

export default About;
