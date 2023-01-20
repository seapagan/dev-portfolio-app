import React from "react";

import { createRoot } from "react-dom/client";

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

// import the css reset rules
// import "modern-css-reset";
import { settings } from "./configure/settings";
import App from "./App";

import "index.css";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from settings.
  const token = settings.githubToken;

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App settings={settings} />
    </ApolloProvider>
  </React.StrictMode>
);
