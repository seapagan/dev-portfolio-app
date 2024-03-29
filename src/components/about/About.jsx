import PropTypes from "prop-types";

import styles from "./About.module.scss";

const About = ({ about }) => {
  return (
    <section id="about-section">
      <h2 className="section__title">About Me</h2>
      <div className={styles.about}>
        {about.map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
      </div>
    </section>
  );
};
About.propTypes = {
  about: PropTypes.array.isRequired,
};

export default About;
