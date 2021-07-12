import React from "react";

import styles from "../css/OpenSource.module.css";
import Wrapper from "./CardWrapper";
import OpenSourceUser from "./OpenSourceUser";

const OpenSource = ({ usernames }) => {
  return (
    <section id="openSource-section">
      <div className="section__title">OpenSource Projects</div>
      {usernames.map((username, index) => {
        return (
          <Wrapper key={index} className={styles.wrapper}>
            <OpenSourceUser username={username} />
          </Wrapper>
        );
      })}
    </section>
  );
};

export default OpenSource;
