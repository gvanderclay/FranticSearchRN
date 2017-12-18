// @flow
import * as React from "react";
import { SearchBar } from "react-native-elements";
import style from "./style";

export type Props = {
  setSearch: (text: string) => void,
  searchTerm: any
};

export class PureSearchBox extends React.PureComponent<Props> {
  render() {
    const { setSearch, searchTerm } = this.props;
    return (
      <SearchBar
        placeholder="Search"
        onChangeText={setSearch}
        value={searchTerm}
        lightTheme={true}
      />
    );
  }
}
