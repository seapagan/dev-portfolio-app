import React from "react";

import styles from "../css/RepoItem.module.css";
import CardWrapper from "./CardWrapper";

const RepoItem = ({ repo }) => {
  return (
    <CardWrapper>
      <div className={styles.repoItem}>{repo.name}</div>
    </CardWrapper>
  );
};

export default RepoItem;
