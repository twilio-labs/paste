import { Text } from "@twilio-paste/text";
import * as React from "react";

import { ScreenReaderOnly } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Screen reader only",
  component: ScreenReaderOnly,
};

export const Default = (): React.ReactNode => {
  return (
    <Text as="p">
      Some visible text <ScreenReaderOnly>some not visible text</ScreenReaderOnly>
    </Text>
  );
};
