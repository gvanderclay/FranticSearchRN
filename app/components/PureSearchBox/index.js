// @flow
import * as React from "react";
import { SearchBar } from "react-native-elements";
import style from "./style";

type Props = {
  setSearch: () => void,
  searchTerm: string
};

export class PureSearchBox extends React.Component<Props, {}> {
  render() {
    const { setSearch, searchTerm } = this.props;
    return (
      <SearchBar
        placeholder="Search"
        style={style.main}
        onChangeText={setSearch}
        value={searchTerm}
        lightTheme={true}
      />
    );
  }
}
