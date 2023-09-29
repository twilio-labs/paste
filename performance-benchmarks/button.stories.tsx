import type { Story } from "@storybook/react";
import { Button } from "@twilio-paste/button";
import { Button as EgButton } from "evergreen-ui";
import * as React from "react";

export default {
  title: "Performance/Button",
  component: Button,
};

export const PasteButton: Story = () => {
  return <Button variant="primary">Button</Button>;
};
PasteButton.parameters = {
  a11y: {
    // no need to a11y check perf benchmarks
    disable: true,
  },
};
export const EvergreenButton: Story = () => {
  return <EgButton appearance="primary">Button</EgButton>;
};
EvergreenButton.parameters = {
  a11y: {
    // no need to a11y check perf benchmarks
    disable: true,
  },
};
