import React from "react";

import styles from "../css/SkillItem.module.css";
import CardWrapper from "./CardWrapper";

const SkillItem = ({ skill }) => {
  return (
    <CardWrapper className={styles.skillItem}>
      <div className={styles.icon}>
        <img src={skill.icon} alt="" />
      </div>
      <div>
        <div className={styles.name}>{skill.name}</div>
        <div className={styles.desc}>{skill.desc}</div>
      </div>
    </CardWrapper>
  );
};

export default SkillItem;
