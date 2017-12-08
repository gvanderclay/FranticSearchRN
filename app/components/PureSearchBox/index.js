import * as React from "react";
import { TextInput } from "react-native";
import style from "./style";

export class PureSearchBox extends React.Component {
  render() {
    return <TextInput placeholder="Search" style={style.main} />;
  }
}
