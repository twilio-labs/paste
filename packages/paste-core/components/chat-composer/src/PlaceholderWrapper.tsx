import type { BoxProps } from "@twilio-paste/box";
import { Box } from "@twilio-paste/box";
import * as React from "react";

import type { ChatComposerProps } from ".";
import { ChatComposerContext } from "./ChatComposerContext";

export const PlaceholderWrapper: React.FC<
  React.PropsWithChildren<{
    placeholder: ChatComposerProps["placeholder"];
    element?: BoxProps["element"];
  }>
> = ({ placeholder, element }) => {
  const { isDisabled } = React.useContext(ChatComposerContext);

  return (
    <Box
      position="absolute"
      top="space30"
      left="space40"
      right="space40"
      display="flex"
      alignItems="center"
      color={isDisabled ? "colorTextWeaker" : "colorTextWeak"}
      pointerEvents="none"
      userSelect="none"
      fontStyle="italic"
      element={element}
    >
      {placeholder}
    </Box>
  );
};

PlaceholderWrapper.displayName = "PlaceholderWrapper";
