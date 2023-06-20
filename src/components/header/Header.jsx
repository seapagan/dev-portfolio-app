import React, { useRef } from "react";

import { Link } from "react-scroll";

import styles from "./Header.module.scss";

const Header = ({ name }) => {
  // set a Ref on the checkbox used to open/close the CSS menu. This will be
  // used to ensure we can close it when clicked.
  const toggleRef = useRef();

  const closeMenu = () => {
    // close the responsive menu on click. Detect if it is open by querying the
    // 'current.checked' property from the Ref.
    toggleRef.current.checked && (toggleRef.current.checked = false);
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.namebadge}>&lt; {name} /&gt;</h1>
        <input
          ref={toggleRef}
          type="checkbox"
          id="nav-toggle"
          className={styles.navToggle}
        />
        <label htmlFor="nav-toggle" className={styles.navToggleLabel}>
          <span></span>
        </label>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                className={styles.navLink}
                to="about-section"
                spy={true}
                smooth={true}
                duration={1000}>
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
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
                onClick={closeMenu}
                className={styles.navLink}
                to="experience-section"
                spy={true}
                smooth={true}
                duration={1000}>
                Experience
              </Link>
            </li>
            {/* <li>
              <a
                onClick={closeMenu}
                className={styles.navLink}
                href="http://www.grantramsay.dev"
                target="_blank"
                rel="noopener noreferrer">
                Projects
              </a>
            </li> */}
            <li>
              <Link
                onClick={closeMenu}
                className={styles.navLink}
                to="openSource-section"
                spy={true}
                smooth={true}
                duration={1000}>
                Open-Source
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                className={styles.navLink}
                to="contact-section"
                spy={true}
                smooth={true}
                duration={1000}>
                Contact
              </Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
