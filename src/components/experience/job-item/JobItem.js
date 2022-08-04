import React from "react";

import CardWrapper from "components/card-wrapper/CardWrapper";
import JobResponsibility from "components/experience/job-responsibility/JobResponsibility";

import styles from "./JobItem.module.css";

const JobItem = ({ job }) => {
  return (
    <CardWrapper className={styles.jobItem}>
      <div className={styles.company}>{job.company}</div>
      <div className={styles.position}>{job.title}</div>
      <div className={styles.dates}>from {job.dates}</div>
      <div className={styles.responsibilities}>
        {job.responsibilities.map((responsibility, index) => {
          return (
            <JobResponsibility key={index} responsibility={responsibility} />
          );
        })}
      </div>
      <div className={styles.website}>
        <a
          className={styles.link}
          href={job.link}
          target="_blank"
          rel="noopener noreferrer">
          {job.link}
        </a>
      </div>
    </CardWrapper>
  );
};

export default JobItem;
