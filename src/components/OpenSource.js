import React, { useState } from "react";

import { useQuery, gql } from "@apollo/client";

import styles from "../css/OpenSource.module.css";
import RepoItem from "./RepoItem";
import RepoLoading from "./RepoLoading";

const OpenSource = ({ username }) => {
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

  const [showPublicRepos, setShowPublicRepos] = useState(false);
  const { loading, error, data } = useQuery(githubApiQuery);

  const pinnedRepos = [];

  if (error)
    return (
      <section id="openSource">
        <div className="section__title">OpenSource Projects</div>
        <div>{`Error! ${error.message}`}</div>
      </section>
    );

  const togglePublicRepos = () => {
    // this will toggle to display the public repos
    setShowPublicRepos(!showPublicRepos);
  };

  return (
    <section id="openSource-section">
      <div className="section__title">OpenSource Projects</div>
      {loading ? (
        <RepoLoading />
      ) : (
        <>
          <div className={styles.openSource}>
            <div className={styles.header}>
              <div className={styles.urlTitle}>
                <b>
                  <a
                    className={styles.url}
                    href={data.user.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    Visit Github Account
                  </a>
                </b>
              </div>
              <div className={styles.pinnedTitle}>Pinned Repositories.</div>
            </div>
            {data.user.pinnedItems.nodes.map((repo, index) => {
              pinnedRepos.push(repo.name);
              return <RepoItem key={index} repo={repo} />;
            })}

            <div className={styles.header}>
              <div onClick={togglePublicRepos} className={styles.publicTitle}>
                {showPublicRepos ? "Hide" : "Show"}
                &nbsp;Public Repositories.
              </div>
            </div>
            {showPublicRepos
              ? data.user.repositories.nodes.map((repo, index) => {
                  if (!pinnedRepos.includes(repo.name)) {
                    return <RepoItem key={index} repo={repo} />;
                  }
                  return "";
                })
              : ""}
          </div>
        </>
      )}
    </section>
  );
};

export default OpenSource;
