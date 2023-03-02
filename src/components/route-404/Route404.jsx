import React from "react";

import { Link, useLocation } from "react-router-dom";

import styles from "./Route404.module.scss";

const Route404 = props => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <p className={styles.errorText}>
        Thats a 404 there on <code>{location.pathname}</code> my man!!
      </p>
      <p className={styles.errorSubtext}>
        (That means we cant find that page, sorry...)
      </p>
      <p className={styles.linkBack}>
        Go on, head back to the{" "}
        <Link className={styles.link} to="/">
          main page
        </Link>
      </p>
    </div>
  );
};

export default Route404;
