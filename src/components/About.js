import React from "react";

import styles from "../css/About.module.css";

const About = ({ about }) => {
  return (
    <section id="about-section">
      <div className="section__title">About</div>
      <div className={styles.about}>
        {about.map((line, index) => {
          return <div key={index}>{line}</div>;
        })}
      </div>
    </section>
  );
};

export default About;
