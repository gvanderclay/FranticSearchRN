import StorybookUI from "./app/stories";
import * as React from "react";
import App from "./app";
import { Text } from "react-native";

const runStorybook = process.env.REACT_NATIVE_STORYBOOK;
console.log(process.env);

class AppContainer extends React.Component {
  render() {
    return <Text>Hello</Text>;
  }
}

export default (runStorybook ? StorybookUI : AppContainer);
