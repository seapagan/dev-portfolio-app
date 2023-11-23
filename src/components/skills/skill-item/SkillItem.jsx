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
        <h3 className={styles.name}>{skill.name}</h3>
        <p className={styles.desc}>{skill.desc}</p>
      </div>
    </CardWrapper>
  );
};

export default SkillItem;
