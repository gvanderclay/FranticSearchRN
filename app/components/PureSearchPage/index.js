// @flow
import * as React from "react";
import { View } from "react-native";
import { PureSearchBox } from "../PureSearchBox/index";
import { PureSearchList } from "../PureSearchList/index";

export class PureSearchPage extends React.PureComponent {
  render() {
    return (
      <View>
        <PureSearchBox {...this.props.searchBoxProps} />
        <PureSearchList {...this.props.searchListProps} />
      </View>
    );
  }
}
