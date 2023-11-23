import PropTypes from "prop-types";

import styles from "./OpenSource.module.scss";

import Wrapper from "/src/components/card-wrapper/CardWrapper";
import GithubUser from "/src/components/open-source/github-user/GithubUser";

const OpenSource = ({ usernames }) => {
  if (!usernames?.length) {
    return null;
  }

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
OpenSource.propTypes = {
  usernames: PropTypes.array.isRequired,
};

export default OpenSource;
