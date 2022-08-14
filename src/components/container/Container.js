import React from "react";

import styles from "./Container.module.scss";

const Container = ({ className, children }) => {
  return <div className={`${className} ${styles.container}`}>{children}</div>;
};

export default Container;
