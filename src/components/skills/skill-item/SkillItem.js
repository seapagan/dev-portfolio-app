import React from "react";

import CardWrapper from "../../card-wrapper/CardWrapper";

import styles from "./SkillItem.module.css";

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
