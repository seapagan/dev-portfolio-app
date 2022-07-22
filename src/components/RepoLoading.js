import React from "react";
import { TailSpin } from "react-loader-spinner";

import styles from "../css/RepoLoading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <TailSpin color="gray" height={50} width={50} />
      <p>Querying GitHub for Repositories...</p>
    </div>
  );
};

export default Loading;
