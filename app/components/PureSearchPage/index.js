// @flow
import * as React from "react";
import { View } from "react-native";
import {
  PureSearchBox
  // type Props as SearchBoxProps
} from "../PureSearchBox/index";
import {
  PureSearchList
  // type Props as SearchListProps
} from "../PureSearchList/index";

// export type Props = {
//   listProps: SearchListProps,
//   searchBoxProps: SearchBoxProps
// };

export class PureSearchPage extends React.PureComponent {
  render() {
    return (
      <View>
        <PureSearchBox {...this.props.searchBoxProps} />
        <PureSearchList {...this.props.listProps} />
      </View>
    );
  }
}
