import React, { useState } from "react";

import { useQuery, gql } from "@apollo/client";
import { ChevronRightIcon, ChevronDownIcon } from "@primer/octicons-react";

import styles from "../css/OpenSourceUser.module.css";
import RepoItem from "./RepoItem";
import RepoLoading from "./RepoLoading";

const OpenSourceUser = ({ username }) => {
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
    return data.user.repositories.nodes.map((repo, index) => {
      if (!pinnedRepos.includes(repo.name)) {
        return <RepoItem key={index} repo={repo} />;
      }
      return "";
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
              <div className={styles.urlTitle}>
                <b>
                  <span onClick={toggleUser} className={styles.foldIcon}>
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
                  <a
                    href={data.user.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    visit on github
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

export default OpenSourceUser;
