import React from "react";

import styles from "../css/Experience.module.css";
import JobItem from "./JobItem";

const Experience = ({ experience }) => {
  return (
    <section id="experience-section">
      <div className="section__title">Experience</div>
      <div className={styles.experience}>
        {experience.map((job, index) => {
          return <JobItem key={index} job={job} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
