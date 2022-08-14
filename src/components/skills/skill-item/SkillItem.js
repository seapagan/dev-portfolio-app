import React from "react";

import CardWrapper from "../../card-wrapper/CardWrapper";

import styles from "./SkillItem.module.scss";

const SkillItem = ({ skill }) => {
  return (
    <CardWrapper className={styles.skillItem}>
      <div className={styles.icon}>
        {typeof skill.icon === "string" ? (
          <img src={skill.icon} alt="" />
        ) : (
          <skill.icon />
        )}
      </div>
      <div>
        <div className={styles.name}>{skill.name}</div>
        <div className={styles.desc}>{skill.desc}</div>
      </div>
    </CardWrapper>
  );
};

export default SkillItem;
