import React from "react";

import JobItem from "./JobItem";

import styles from "../css/Experience.module.css";

const Experience = ({ experience }) => {
  return (
    <section id="experience-section">
      <h2 className="section__title"> My Experience</h2>
      <div className={styles.experience}>
        {experience.map((job, index) => {
          return <JobItem key={index} job={job} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
