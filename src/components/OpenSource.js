import React from "react";

import OpenSourceUser from "./OpenSourceUser";

const OpenSource = ({ usernames }) => {
  return (
    <section id="openSource-section">
      <div className="section__title">OpenSource Projects</div>
      {usernames.map((username, index) => {
        return <OpenSourceUser key={index} username={username} />;
      })}
    </section>
  );
};

export default OpenSource;
