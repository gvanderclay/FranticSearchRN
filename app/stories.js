import { getStorybookUI, configure } from "@storybook/react-native";
import "@storybook/addon-actions/register";
import "@storybook/addon-links/register";
import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./components/Button";
import Welcome from "./components/Welcome";

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true });
export default StorybookUI;

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

import "./components/Button/button.stories";
