import React from "react";

import { animateScroll as scroll } from "react-scroll";

import styles from "./BackToTop.module.scss";

import { ReactComponent as BackToTopIcon } from "/src/assets/icons/back-to-top.svg";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const BackToTop = () => {
  return (
    <div className={styles.backToTop}>
      <BackToTopIcon onClick={scrollToTop} />
    </div>
  );
};

export default BackToTop;
