import React from "react";

import styles from "./ToggleTheme.module.scss";

const ToggleTheme = ({ mode, toggleTheme }) => {
  return (
    <div className={styles.toggleWrapper}>
      <input
        className={styles.toggle}
        type="checkbox"
        name="toggle-theme"
        id="toggle-theme"
        onClick={toggleTheme}
        checked={mode === "dark" ? true : false}
        readOnly
      />
    </div>
  );
};

export default ToggleTheme;
