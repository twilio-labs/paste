import { Box, type BoxProps } from "@twilio-paste/box";
import * as React from "react";

import { getColorToken } from "./helpers";
import type { UIStates } from "./types";

export interface SliderTrackProps extends UIStates {
  children?: React.ReactNode;
  fillPercent?: string | number;
  element: BoxProps["element"];
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export const SliderTrack: React.FC<SliderTrackProps> = ({
  element = "SLIDER_TRACK",
  fillPercent = "0%",
  children,
  ...props
}) => {
  return (
    <Box {...props} position="relative" height="4px" width="100%" element={element}>
      <Box
        element={`${element}_BACKGROUND`}
        borderRadius="borderRadius20"
        position="absolute"
        top={0}
        left={0}
        backgroundColor="colorBackgroundStrong"
        height="100%"
        width="100%"
      />
      <Box
        element={`${element}_FILL`}
        borderRadius="borderRadius20"
        position="absolute"
        top={0}
        left={0}
        backgroundColor={getColorToken(props)}
        height="100%"
        width={fillPercent}
        transition="background-color 150ms ease"
      />
      {children}
    </Box>
  );
};
SliderTrack.displayName = "SliderTrack";
