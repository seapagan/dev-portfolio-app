import React from "react";

import styles from "../css/About.module.css";

const About = () => {
  return (
    <section id="about-section">
      <div className="section__title">About</div>
      <div className={styles.about}>About Content</div>
    </section>
  );
};

export default About;
