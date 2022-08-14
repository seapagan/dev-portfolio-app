import React from "react";

import CardWrapper from "components/card-wrapper/CardWrapper";
import Task from "components/experience/tasks/Task";

import styles from "./Job.module.scss";

const JobItem = ({ job }) => {
  return (
    <CardWrapper className={styles.jobItem}>
      <div className={styles.company}>{job.company}</div>
      <div className={styles.position}>{job.title}</div>
      <div className={styles.dates}>from {job.dates}</div>
      <div className={styles.responsibilities}>
        {job.responsibilities.map((responsibility, index) => {
          return <Task key={index} responsibility={responsibility} />;
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
