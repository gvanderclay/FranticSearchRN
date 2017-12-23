// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import {
  PureSearchPage
  // type Props
} from ".";
import { range } from "lodash";

storiesOf("Component - PureSearchPage", module).add("Basic Example", () => {
  const props = {
    listProps: {
      items: range(100).map(num => ({
        text: num
      }))
    },
    searchBoxProps: {
      setSearch: (text: string) => {},
      searchTerm: ""
    }
  };

  return <PureSearchPage {...props} />;
});
