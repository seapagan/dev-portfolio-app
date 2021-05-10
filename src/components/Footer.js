import React from "react";

import styles from "../css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          <a
            href="https://github.com/seapagan/dev-portfolio-app"
            className={styles.link}
            rel="noopener noreferrer"
            target="_blank">
            Developer Portfolio App
          </a>
          , &copy;Grant Ramsay 2021
        </div>
        <div className={styles.license}>
          Released under the{" "}
          <a
            className={styles.link}
            href="https://opensource.org/licenses/MIT"
            rel="noopener noreferrer"
            target="_blank">
            MIT
          </a>{" "}
          License.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
