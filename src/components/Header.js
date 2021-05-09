import React from "react";

import { Link } from "react-scroll";

import styles from "../css/Header.module.css";

const Header = ({ name }) => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.namebadge}>
        &lt; {name} /&gt;
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            {/* <Link
              className={styles.navLink}
              to="about-section"
              spy={true}
              smooth={true}
              duration={1000}>
              About
            </Link> */}
          </li>
          <li>
            <Link
              className={styles.navLink}
              to="skills-section"
              spy={true}
              smooth={true}
              duration={1000}>
              Skills
            </Link>
          </li>
          <li>
            <Link
              className={styles.navLink}
              to="experience-section"
              spy={true}
              smooth={true}
              duration={1000}>
              Experience
            </Link>
          </li>
          <li>
            <Link
              className={styles.navLink}
              to="openSource-section"
              spy={true}
              smooth={true}
              duration={1000}>
              Open-Source
            </Link>
          </li>
          {/* <li>
            <NavLink
              activeClassName={styles.navLinkActive}
              className={styles.navLink}
              to="/cv">
              CV
            </NavLink>
          </li> */}
          <li>
            <Link
              className={styles.navLink}
              to="contact-section"
              spy={true}
              smooth={true}
              duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
