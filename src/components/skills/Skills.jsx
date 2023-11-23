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
        <h3 className={styles.adnSkillTitle}>Additional Skills include : </h3>
        {additionalSkills.map((skill, index) => {
          return (
            <span className={styles.adnSkillItem} key={index}>
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
