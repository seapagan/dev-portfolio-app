import React from "react";

import styles from "../css/Skills.module.css";
import SkillItem from "./SkillItem";

const Skills = ({ skills }) => {
  return (
    <section id="skills" className={styles.section}>
      <div className="section__title">Skills</div>
      <div className={styles.skills}>
        {skills.map((skill, index) => {
          return <SkillItem key={index} skill={skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
