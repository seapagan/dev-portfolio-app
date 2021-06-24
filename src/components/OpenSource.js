import React from "react";

import { useQuery, gql } from "@apollo/client";

import styles from "../css/OpenSource.module.css";
import RepoItem from "./RepoItem";
import RepoLoading from "./RepoLoading";

const githubApiQuery = gql`
  {
    user(login: "seapagan") {
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
          }
        }
      }
      url
      avatarUrl
      createdAt
      name
      repositories {
        totalCount
      }
    }
  }
`;

const OpenSource = () => {
  const { loading, error, data } = useQuery(githubApiQuery);

  if (error)
    return (
      <section id="openSource">
        <div className="section__title">OpenSource Projects</div>
        <div>{`Error! ${error.message}`}</div>
      </section>
    );

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
              return <RepoItem key={index} repo={repo} />;
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default OpenSource;
