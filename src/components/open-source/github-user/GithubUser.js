import React, { useState } from "react";

import { gql, useQuery } from "@apollo/client";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  MarkGithubIcon,
} from "@primer/octicons-react";

import RepoItem from "components/repo-item/RepoItem";
import RepoLoading from "components/repo-loading/RepoLoading";

import styles from "./GithubUser.module.scss";

const GithubUser = ({ username }) => {
  const githubApiQuery = gql`
    {
      user(login: "${username}") {
        anyPinnableItems(type: REPOSITORY)
        pinnedItems(first: 10) {
          totalCount
          nodes {
            ... on Repository {
              name
              description
              stargazerCount
              url
              homepageUrl
              forkCount
              createdAt
              pushedAt
              updatedAt
              primaryLanguage {
                name
                color
              }
              defaultBranchRef {
                name
                target {
                  ... on Commit {
                    history {
                      totalCount
                    }
                  }
                }
              }
              licenseInfo {
                name
              }
              repositoryTopics(first: 20) {
                nodes {
                  topic {
                    name
                  }
                }
              }
              isFork
              isArchived
            }
          }
        }
        url
        avatarUrl
        createdAt
        name
        repositories(privacy: PUBLIC, first: 100) {
          totalCount
          nodes {
            url
            description
            name
            stargazerCount
            forkCount
            createdAt
            pushedAt
            updatedAt
            primaryLanguage {
              name
              color
            }
            defaultBranchRef {
              name
              target {
                ... on Commit {
                  history {
                    totalCount
                  }
                }
              }
            }
            licenseInfo {
              name
            }
            isFork
            isArchived
          }
        }
      }
    }
  `;

  const [showUser, setShowUser] = useState(true);
  const [showPublicRepos, setShowPublicRepos] = useState(false);
  const { loading, error, data } = useQuery(githubApiQuery);

  const pinnedRepos = [];

  if (error)
    return (
      <section id="openSourceUser">
        <div>{`Error! ${error.message}`}</div>
      </section>
    );

  const togglePublicRepos = () => {
    // this will toggle to display the public repos
    setShowPublicRepos(!showPublicRepos);
  };

  const toggleUser = () => {
    // this will toggle to display the public repos
    setShowUser(!showUser);
  };

  const returnPinned = () => {
    return data.user.pinnedItems.nodes.map((repo, index) => {
      pinnedRepos.push(repo.name);

      return <RepoItem key={index} repo={repo} />;
    });
  };

  const returnPublic = () => {
    const data_copy = data.user.repositories.nodes.slice();
    const sorted = data_copy
      .filter(repo => !pinnedRepos.includes(repo.name) && !repo.isArchived)
      .sort((a, b) => {
        return Date.parse(b.pushedAt) - Date.parse(a.pushedAt);
      });

    return sorted.map((repo, index) => {
      return <RepoItem key={index} repo={repo} />;
    });
  };

  return (
    <>
      {loading ? (
        <RepoLoading />
      ) : (
        <>
          <div className={styles.openSource}>
            <div className={styles.header}>
              <div onClick={toggleUser} className={styles.userTitle}>
                <b>
                  <span className={styles.foldIcon}>
                    {showUser ? (
                      <ChevronDownIcon size="medium" />
                    ) : (
                      <ChevronRightIcon size="medium" />
                    )}
                  </span>
                  Github Account “{username}”
                </b>
              </div>
            </div>

            {showUser && (
              <>
                <div className={styles.url}>
                  <MarkGithubIcon />
                  <a
                    href={data.user.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    view repositories on github
                  </a>
                </div>
                <div className={styles.openSourceGrid}>
                  <>
                    {returnPinned()}
                    <div className={styles.publicHeader}>
                      <div
                        onClick={togglePublicRepos}
                        className={styles.publicTitle}>
                        {showPublicRepos ? "Hide" : "Show"}
                        &nbsp;Public Repositories.
                      </div>
                    </div>
                    {showPublicRepos ? returnPublic() : ""}
                  </>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default GithubUser;
