import React from "react";

import Wrapper from "components/card-wrapper/CardWrapper";
import GithubUser from "components/open-source/github-user/GithubUser";

import styles from "./OpenSource.module.css";

const OpenSource = ({ usernames }) => {
  return (
    <section id="openSource-section">
      <h2 className="section__title">OpenSource Projects</h2>
      {[].concat(usernames).map((username, index) => {
        return (
          <Wrapper key={index} className={styles.wrapper}>
            <GithubUser username={username} />
          </Wrapper>
        );
      })}
    </section>
  );
};

export default OpenSource;
