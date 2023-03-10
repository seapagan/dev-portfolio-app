import React, { useState } from "react";

import { LinkExternalIcon } from "@primer/octicons-react";

import styles from "./ProjectCard.module.scss";

import CardWrapper from "/src/components/card-wrapper/CardWrapper";

const ProjectCard = ({ project }) => {
  return (
    <CardWrapper className={styles.projectWrapper} key={project.name}>
      <div className={styles.left}>
        <img src={project.image} alt="" />
      </div>
      <div className={styles.right}>
        <h3 className={styles.heading}>{project.name}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.linksContainer}>
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <LinkExternalIcon />
              &nbsp;Visit Website
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <LinkExternalIcon />
              &nbsp;View Code
            </a>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
