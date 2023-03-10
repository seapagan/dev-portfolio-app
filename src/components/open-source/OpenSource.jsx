import React from "react";

import styles from "./OpenSource.module.scss";

import Wrapper from "/src/components/card-wrapper/CardWrapper";
import GithubUser from "/src/components/open-source/github-user/GithubUser";

const OpenSource = ({ usernames }) => {
  return (
    <section id="openSource-section">
      <h2 className="section__title">OpenSource Projects</h2>
      {[].concat(usernames).map(username => {
        return (
          <Wrapper key={username} className={styles.wrapper}>
            <GithubUser username={username} />
          </Wrapper>
        );
      })}
    </section>
  );
};

export default OpenSource;
