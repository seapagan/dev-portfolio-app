import React from "react";

import styles from "../css/Header.module.css";

const Header = ({ settings }) => {
  return (
    <header className={styles.header}>
      <div className={styles.namebadge}>&lt; {settings.name} /&gt;</div>
      <nav className={styles.nav}>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Open-Source</li>
          <li>CV</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
