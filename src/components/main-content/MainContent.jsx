import React from "react";

import styles from "./MainContent.module.scss";

const MainContent = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default MainContent;
