import React from "react";

import { useQuery, gql } from "@apollo/client";

import styles from "../css/OpenSource.module.css";
import RepoItem from "./RepoItem";

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
          }
        }
      }
      url
      avatarUrl
      createdAt
    }
  }
`;

const OpenSource = () => {
  const { loading, error, data } = useQuery(githubApiQuery);

  // we will tidy this up later to give a better 'loading' experience for slow
  // connections
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <section id="openSource">
      <div className="section__title">OpenSource</div>
      <div className={styles.openSource}>
        {data.user.pinnedItems.nodes.map((repo, index) => {
          return <RepoItem key={index} repo={repo} />;
        })}
        {/* <RepoItem item={data.user.pinnedItems.nodes} /> */}
      </div>
    </section>
  );
};

export default OpenSource;
