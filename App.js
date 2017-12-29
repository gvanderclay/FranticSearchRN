// @flow
import StorybookUI from "./app/stories";
import * as React from "react";
import { App } from "./app/index";
import { Text } from "react-native";
import { RestLink } from "apollo-link-rest";
import { ApolloClient } from "apollo-client-preset";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory/lib/inMemoryCache";

const MTG_ENDPOINT = "https://api.magicthegathering.io/v1";

const restLink = new RestLink({
  uri: MTG_ENDPOINT
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
});

class AppContainer extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
  }
}

const runStorybook = process.env.REACT_NATIVE_STORYBOOK;

export default (runStorybook ? StorybookUI : AppContainer);
