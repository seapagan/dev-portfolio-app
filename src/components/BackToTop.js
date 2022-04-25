import React from "react";
import { animateScroll as scroll } from "react-scroll";

import backToTopIcon from "../assets/icons/back-to-top.png";

import styles from "../css/BackToTop.module.css";

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
