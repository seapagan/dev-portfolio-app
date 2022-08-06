import React from "react";

import backToTopIcon from "assets/icons/back-to-top.png";
import { animateScroll as scroll } from "react-scroll";

import styles from "./BackToTop.module.css";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const BackToTop = () => {
  return (
    <div className={styles.backToTop}>
      <img onClick={scrollToTop} src={backToTopIcon} alt="back-to-top" />
    </div>
  );
};

export default BackToTop;
