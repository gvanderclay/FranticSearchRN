import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { PureSearchListItem } from "./index";

storiesOf("Component - PureSearchListItem", module).add("Basic Example", () => {
  return <PureSearchListItem text="Search List Item" />;
});
