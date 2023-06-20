import React, { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard/ProjectCard";

import styles from "./Projects.module.scss";

const Projects = ({ projectList, delay = 10 }) => {
  const [current, setCurrent] = useState(0);
  const [rotate, setRotate] = useState(true);
  const numProjects = projectList.length;

  const rotateHandler = () => {
    setRotate(prev => !prev);
  };

  useEffect(() => {
    if (rotate) {
      const timer = setTimeout(() => {
        setCurrent(current => {
          if (current === numProjects - 1) {
            return 0;
          }

          return current + 1;
        });
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [current, delay, numProjects, rotate]);

  return (
    <section id="projects-section">
      <h2 className="section__title">Notable Projects</h2>
      <div className={styles.projects}>
        <ProjectCard project={projectList[current]} />
        <div className={styles.rotateCheck}>
          <label htmlFor="rotate-projects">Auto Rotate?</label>
          <input
            onChange={rotateHandler}
            checked={rotate}
            id="rotate-projects"
            type="checkbox"></input>
        </div>
      </div>
    </section>
  );
};

export default Projects;
