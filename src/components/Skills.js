import React from "react";

import styles from "../css/Skills.module.css";
import SkillItem from "./SkillItem";

const Skills = ({ skills }) => {
  return (
    <section id="skills" className={styles.section}>
      <div className="section__title">Skills</div>
      {skills.map((skill, index) => {
        return <SkillItem key={index} skill={skill} />;
      })}
    </section>
  );
};

export default Skills;
