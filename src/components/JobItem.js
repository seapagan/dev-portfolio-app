import React from "react";

import styles from "../css/JobItem.module.css";
import CardWrapper from "./CardWrapper";
import JobResponsibility from "./JobResponsibility";

const JobItem = ({ job }) => {
  return (
    <CardWrapper>
      <div>Position: {job.title}</div>
      <div>Company: {job.company}</div>
      <div>Dates: {job.dates}</div>
      <div>Website: {job.link}</div>
      {job.responsibilities.map((responsibility, index) => {
        return (
          <JobResponsibility key={index} responsibility={responsibility} />
        );
      })}
    </CardWrapper>
  );
};

export default JobItem;
