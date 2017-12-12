// @flow
import * as React from "react";
import { TextInput } from "react-native";
import style from "./style";

type Props = {
  setSearch: () => void,
  searchTerm: string
};

export class PureSearchBox extends React.Component<Props, {}> {
  render() {
    const { setSearch, searchTerm } = this.props;
    return (
      <TextInput
        placeholder="Search"
        style={style.main}
        onChangeText={setSearch}
        value={searchTerm}
      />
    );
  }
}
