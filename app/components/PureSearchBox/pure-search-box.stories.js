import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { PureSearchBox } from ".";

storiesOf("Component - Pure Search Box", module).add("Basic Example", () => {
  return <PureSearchBox />;
});
