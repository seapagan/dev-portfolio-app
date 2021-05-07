import React from "react";

import styles from "../css/CardWrapper.module.css";

const CardWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default CardWrapper;
