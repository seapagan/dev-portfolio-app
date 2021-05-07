import React from "react";

import styles from "../css/MainContent.module.css";

const MainContent = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default MainContent;
