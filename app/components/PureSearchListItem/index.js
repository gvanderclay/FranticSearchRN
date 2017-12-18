import * as React from "react";
import { ListItem } from "react-native-elements";

export type Props = {
  text: string
};

export class PureSearchListItem extends React.PureComponent<Props> {
  render() {
    return <ListItem title={this.props.text} />;
  }
}
