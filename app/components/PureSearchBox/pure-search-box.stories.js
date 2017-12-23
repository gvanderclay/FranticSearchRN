import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { PureSearchBox } from ".";

storiesOf("Component - Pure Search Box", module)
  .add("Example without search term", () => {
    return <PureSearchBox setSearch={(a: string) => {}} searchTerm="" />;
  })
  .add("Example with search term", () => {
    let searchTerm = "test";
    const setSearch = (text: string) => {
      searchTerm = text;
    };
    return <PureSearchBox searchTerm={""} setSearch={setSearch} />;
  });
