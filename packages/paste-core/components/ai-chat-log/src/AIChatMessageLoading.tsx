import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { StopIcon } from "@twilio-paste/icons/esm/StopIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { SkeletonLoader } from "@twilio-paste/skeleton-loader";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { AIMessageContext } from "./AIMessageContext";

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
  /**
   * Function to call when "Stop generating AI response" button is clicked. If not provided, the button will not be rendered.
   *
   * @type {() => void}
   * @memberof AIChatMessageLoadingProps
   */
  onStopLoading?: () => void;
  /**
   * I18n label text for the "Stop generating" button when `onStopLoading` is passed for non-english languages.
   *
   * @default "Stop generating"
   * @type {string}
   * @memberof AIChatMessageLoadingProps
   */
  i18nStopGeneratingLabel?: string;
  /**
   * I18n accessible screen reader text to give context to the "Stop generating" button when `onStopLoading` is passed for non-english languages. Should read as a sentence, e.g. "Stop generating AI response".
   *
   * @default "AI response"
   * @type {string}
   * @memberof AIChatMessageLoadingProps
   */
  i18nAIScreenReaderText?: string;
}

export const AIChatMessageLoading = React.forwardRef<HTMLDivElement, AIChatMessageLoadingProps>(
  (
    {
      onStopLoading,
      i18nStopGeneratingLabel = "Stop generating",
      i18nAIScreenReaderText = "AI response",
      element = "AI_CHAT_MESSAGE_LOADING",
      ...props
    },
    ref,
  ) => {
    const widths = React.useRef([clampedRandom(40, 75), clampedRandom(65, 100), clampedRandom(55, 80)]).current;

    const { id: messageBodyID } = React.useContext(AIMessageContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        display="flex"
        flexDirection="column"
        rowGap="space40"
      >
        <SkeletonLoader width={`${widths[0]}%`} height="20px" element={`${element}_SKELETON`} />
        <SkeletonLoader width={`${widths[1]}%`} height="20px" element={`${element}_SKELETON`} />
        <SkeletonLoader width={`${widths[2]}%`} height="20px" element={`${element}_SKELETON`} />
        {onStopLoading ? (
          <Box display="flex" justifyContent="center" element={`${element}_STOP_LOADING`}>
            <Button
              variant="secondary"
              size="rounded_small"
              onClick={onStopLoading}
              aria-controls={messageBodyID}
              element={`${element}_STOP_BUTTON`}
            >
              <StopIcon decorative={true} />
              {i18nStopGeneratingLabel} <ScreenReaderOnly>{i18nAIScreenReaderText}</ScreenReaderOnly>
            </Button>
          </Box>
        ) : null}
      </Box>
    );
  },
);

AIChatMessageLoading.displayName = "AIChatMessageLoading";
