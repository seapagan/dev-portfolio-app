import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <div>
      <div>Skill: {skill.name}</div>
      <div>Description: {skill.desc}</div>
    </div>
  );
};

export default SkillItem;
