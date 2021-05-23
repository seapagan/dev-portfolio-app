import React from "react";

import styles from "../css/Social.module.css";

const Social = ({ social }) => {
  return (
    <div className={styles.socialContainer}>
      {social.map(socialItem => {
        if (socialItem.link) {
          return (
            <div key={socialItem.name}>
              <a
                href={socialItem.link}
                target="_blank"
                rel="noopener noreferrer"
                alt={`visit${socialItem.name}`}
                title={`${socialItem.name}`}>
                <img className={styles.icon} src={socialItem.icon} alt="" />
              </a>
            </div>
          );
        } else return "";
      })}
    </div>
  );
};

export default Social;
