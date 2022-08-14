import React from "react";

import styles from "./Responsibility.module.scss";

const Responsibility = ({ responsibility }) => {
  return (
    <dl className={styles.wrapper}>
      <dt>{responsibility.name}</dt>
      <dd>{responsibility.desc}</dd>
    </dl>
  );
};

export default Responsibility;
