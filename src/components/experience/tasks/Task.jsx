import styles from "./Task.module.scss";

const Task = ({ responsibility }) => {
  return (
    <dl className={styles.wrapper}>
      <dt>{responsibility.name}</dt>
      <dd>{responsibility.desc}</dd>
    </dl>
  );
};

export default Task;
