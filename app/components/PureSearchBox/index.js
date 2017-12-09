import * as React from "react";
import { TextInput } from "react-native";
import style from "./style";
import PropTypes from "prop-types";

export class PureSearchBox extends React.Component {
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

PureSearchBox.PropTypes = {
  setSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};
