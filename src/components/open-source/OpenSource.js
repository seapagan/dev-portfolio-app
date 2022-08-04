import React from "react";

import Wrapper from "components/card-wrapper/CardWrapper";
import OpenSourceUser from "components/open-source/open-source-user/OpenSourceUser";

import styles from "./OpenSource.module.css";

const OpenSource = ({ usernames }) => {
  return (
    <section id="openSource-section">
      <h2 className="section__title">OpenSource Projects</h2>
      {[].concat(usernames).map((username, index) => {
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
