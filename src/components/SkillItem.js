import React from "react";

import styles from "../css/SkillItem.module.css";
import CardWrapper from "./CardWrapper";

const SkillItem = ({ skill }) => {
  return (
    <CardWrapper>
      <div>Skill: {skill.name}</div>
      <div>Description: {skill.desc}</div>
    </CardWrapper>
  );
};

export default SkillItem;
