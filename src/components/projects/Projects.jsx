import React, { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard/ProjectCard";

import styles from "./Projects.module.scss";

const Projects = ({ projectList, delay = 10 }) => {
  const [current, setCurrent] = useState(0);
  const numProjects = projectList.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current => {
        if (current === numProjects - 1) {
          return 0;
        }

        return current + 1;
      });
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [current, delay, numProjects]);

  return (
    <section id="projects-section">
      <h2 className="section__title">Notable Projects</h2>
      <div className={styles.projects}>
        <ProjectCard project={projectList[current]} />
      </div>
    </section>
  );
};

export default Projects;
