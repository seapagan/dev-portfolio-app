import React from "react";

import {
  DotFillIcon,
  GitCommitIcon,
  RepoForkedIcon,
  RepoIcon,
  StarIcon,
} from "@primer/octicons-react";

import { GitHubReadmeButton } from "react-github-readme-button";

import CardWrapper from "../card-wrapper/CardWrapper";

import styles from "./RepoItem.module.scss";

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
      <h4 className={styles.name}>
        <span className={styles.repoIcon}>
          <RepoIcon size="medium" />
        </span>
        {repo.name}
      </h4>
      <p className={styles.desc}>{repo.description}</p>
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
      <GitHubReadmeButton branch={defaultBranch} repo={repo.nameWithOwner} />
      <a
        className={styles.url}
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer">
        View on GitHub
      </a>
    </CardWrapper>
  );
};

export default RepoItem;
