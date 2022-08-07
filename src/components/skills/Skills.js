import React from "react";

import SkillItem from "./skill-item/SkillItem";

import styles from "./Skills.module.scss";

const Skills = ({ skills, additionalSkills }) => {
  return (
    <section id="skills-section">
      <h2 className="section__title">My Skills</h2>
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
