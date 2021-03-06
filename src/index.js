import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

// const client = new ApolloClient({
//   uri: 'https://api-euwest.graphcms.com/v1/ck3n4ua4pjo7101ff3lth7xuq/master',
// });

const client = new ApolloClient({
  uri:
    "https://api-eu-central-1.graphcms.com/v2/ck8d06wpg49we01dm8kxibu1v/master",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
