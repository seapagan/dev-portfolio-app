import React from "react";

import styles from "../css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.copyright}>
          Created with 'Developer Portfolio', &copy;Seapagan 2021
        </div>
      </div>
    </footer>
  );
};

export default Footer;
