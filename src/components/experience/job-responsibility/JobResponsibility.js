import React from "react";

import styles from "./JobResponsibility.module.css";

const JobResponsibility = ({ responsibility }) => {
  return (
    <dl className={styles.wrapper}>
      <dt>{responsibility.name}</dt>
      <dd>{responsibility.desc}</dd>
    </dl>
  );
};

export default JobResponsibility;
