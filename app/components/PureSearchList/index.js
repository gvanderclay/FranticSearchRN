import * as React from "react";
import { List } from "react-native-elements";
import { ScrollView } from "react-native";
import {
  Props as ListItemProps,
  PureSearchListItem
} from "../PureSearchListItem";

// type Props = {
//   items: Array<ListItemProps>
// };

export class PureSearchList extends React.Component {
  render() {
    return (
      <ScrollView>
        <List>
          {this.props.items.map(item => {
            console.log(item);
            return <PureSearchListItem text={item.text} />;
          })}
        </List>
      </ScrollView>
    );
  }
}
