import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { StopIcon } from "@twilio-paste/icons/esm/StopIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { SkeletonLoader } from "@twilio-paste/skeleton-loader";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

const clampedRandom = (min: number, max: number): number => {
  return Math.min(Math.max(min, Math.random() * max), max);
};
export interface AIChatMessageLoadingProps extends HTMLPasteProps<"div"> {
  children?: never;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "AI_CHAT_MESSAGE_LOADING"
   * @type {BoxProps["element"]}
   * @memberof AIChatMessageLoadingProps
   */
  element?: BoxElementProps["element"];
  onStopLoading?: () => void;
}

export const AIChatMessageLoading = React.forwardRef<HTMLDivElement, AIChatMessageLoadingProps>(
  ({ onStopLoading, element = "AI_CHAT_MESSAGE_LOADING", ...props }, ref) => {
    const widths = React.useRef([clampedRandom(40, 75), clampedRandom(65, 100), clampedRandom(55, 80)]).current;

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        role="listitem"
        display="flex"
        flexDirection="column"
        rowGap="space40"
      >
        <SkeletonLoader width={`${widths[0]}%`} height="20px" />
        <SkeletonLoader width={`${widths[1]}%`} height="20px" />
        <SkeletonLoader width={`${widths[2]}%`} height="20px" />
        {onStopLoading ? (
          <Box display="flex" justifyContent="center">
            <Button variant="secondary" size="rounded_small" onClick={onStopLoading}>
              <StopIcon decorative={true} />
              Stop generating <ScreenReaderOnly>AI response</ScreenReaderOnly>
            </Button>
          </Box>
        ) : null}
      </Box>
    );
  },
);

AIChatMessageLoading.displayName = "AIChatMessageLoading";
