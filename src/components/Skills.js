import React from "react";

import styles from "../css/Skills.module.css";
import SkillItem from "./SkillItem";

const Skills = ({ skills, additionalSkills }) => {
  return (
    <section id="skills-section">
      <div className="section__title">My Skills</div>
      <div className={styles.skills}>
        {skills.map((skill, index) => {
          return <SkillItem key={index} skill={skill} />;
        })}
      </div>
      <div className={styles.additionalSkills}>
        <div className={styles.adnSkillTitle}>Additional Skills include : </div>
        {additionalSkills.map((skill, index) => {
          return (
            <div className={styles.adnSkillItem} key={index}>
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
