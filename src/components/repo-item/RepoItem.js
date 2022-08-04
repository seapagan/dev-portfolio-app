import React from "react";

import {
  DotFillIcon,
  GitCommitIcon,
  RepoForkedIcon,
  RepoIcon,
  StarIcon,
} from "@primer/octicons-react";

import CardWrapper from "components/card-wrapper/CardWrapper";

import styles from "./RepoItem.module.css";

const RepoItem = ({ repo }) => {
  const totalCommits = repo.defaultBranchRef.target.history.totalCount;
  const defaultBranch = repo.defaultBranchRef.name;

  let primaryLanguage;
  let primaryLanguageColor;
  let licenseType;

  if (repo.primaryLanguage) {
    primaryLanguage = repo.primaryLanguage.name;
    primaryLanguageColor = repo.primaryLanguage.color;
  } else {
    primaryLanguage = "";
    primaryLanguageColor = "";
  }

  if (repo.licenseInfo) {
    licenseType = repo.licenseInfo.name;
  } else {
    licenseType = "No License Specified";
  }

  return (
    <CardWrapper className={styles.repoItem}>
      {repo.isFork && <span className={styles.fork}>Forked</span>}
      <div className={styles.name}>
        <span className={styles.repoIcon}>
          <RepoIcon size="medium" />
        </span>
        {repo.name}
      </div>
      <div className={styles.desc}>{repo.description}</div>
      <div className={styles.languageLicense}>
        {primaryLanguage !== "" && (
          <div style={{ color: primaryLanguageColor }}>
            <DotFillIcon />
            {primaryLanguage}
          </div>
        )}
        <div>{licenseType}</div>
      </div>
      <div className={styles.metrics}>
        <div
          className={styles.metricItem}
          title={`Number of Commits on the main branch '${defaultBranch}'`}>
          <GitCommitIcon verticalAlign="middle" size="small" />
          <span className={styles.metricValue}>{totalCommits}</span>
        </div>
        <div className={styles.metricItem} title={"Number of Stars"}>
          <StarIcon verticalAlign="middle" size="small" />
          <span className={styles.metricValue}>{repo.stargazerCount}</span>
        </div>
        <div className={styles.metricItem} title={"Number of Forks"}>
          <RepoForkedIcon verticalAlign="middle" size="small" />
          <span className={styles.metricValue}>{repo.forkCount}</span>
        </div>
      </div>
      <a
        className={styles.url}
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer">
        Visit on GitHub
      </a>
    </CardWrapper>
  );
};

export default RepoItem;
