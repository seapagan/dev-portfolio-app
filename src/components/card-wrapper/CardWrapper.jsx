import React from "react";

import styles from "./CardWrapper.module.scss";

const CardWrapper = ({ children, className }) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};

export default CardWrapper;
