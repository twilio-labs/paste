import type { StoryFn } from "@storybook/react";
import React from "react";

import { FigmaButton } from "../src/components/site-wrapper/site-header/FigmaButton";

export default {
  title: "Website/FigmaButton",
  component: FigmaButton,
};

export const FigmaButtonStory: StoryFn = () => <FigmaButton />;
