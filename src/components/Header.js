import React from "react";
import { NavLink, Link } from "react-router-dom";

import styles from "../css/Header.module.css";

const Header = ({ settings }) => {
  console.log(settings);
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.namebadge}>
        &lt; {settings.name} /&gt;
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Open-Source</li>
          <li>
            <NavLink
              activeClassName={styles.navLinkActive}
              className={styles.navLink}
              to="/cv">
              CV
            </NavLink>
          </li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
