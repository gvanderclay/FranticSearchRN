import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Button from "../Button";
import { Text } from "react-native";
import CenterView from "../CenterView";

storiesOf("Button", module).add("with text", () => (
  <CenterView>
    <Button onPress={action("clicked-text")}>
      <Text>Hello jon</Text>
    </Button>
  </CenterView>
));
