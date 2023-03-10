import React from "react";

import Wrapper from "../card-wrapper/CardWrapper";

import GithubUser from "./github-user/GithubUser";

import styles from "./OpenSource.module.scss";

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
