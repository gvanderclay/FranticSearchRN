// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { PureSearchList, type Props } from "./index";
import { range } from "lodash";

storiesOf("Component - PureSearchList", module).add("Basic Example", () => {
  const items: Props = range(100).map(num => ({
    text: num
  }));

  return <PureSearchList items={items} />;
});
